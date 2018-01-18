const assert = require('assert');
const Customer = require('../model/customer.model');


describe('Creating customer records', () => {
    it('saves a customer', (done) => {
        const customer = new Customer({firstName: 'Test', lastName: 'Haaster', streetName: 'description', phoneNumber: '064554842', houseNumber: '25', postalCode: '4875CK', email: 'soldier676@hotmail.com' });

        customer.save()
            .then(() => {
                assert(!customer.isNew);
            });
        done();
    });
});