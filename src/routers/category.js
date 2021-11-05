const express = require('express');
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');
const router = new express.Router();

router.post('/category', async (req, res) => {
    const category = new Category(req.body);

    try {
        await category.save();
        res.status(201).send(category)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/category', async (req, res) => {
    // const match = {}; 
    // if (req.query.category) match.category = req.query.category;

    const limit = parseInt(req.query.limit) || 1000;
    const skip = parseInt(req.query.skip) || 0;
    const categories = await Category.find().limit(limit).skip(skip);

    try {
        if (!categories) {
            res.status(404).send('No products found!')
        }
        res.send(categories)
    } catch (e) {
        res.status(500)
    }
});

router.patch('/category/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'category'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'});
    }

    try {
        const _id = req.params.id;
        const category = await Category.findById(_id);

        if (!category) {
            return res.status(404).send();
        }
        updates.forEach((update) => category[update] = req.body[update]);

        await category.save();

        res.send(category);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete('/category/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        // const product = await Product.findOneAndDelete({ id: req.params.id });

        if (!category) {
            return res.status(404).send()
        }
        res.send(category)
    } catch (e) {
        res.status(500).send()
    }
});

module.exports = router;

