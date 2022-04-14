const mongoose = require('mongoose');

const SliderSchema = mongoose.Schema({
    index: {
        type: Number,
        index: true,
        default: null,
    },
    image: {
        type: String,
        index: true,
        default: null,
    },
    title: {
        type: String,
        index: true,
        default: null,
    },
    desc: {
        type: String,
        index: true,
        default: null,
    }
}, { timestamps: true })

module.exports = mongoose.model('Slider', SliderSchema)    