const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter Price"],
        maxlength: [8, "Price can't exceed eight character"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    catagory: {
        type: String,
        required: [true, "Please enter Catagory"]
    },
    stock: {
        type: Number,
        required: [4, "Stock can't exceed four character"],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: [true, "Please enter Catagory"]
            },
            comment: {
                type: String,
                required: true
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);