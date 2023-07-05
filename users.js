const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 120
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: false,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        immutable: true,//cant change that value ever
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: {
        street: String,
        city: String,
    }
})

//this makes the collection on mongodb
module.exports = mongoose.model('User', userSchema)