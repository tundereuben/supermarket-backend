const express = require('express');
const Cart = require('../models/cart');
const auth = require('../middleware/authenticate');
const router = new express.Router();

router.post('/cart', auth, async (req, res) => {
    const cartItem = new Cart({
        ...req.body,
        owner: req.user._id
    })

    try {
        await cartItem.save();
        res.status(201).send(cartItem)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/cart', auth, async (req, res) => {
    try {
        await req.user.populate('cart');
        // const cart = Cart.find({ owner: req.user._id })
        res.send(req.user.cart)
    } catch (e) {
        res.status(500)
    }
});


router.get('/cart/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const cartItem = await Cart.findOne({ _id, owner: req.user._id})

        if(!cartItem) {
            return res.status(404).send()
        }

        res.status(200).send(cartItem)
    } catch (e) {
        res.status(500).send()
    }
});

router.patch('/cart/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['quantity'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'});
    }

    try {
        const cartItem = await Cart.findOne({ _id: req.params.id, owner: req.user._id});

        if (!cartItem) {
            return res.status(404).send();
        }

        updates.forEach((update) => cartItem[update] = req.body[update]);
        await cartItem.save();
        res.send(cartItem);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete('/cart/:id', auth, async (req, res) => {
    try {
        const cartItem = await Cart.findOneAndDelete({ _id: req.params.id, owner: req.user._id});

        if (!cartItem) {
            return res.status(404).send();
        }
        res.send(cartItem)
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
