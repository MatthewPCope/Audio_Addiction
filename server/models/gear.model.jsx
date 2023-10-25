const mongoose = require("mongoose");
const GearSchema = new mongoose.Schema(
    {
    category: { type: String, 
        required: [true, "Category is required"],
        minlength: [3, "Category must be at least 3 characters long"] },
    brand: { type: String,
        required: [true, "Brand is required"] },
    model: { type: String,
        required: [true, "Model is required"],
        minlength: [3, "Model must be at least 3 characters long"]},
    price: { type: Number,
        required: [true, "Price is required"]},
    thoughts: { type: String}
    }, 
    { timestamps: true }
);



const Gear = mongoose.model("Gear", GearSchema);

module.exports = Gear;