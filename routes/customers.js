const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//All Customers Route

router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.render('customers/index', { customers: customers });
    
});

//New Customer Route

router.get('/new', (req, res) => {
    res.render('customers/new', { customer: new Customer() });
});

//View Customer Route

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (customer == null) res.redirect('/');
    res.render('customers/show', { customer: customer });
});

//Create Customer Route

router.post('/', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        usedVoucher: req.body.usedVoucher
});

    try {
        const newCustomer = await customer.save();
        // res.redirect(`customers/${newCustomer.id}`);
        res.redirect(`customers`);
    } catch {
        res.render('customers/new', {
            customer: customer,
            errorMessage: 'Error creating Customer'
        });
    }
});

module.exports = router;