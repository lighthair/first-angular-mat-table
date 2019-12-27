
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const app = express();
const billingRoute = require('./routes/billing.route');

app.use(bodyParser.json());
app.use(cors());
app.use('/bills', billingRoute);


const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});
