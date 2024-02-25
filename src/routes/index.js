const express = require('express');
const userRoute = require('./user.router');
const areaRoute = require('./area.router');

function routerAPI(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', userRoute);
    router.use('/area', areaRoute);
}

module.exports = routerAPI;