const assert = require('assert');
const CustomerSchema = require('../model/customer.model');


describe('Reading customers out of the database', () => {
    let customer;

    beforeEach = ((done) => {
        const customer = new CustomerSchema({firstName: 'Tom', lastName: 'Bassie', streetName: 'description', houseNumber: '25', postalCode: '4875CK', email: 'soldier76@hotmail.com' });
        customer.save()
            .then(() => done());

    });

    function assertName(operation, done) {
        operation
            .then(() => CustomerSchema.find({}))
            .then((customers) => {
                assert(customers.length === 1);
                assert(customers[0].firstName === '');
            });
        done();
    }


    it('Find a record with an Id and update', (done) => {
        console.log();
        assertName(
            CustomerSchema.findByIdAndUpdate(customer._id, { firstName: 'Harry' }),
            done
        );

    });
});