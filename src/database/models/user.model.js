const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: Boolean
    },
    areaId: {
        type: String
    },
}, { collection: 'user' })

module.exports = mongoose.model('User', userSchema)