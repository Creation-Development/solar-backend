const Slider = require("../models/Slider");



exports.AllImage = async (req, res) => {
    try {
        const AllImages = await Slider.find({}).lean()
        res.send(AllImages)
    } catch (error) {
        res.json({
            msg: error
        })
    }
}



exports.AddImage = async (req, res) => {
    try {
        const {
            index,
            image,
            title,
            desc
        } = req.body
        var CreateNewImage = await Slider.create({
            index: index,
            image: image,
            title: title,
            desc: desc,
        })
        if (CreateNewImage) {
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




exports.FindImage = async (req, res) => {
    try {
        const index = req.params.index
        var GetImage = await Slider.findOne({
            index: index
        })
        if (GetImage) {
            res.send(GetImage)
        }
    } catch (error) {
        res.json({
            msg: error
        })
    }
}
