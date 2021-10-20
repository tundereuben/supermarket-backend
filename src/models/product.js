const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       trim: true
   },
    category: {
        type: String,
        required: true,
        trim: true
    },
    subCategory: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true,
        default: 'assets/images'
    },
    price: {
       type: Number,
        default: 0
    },
    display: {
       type: Boolean,
        default: true
    },
    promo: {
       type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
