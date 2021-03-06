const express = require('express');
const SubCategory = require('../models/subCategory');
const router = new express.Router();

router.post('/sub-category', async (req, res) => {
    const subCategory = new SubCategory(req.body);

    try {
        await subCategory.save();
        res.status(201).send(subCategory)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/sub-category', async (req, res) => {
    const match = {}; // search query
    if (req.query.category) match.category = req.query.category;

    const limit = parseInt(req.query.limit) || 1000;
    const skip = parseInt(req.query.skip) || 0;
    const subCategories = await SubCategory.find(match).limit(limit).skip(skip);

    try {
        if (!subCategories) {
            res.status(404).send('No products found!')
        }
        res.send(subCategories)
    } catch (e) {
        res.status(500)
    }
});

router.patch('/sub-category/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'category'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'});
    }

    try {
        const _id = req.params.id;
        const subcategory = await SubCategory.findById(_id);

        if (!subcategory) {
            return res.status(404).send();
        }
        updates.forEach((update) => subcategory[update] = req.body[update]);

        await subcategory.save();

        res.send(subcategory);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete('/sub-category/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
        // const product = await Product.findOneAndDelete({ id: req.params.id });

        if (!subCategory) {
            return res.status(404).send()
        }
        res.send(subCategory)
    } catch (e) {
        res.status(500).send()
    }
});

module.exports = router;

