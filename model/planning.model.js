const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Sporthall = require('./sporthal.model');
const Staff = require('./staff.model');



const PlanningSchema = new Schema({
    sportHallId:{
        type: int,
        required: true
    },
    planning: [{
        date: {
            type: Date,
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
            required: true
        },
        staff:{
            type: Schema.Types.ObjectId,
            ref: 'staff'
        },
        job:{
            type: String,
            required: true
        }
    }]
});

const Planning = mongoose.model('planning', PlanningSchema);

module.exports = Planning;