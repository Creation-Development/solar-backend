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



exports.EditHeaderComponent = async (req, res) => {
    try {
        const id = req.params.id
        const { listItem } = req.body
        var GetComponent = await Components.findOne({
            _id: id
        })
        const logo = GetComponent.data.logo
        const data = {
            logo: logo,
            listItem: listItem
        }
        var HeaderComponent = await Components.findOneAndUpdate({ _id: id }, { $set: { data: data } })
        if (HeaderComponent) {
            res.send({ msg: "updated" })
        }
    }
    catch (error) {
        res.send({ msg: "error" })
    }
}
exports.EditHomeComponent = async (req, res) => {
    try {
        const id = req.params.id
        const { title,paragraph } = req.body
        const data = {
            title: title,
            paragraph: paragraph
        }
        var HomeComponent = await Components.findOneAndUpdate({ _id: id }, { $set: { data: data } })
        if (HomeComponent) {
            res.send({ msg: "updated" })
        }
    }
    catch (error) {
        res.send({ msg: "error" })
    }
}
