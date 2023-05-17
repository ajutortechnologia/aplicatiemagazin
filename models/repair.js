const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true
    },

    deviceType: {
        type: String,
        required: true,
        enum: ['Telefon','Laptop','Tableta','Televizor','Alte dispozitive']
    },

    deviceBrand: {
        type: String,
        required: true,
        enum: ['Apple','Samsung','Huawei','Xiaomi','Lenovo','Asus','LG','Sony','Philips','Panasonic','Alte marci'],
        default: 'Alte marci'
    },

    serialNumber: {
        type: String,
        required: true
    },

    defect: {
        type: String,
        required: true
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },

    dateReceived: {
        type: Date,
        required: true,
        default: Date.now
    },

    statusReparatie: {
        type: String,
        required: true,
        enum: ['In asteptare','In reparatie','Reparat','Nereparat'],
        default: 'In asteptare'
    },


    statusRidicare: {
        type: String,
        required: true,
        enum: ['Ridicat','Neridicat'],
        default: 'Neridicat'
    },

});

module.exports = mongoose.model('Repair', repairSchema);