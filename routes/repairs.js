const express = require('express');
const router = express.Router();
const Repair = require('../models/repair');

//All Customers Route

router.get('/', async (req, res) => {
    const repairs = await Repair.find();
    res.render('repairs/index', { repairs: repairs });
    
});

//New Customer Route

router.get('/new', (req, res) => {
    res.render('repairs/new', { repair: new Repair() });
});

//View Customer Route

router.get('/:id', async (req, res) => {
    const repair = await Repair.findById(req.params.id);
    if (repair == null) res.redirect('/');
    res.render('repairs/show', { repair: repair });
});

//Create Customer Route

router.post('/', async (req, res) => {
    const repair = new Repair({
        deviceName: req.body.deviceName,
        deviceType: req.body.deviceType,
        deviceBrand: req.body.deviceBrand,
        serialNumber: req.body.serialNumber,
        defect: req.body.defect

});

    try {
        const newRepair = await repair.save();
        // res.redirect(`customers/${newCustomer.id}`);
        res.redirect(`repairs`);
    } catch {
        res.render('repairs/new', {
            repair: repair,
            errorMessage: 'Error creating Repair'
        });
    }
});

module.exports = router;