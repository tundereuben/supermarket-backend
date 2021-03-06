const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/authenticate');
const { sendWelcomeEmail, sendCancelEmail } = require('../emails/account')
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        sendWelcomeEmail(user.email, user.firstName, user._id);
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.send({ user, token })
    } catch (e) {
        console.log(e)
        res.send(404).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})


router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    // const allowedUpdates = ['firstName', 'lastName', 'email', 'password', 'phone', 'shippingAdddress', 'billingAddress'];
    // const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates'})
    // }
    try {   

        updates.forEach((update) => req.user[update] = req.body[update])

        await req.user.save()

        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/activate', async (req, res) => {
    const user = await User.findById(req.body.id);
    try {
        user.status = 'active';
        await user.save();
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        sendCancelEmail(req.user.email, req.user.firstName);
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
});

module.exports = router;

