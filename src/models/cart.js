const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       trim: true
   },
   imageUrl: {
    type: String,
    trim: true,
    default: 'assets/images/'
    },
    unitPrice: {
       type: Number,
       required: true,
       default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
     },
     owner: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
     }
}, {
    timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
