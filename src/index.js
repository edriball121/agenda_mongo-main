// Import libraries
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const routerAPI = require('./routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//Declare variable enviroment
const { port, dbHost, dbPort, dbUser, dbPassword, dbName } = require("./config/config")

mongoose.Promise = global.Promise

//Conexión BD
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`).then(() => {
    console.log('Mongo is connected')

    const app = express()
    app.use(express.json())
    app.use(morgan("dev"))
    app.use(morgan("combined"))

    app.listen(port, () => {
        console.log(`App listening on port: ${port}`)
    })
    routerAPI(app);

    var options = {
        customCss: '.swagger-ui .topbar { display: none }'
      };

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

}).catch(error => console.error(`Database connection error: ${error.message}`))

mongoose.connection.on('error', function (err) {
    console.log(`Mongoose Error: ${err}`)
})

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection is disconnected')
})
