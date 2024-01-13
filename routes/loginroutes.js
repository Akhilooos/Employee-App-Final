const express = require('express');
const router =express.Router();

router.use(express.json());

router.use(express.urlencoded({extended:true}));
const model = require('../model/model');

router.post('/login', async (req, res) => {
    try {
        var email = req.body.email;
        var password = req.body.password;

        // Check if the email and password match an admin user
        if (email === 'admin@gmail.com' && password === '12345') {
            res.send('admin');
        } else {
            // Check if the email and password match an employee user in the database
            const employee = await model.findOne({ email, password });
            if (employee) {
                res.send('employee');
            } else {
                res.send('invalid');
            }
        }
    } catch (error) {
        console.error('There was an error!', error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;