const Components = require("../models/Components");



exports.AllComponent = async (req, res) => {
    try {
        const AllComponents = await Components.find({}).lean()
        res.send(AllComponents)
    } catch (error) {
        res.json({
            msg: error
        })
    }
}



exports.AddComponent = async (req, res) => {
    try {
        const {
            name,
            data,
        } = req.body
        var CreateNewComponent = await Components.create({
            name: name,
            data: data,
        })
        if (CreateNewComponent) {
            res.send({
                msg: "success"
            })
        }
    } catch (error) {
        res.json({
            msg: error
        })
    }
}




exports.FindComponent = async (req, res) => {
    try {
        const id = req.params.id
        var GetComponent = await Components.findOne({
            _id: id
        })
        if (GetComponent) {
            res.send(GetComponent)
        }
    } catch (error) {
        res.json({
            msg: error
        })
    }
}
