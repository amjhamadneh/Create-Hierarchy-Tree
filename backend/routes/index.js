const express = require('express');

const router = express.Router(); // Create Express Router

const positionRoute = require("./positionRoute");

router.use(`/positions`, positionRoute);

module.exports = router;

