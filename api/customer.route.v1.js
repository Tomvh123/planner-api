const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');
const customer = require('../model/customer.model');
const mongoose = require('mongoose');

routes.get('/test', function(req, res){
    res.contentType('application/json');
    res.status(200).send({'test':'test'})
});

routes.post('/customer', function(req, res) {
    const customerProps = req.body;

    customer.create(customerProps)
        .then((customer) => {
        res.status(200).send(customer)
})
.catch((error) => res.status(400).json(error))
});


module.exports = routes;