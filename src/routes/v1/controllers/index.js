const router = require('express').Router();

var userDetails = require('../models/user-details');
const API_VERSION = '1.0.0';

const sendResponse = function (req, res, result) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('api-version', API_VERSION);
    res.send({ result });
};

router.get('/get-user-salutation/:fname', function (req, res, next) {
    var userFirstName = req.params.fname;
    userDetails.generateUserSalutation(userFirstName, function (err, result) {
        if (err) {
            next(err);
        } else {
            sendResponse(req, res, result);
        }
    });
});

module.exports = router;