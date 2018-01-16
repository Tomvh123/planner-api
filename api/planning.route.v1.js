const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');
const customer = require('../model/customer.model');
const mongoose = require('mongoose');
const planning = require('../model/planning.model');


routes.get('/planningen', function(req, res) {
    res.contentType('application/json');
    planning.find({})
        .then((planning) => {
            res.status(200).send(planning);
        })
        .catch((error) => res.status(400).json(error));
});

//routes.get('/planningen/:email/:date/:sporthallId', function(req, res) {
  //  res.contentType('application/json');
  //  const email = req.param('email');
  //  const date = req.param('date');
  //  cosnt sporthallId = req.param('sporthallId');
  //  planning.find({sporthallId: sporthallId})
  //      .where
  //      .then((planning) => {
  //          res.status(200).send(planning);
  //      })
  //      .catch((error) => res.status(400).json(error));
//});

routes.post('/planningen', function(req, res) {
    const planningProps = req.body;
    planning.create(planningProps)
        .then((planning) => {
            res.status(200).send(planning)
        })
        .catch((error) => res.status(400).json(error))
});

routes.put('/planningen/:id', function(req, res) {
    res.contentType('application/json');
    const planningId = req.params.id;
    const planningProps = req.body;

    planning.findByIdAndUpdate({_id: planningId},planningProps)
        .then(()=> planning.findById({_id: planningId}))
        .then(planning => res.send(planning))
        .catch((error) => res.status(400).json(error))

});

routes.delete('/planningen/:id', function(req, res) {
    const id = req.param('id');
    planning.findByIdAndRemove(id)
        .then((status) => res.status(200).send(status))
        .catch((error) => res.status(400).json(error))
});

module.exports = routes;