const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: String ,

    usedVoucher: String

});

module.exports = mongoose.model('Customer', customerSchema);