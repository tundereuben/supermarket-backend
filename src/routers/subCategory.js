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
    // if (req.query.subCategory) match.subCategory = req.query.subCategory;
    // if (req.query.name) match.name = req.query.name;
    // if (req.query.display) match.display = req.query.display;
    // if (req.query.promo) match.promo = req.query.promo;

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
module.exports = router;

