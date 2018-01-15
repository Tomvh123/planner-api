const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');
const staff = require('../model/staff.model');
const mongoose = require('mongoose');


routes.get('/staff', function(req, res) {
    res.contentType('application/json');
    staff.find({})
        .then((staff) => {
            res.status(200).send(staff);
        })
        .catch((error) => res.status(400).json(error));
});

routes.get('/staff/:email', function(req, res) {
    res.contentType('application/json');
    const email = req.param('email');
    staff.findOne({email: email})
        .then((staff) => {
            res.status(200).send(staff);
        })
        .catch((error) => res.status(400).json(error));
});

routes.post('/staff', function(req, res) {
    const staffProps = req.body;
    staff.create(staffProps)
        .then((staff) => {
            res.status(200).send(staff)
        })
        .catch((error) => res.status(400).json(error))
});

routes.delete('/staff/:id', function(req, res) {
    const id = req.param('id');
    staff.findByIdAndRemove(id)
        .then((status) => res.status(200).send(status))
        .catch((error) => res.status(400).json(error))
});

module.exports = routes;