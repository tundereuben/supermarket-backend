const express = require('express');
const Purchase = require('../models/purchase');
const User = require('../models/user');
const auth = require('../middleware/authenticate');
const { sendOrderEmail } = require('../emails/account');
const router = new express.Router();

router.post('/purchase', auth, async (req, res) => {
    const purchase = new Purchase({
        ...req.body,
        owner: req.user._id
    })

    try {
        await purchase.save();
        res.status(201).send(purchase)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/purchase', auth,  async (req, res) => {
    try {
        await req.user.populate('purchase');
        res.send(req.user.purchase)
    } catch (e) {
        res.status(500)
    }
});


router.get('/purchase/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const purchase = await Purchase.findOne({ _id, owner: req.user._id})

        if(!purchase) {
            return res.status(404).send()
        }

        res.status(200).send(purchase)
    } catch (e) {
        res.status(500).send()
    }
});

router.patch('/purchase/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['quantity'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'});
    }

    try {
        const purchase = await Purchase.findOne({ _id: req.params.id, owner: req.user._id});

        if (!purchase) {
            return res.status(404).send();
        }

        updates.forEach((update) => purchase[update] = req.body[update]);
        await purchase.save();
        res.send(purchase);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete('/purchase/:id', auth, async (req, res) => {
    try {
        const purchase = await Purchase.findOneAndDelete({ _id: req.params.id, owner: req.user._id});

        if (!purchase) {
            return res.status(404).send();
        }
        res.send(purchase)
    } catch (e) {
        res.status(500).send();
    }
});

router.post('/placeOrder', auth, async (req, res) => {
    const orderSummary = req.body;
    const user = req.user

    try {
        sendOrderEmail( user.email, orderSummary);
        res.status(201).send({ user, orderSummary });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
