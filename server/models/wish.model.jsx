const mongoose = require("mongoose");
const WishSchema = new mongoose.Schema(
    {
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



const Wish = mongoose.model("Wish", WishSchema);

module.exports = Wish;