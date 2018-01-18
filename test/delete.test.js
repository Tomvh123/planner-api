const assert = require('assert');
const Customer = require('../model/customer.model');

describe('Delete customers', () => {
    let customer;

    beforeEach((done) => {
         customer = new Customer({
            firstName: 'Test',
            lastName: 'Haaster',
            streetName: 'description',
            houseNumber: '25',
            postalCode: '4875CK',
            phoneNumber: '06547474578',
            email: 'soldier76@hotmail.com'
        });
        customer.save()
            .then(() => done());

    });

    it('Customer findByIdAndRemove', (done) => {
        Customer.findByIdAndRemove(customer._id)
            .then(() => Customer.findOne({firstName: 'Tdest'}))
            .then((customer) => {
                assert(customer === null);
                done();
            });

    });
})
