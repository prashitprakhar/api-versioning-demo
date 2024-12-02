const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
// const router = express.Router();
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get('/healthCheck', function (req, res, next) {
    res.send({ "status": "ok" });
});

app.get('/generate', function (req, res, next) {
    setTimeout(() => {
        res.send("Request Registered");
    }, 5000);
});

app.use('/api', require('./src/router'));

app.listen(port, () => {
    console.log("Listening on port ", port);
});

// v1/get-user-salutation/Prashit