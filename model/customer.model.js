const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Sporthall = require('./sporthal.model');



const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    houseNumber: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
});

const Customer = mongoose.model('customer', CustomerSchema);

Customer.count({}, function (err, count) {
    if(count < 1){
        const customer = new Customer({
            firstName: 'Tom',
            lastName: 'van Haaster',
            streetName: 'Geerkade',
            houseNumber: '15',
            phoneNumber: '061234567',
            postalCode: '4871CK',
            email: 'soldier76@hotmail.com'
        });
        customer.save();
        /*const sporthal = new Sporthall({
            sportHallId: '1'
        });
        sporthal.customers.push(customer);
        sporthal.save();*/


    }

});


module.exports = Customer;