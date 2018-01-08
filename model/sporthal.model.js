const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SporthallSchema = new Schema({
    sportHallId: {
        type: String,
        required: true
    },
    customers: [{
        type: Schema.Types.ObjectId,
        ref: 'customer'
    }]
});

const Sporthall = mongoose.model('sporthall', SporthallSchema);

module.exports = Sporthall;