const express = require('express');
const userRoute = require('./user.router');

function routerAPI(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', userRoute);
}

module.exports = routerAPI;