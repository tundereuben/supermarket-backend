const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Cart = require('./cart')

const userSchema = new mongoose.Schema({
   firstName: {
       type: String,
       required: true,
       trim: true
   },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error ('Email is invalid!');
            }
        }
    },
    phone: {
       type: String,
        trim: true, 
        minlength: 11,
    },
    password: {
      type: String,
       required: true,
       trim: true, 
       minlength: 7,
       validate(value) {
           if (value.toLowerCase().includes('password')) {
               throw new Error('You cannot use the string password');
           }
       }
   },
   role: {
    type: String,
    trim: true,
    default: 'USER'
   },
   status: {
     type: String,
     default: 'inactive'
   },
  billingAddress: {
    street: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    }
  },
  shippingAddress: {
      street: {
          type: String,
          trim: true
      },
      city: {
          type: String,
          trim: true
      },
      state: {
          type: String,
          trim: true
      },
      country: {
          type: String,
          trim: true
      }
  },
    tokens: [{
        token: {
          type: String,
          required: true
        }
      }]
}, {
    timestamps: true
}); 

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
  
    user.tokens = user.tokens.concat({ token })
    await user.save()
  
    return token
  }

  userSchema.virtual('cart', {
    ref: 'Cart',
    localField: '_id',
    foreignField: 'owner'
  })

  userSchema.virtual('purchase', {
    ref: 'Purchase', 
    localField: '_id',
    foreignField: 'owner'
  })

  userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;
    
    return userObject;
  }

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
  
    if (!user) {
      throw new Error('Unables to login')
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      throw new Error ('Unable to login');
    }
  
    return user
  }

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
      }
    
      next()
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
  const user = this
  await Cart.deleteMany({ owner: user._id })
  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;
