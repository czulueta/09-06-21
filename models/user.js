const mongoose = require("mongoose")
const Schema = mongoose.Schema

userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema)