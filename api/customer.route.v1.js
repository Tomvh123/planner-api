const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');

const mongoose = require('mongoose');

routes.get('/test', function(req, res){
    res.contentType('application/json');
    res.status(200).send({'test':'test'})
});

module.exports = routes;