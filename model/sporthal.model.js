const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SporthallSchema = new Schema({
    sportHallId: {
        type: String,
        required: true
    }
});

const Sporthall = mongoose.model('sporthall', SporthallSchema);

module.exports = Sporthall;