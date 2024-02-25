const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    observations: {
        type: String
    },
    status: {
        type: Boolean
    }
}, {
    collection: 'area',
    versionKey: false
})

module.exports = mongoose.model('area', areaSchema)