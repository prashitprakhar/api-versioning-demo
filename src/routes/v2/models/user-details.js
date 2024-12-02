var userConfig = require('./../config/user-details.json');

var generateUserSalutation = function (fname, callback) {
    setTimeout(() => {
        var salutation = `Hello ${fname} !`;
        return callback(null, salutation);
    }, 1000);
};

var getUserDetails = function (userId, callback) {
    setTimeout(() => {
        var userDetails = userConfig.user_details[userId];
        if (!userDetails) {
            return callback(new Error('User Id not found'));
        } else {
            return callback(null, userDetails);
        }
    }, 1000);
};

module.exports = {
    generateUserSalutation,
    getUserDetails
};