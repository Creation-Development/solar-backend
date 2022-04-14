const User = require('../Models/userModel');
const { signAccessToken } = require("../Middlewares/jwt")


//alluser data
exports.allUser = async (req, res) => {
    var allUser = await User.find({}).lean()
    res.send(allUser)
}


//one user api
exports.OneUser = async (req, res) => {
    console.log(req.headers.authorization);
    var id = req.params.id
    var oneuser = await User.findById(id).lean()
    res.send(oneuser)
}

//New user create function
exports.CreateUser = async (req, res) => {
    try {
        console.log(req.body);
        const { email, phone, pass } = req.body
        var createUser = await User.create({
            email: email,
            phone: phone,
            pass: pass,
        })
        createUser.save()
        if (createUser) res.json({ success: "User added Successfully" })

    }
    catch {
        res.json({ msg: "user creation fail" })
    }
}

//login user

exports.Login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body
    const authUser = await User.findOne({ email: email, pass: password })

    const accessToken = await signAccessToken(authUser)
    if (authUser) {
        res.json({
            "token": accessToken,
            "id": authUser._id
        })
    }
    else {
        res.status(400).send({ msg: 'Error' })
    }
}
