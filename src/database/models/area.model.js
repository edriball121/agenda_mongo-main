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
        type: String
    }
})

module.exports = mongoose.model('area', areaSchema)