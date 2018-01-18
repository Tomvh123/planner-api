const express = require('express');
const routes = express.Router();
const mongodb = require('../config/dbMongo');
const customer = require('../model/customer.model');
const mongoose = require('mongoose');
const planning = require('../model/planning.model');


routes.get('/planningen/:email', function(req, res) {
   res.contentType('application/json');
   const email = req.param('email');
   let planningsArray = [];

   planning.find().populate('staff').then((planning) => {
       planning.forEach(plan => {
           if (plan.staff.email === email){
               planningsArray.push(plan);
           }
           else {
               console.log(plan.staff.email);
           }
       });
       res.status(200).send(planningsArray);
   })
       .catch((error) => res.status(400).json(error));
});

routes.post('/planningen', function(req, res) {
    const planningProps = req.body;

    planning.create(planningProps)
        .then((planning) => {
            res.status(200).send(planning)
        })
        .catch((error) => res.status(400).json(error))
});

module.exports = routes;