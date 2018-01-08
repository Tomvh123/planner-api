const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');
const mongoose = require('mongoose');
const sporthall = require('../model/sporthal.model');

routes.get('/sporthalls', function(req, res) {
    res.contentType('application/json');
    sporthall.find({})
        .populate('customers')
        .then((sporthall) => {
            res.status(200).send(sporthall);
        })
        .catch((error) => res.status(400).json(error));
});

routes.get('/sporthalls/:id', function(req, res) {
    res.contentType('application/json');
    const id = req.param('id');
    console.log(id);
    sporthall.findOne({_id: id})
        .populate('customers')
        .then((sporthall) => {
            res.status(200).send(sporthall);
        })
        .catch((error) => res.status(400).json(error));
});

routes.put('/sporthalls/:id', function(req, res) {
    res.contentType('application/json');
    const sporthallId = req.params.id;
    const sporthallProps = req.body;

    customer.findByIdAndUpdate({_id: sporthallId},sporthallProps)
        .then(()=> sporthall.findById({_id: sporthallId}))
        .then(sporthall => res.send(sporthall))
        .catch((error) => res.status(400).json(error))

});

module.exports = routes;