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

const Customer = mongoose.model('customer', PlanningSchema);

module.exports = Customer;