const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
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
    display: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
