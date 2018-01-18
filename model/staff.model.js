const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job: {
        type: String,
        required: true
    }



});

const Staff = mongoose.model('staff', StaffSchema);

Staff.count({}, function (err, count) {
    if(count < 1){
        const staff = new Staff({
            firstName: 'Tom',
            lastName: 'van Haaster',
            phoneNumber: '061234567',
            email: 'soldier76@hotmail.com',
            mondayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            tuesdayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            wednesdayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            thursdayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            fridayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            saturdayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            sundayAvailabilty: {
                startTime: new Date().setHours(8),
                endTime: new Date().setHours(17)
            },
            job: 'Horeka'

        });
        staff.save();
    }

});


module.exports = Staff;