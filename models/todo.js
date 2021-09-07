const mongoose = require("mongoose")
const Schema = mongoose.Schema

todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Todo", todoSchema)