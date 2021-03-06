const mongoose = require('mongoose');
const validator = require('validator');

const purchaseSchema = new mongoose.Schema({
    owner: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
    }, 
    billingAddress: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        }
    },
    shippingAddress: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        }
    },
    order: {
        orderTrackingNumber: {
            type: Number,
        },
        totalQuantity: {
            type: Number,
        },
        totalPrice: {
            type: Number,
        },
        status: {
            type: String,
            default: 'pending'
        },

    }, 
    orderItems: [
        {
            imageUrl: {
                type: String,
            },
            unitPrice: {
                type: Number,
            },
            quantity: {
                type: Number,
            },
            productId: {
                type: String,
            }
        }
    ]
}, {
    timestamps: true
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;