const express = require('express')
const router = express.Router();

router.use('/twitters', require('./twitters'));

module.exports = router;
