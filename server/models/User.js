const mongoose = require("mongoose")

const FoodSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const FoodModal = mongoose.model("user" , FoodSchema)
module.exports = FoodModal