let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let logger = require('morgan');
let config = require('./config/env/env');
let customerroutev1 = require('./api/customer.route.v1');
let sporthallroutev1 = require('./api/sporthall.route.v1');

let app = express();

module.exports = {};
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.set('port', process.env.PORT | config.env.webPort);
app.set('env', (process.env.ENV | 'development'));

app.use(logger('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN || 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1', customerroutev1);
app.use('/api/v1', sporthallroutev1);

app.use(function (err, req, res, next) {
    // console.dir(err);
    let error = {
        message: err.message,
        code: err.code,
        name: err.name,
        status: err.status
    };
    res.status(401).send(error);
});

app.use('*', function (req, res) {
    res.status(400);
    res.json({
        'error': 'Deze URL is niet beschikbaar.'
    });
});

app.listen(config.env.webPort, function () {
    console.log('De server luistert op port ' + app.get('port'));
    console.log('Zie bijvoorbeeld http://localhost:4000/api/v1/');
});