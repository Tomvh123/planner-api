const assert = require('assert');
const Customer = require('../model/customer.model');


describe('Reading customers out of the database', () => {
    let customer;

    beforeEach((done) => {
        customer = new Customer({firstName: 'Tom', lastName: 'Bassie', streetName: 'description', houseNumber: 25, phoneNumber: '0654787447', postalCode: '4875CK', email: 'test123@hotmail.com' });
        customer.save()
            .then(() => done() );


    });

    function assertName(operation, done) {
        operation
            .then(() => Customer.find({}))
            .then((customer) => {
                assert(customer.length === 1);
                assert(customer[0].firstName === 'Tom');
                done();
            });
    }


    it('A model class can find a record with an Id and update', (done) => {
        assertName(
            Customer.findByIdAndUpdate(customer._id, { name: 'Test1' }),
            done
        );
    });
});