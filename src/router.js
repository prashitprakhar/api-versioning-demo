const express = require('express');
const app = express();
const router = express.Router();

const v1Router = require('./routes/v1/controllers');
const v2Router = require('./routes/v2/controllers');

router.get('/', function (req, res, next) {
    res.status(200).send({ status: "ok" });
});

router.use('/v1', v1Router);
router.use('/v2', v2Router);

module.exports = router;