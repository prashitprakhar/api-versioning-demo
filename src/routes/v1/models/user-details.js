var generateUserSalutation = function (fname, callback) {
    setTimeout(() => {
        var salutation = `Hi ${fname} !`;
        return callback(null, salutation);
    }, 1000);
};

module.exports = {
    generateUserSalutation
};