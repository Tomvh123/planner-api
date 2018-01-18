const assert = require('assert');
const Customer = require('../model/customer.model');


describe('Reading customers out of the database', () => {
    let customer;

    beforeEach = ((done) => {
        const customer = new Customer({firstName: 'Test', lastName: 'Bassie', streetName: 'description', houseNumber: '25', postalCode: '4875CK', email: 'soldier76@hotmail.com' });

        customer.save()
            .then(() => done());

    });

    it('finds all customers with a name of one email', (done) => {
        console.log(customer);
        Customer.find({email: 'soldier76@hotmail.com'})
            .then((customers) => {
                console.log(customers),
                    assert(customers[0]._id.toString() === customer._id.toString());
            });
        done();
    });
})