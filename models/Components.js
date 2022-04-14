const mongoose = require('mongoose');

const ComponentsSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        default: null,
    },
    data: {
        type: Object,
        index: true,
        default: null,
    }
}, { timestamps: true })

module.exports = mongoose.model('Components', ComponentsSchema)    