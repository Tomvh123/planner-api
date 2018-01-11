const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');
const customer = require('../model/customer.model');
const mongoose = require('mongoose');


routes.get('/customers', function(req, res) {
    res.contentType('application/json');
    customer.find({})
        .then((customer) => {
            res.status(200).send(customer);
        })
        .catch((error) => res.status(400).json(error));
});

routes.get('/customers/:email', function(req, res) {
    res.contentType('application/json');
    const email = req.param('email');
    customer.findOne({email: email})
        .then((customer) => {
            res.status(200).send(customer);
        })
        .catch((error) => res.status(400).json(error));
});

routes.post('/customers', function(req, res) {
    const customerProps = req.body;

    customer.create(customerProps)
        .then((customer) => {
        res.status(200).send(customer)
})
.catch((error) => res.status(400).json(error))
});

routes.put('/customers/:id', function(req, res) {
    res.contentType('application/json');
    const customerId = req.params.id;
    const customerProps = req.body;

    customer.findByIdAndUpdate({_id: customerId},customerProps)
        .then(()=> customer.findById({_id: customerId}))
        .then(customer => res.send(customer))
        .catch((error) => res.status(400).json(error))

});

routes.delete('/customers/:id', function(req, res) {
    const id = req.param('id');
    customer.findByIdAndRemove(id)
        .then((status) => res.status(200).send(status))
        .catch((error) => res.status(400).json(error))
});

module.exports = routes;