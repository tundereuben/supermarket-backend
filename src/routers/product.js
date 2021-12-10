const express = require('express');
const Product = require('../models/product');
const auth = require('../middleware/authenticate');
const router = new express.Router();

router.post('/products', auth, async (req, res) => {
    const product = new Product(req.body);

    try {
        await product.save();
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/products', async (req, res) => {
    const match = {}; // search query
    const sort = {};

    if (req.query.category) match.category = req.query.category;
    if (req.query.subCategory) match.subCategory = req.query.subCategory;
    if (req.query.name) match.name = req.query.name;
    if (req.query.display) match.display = req.query.display;
    if (req.query.promo) match.promo = req.query.promo;

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    const limit = parseInt(req.query.limit) || 1000;
    const skip = parseInt(req.query.skip) || 0;
    const products = await Product.find(match)
                        .limit(limit)
                        .skip(skip)
                        .sort(sort)
    

    try {
        if (!products) {
            res.status(404).send('No products found!')
        }
        res.send(products)
    } catch (e) {
        res.status(500)
    }
});


router.get('/products/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const product = await Product.findById(_id);


        if(!product) {
            return res.status(404).send()
        }

        res.status(201).send(product)
    } catch (e) {
        res.status(500).send()
    }
});

router.get('/search', async (req, res) => {

    const search = new RegExp(req.query.search, 'i');
    
    const products = await Product.find({ 
        $or: [ { name: search }, { category: search }, { subCategory: search } ] 
    });

    try {
        if (!products) {
            res.status(404).send('No products found!')
        }
        res.send(products)
    } catch (e) {
        res.status(500)
    }
});

router.patch('/products/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'category', 'subCategory', 'imageUrl', 'price', 'display', 'promo', 'desc'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'});
    }

    try {
        const _id = req.params.id;
        const product = await Product.findById(_id);

        if (!product) {
            return res.status(404).send();
        }
        updates.forEach((update) => product[update] = req.body[update]);

        await product.save();

        res.send(product);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete('/products/:id', auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        // const product = await Product.findOneAndDelete({ id: req.params.id });

        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
});

module.exports = router;
