// Import libraries
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')

//Declare variable enviroment
const { port, dbHost, dbPort, dbUser, dbPassword, dbName } = require("./config/config")

mongoose.Promise = global.Promise

//Conexión BD
//mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`).then(() => {
mongoose.connect('mongodb://127.0.0.1:27017/orm_agenda').then(() => {
    console.log('Mongo is connected')

    const app = express()
    app.use(express.json())
    app.use(morgan("dev"))

    /*app.listen(port, () => {
        console.log(`App listening on port: ${port}`)
    })*/
    app.listen(8094, () => {
        console.log('App listening on port: 8094')
    })

}).catch(error => console.error(`Database connection error: ${error.message}`))

mongoose.connection.on('error', function (err) {
    console.log(`Mongoose Error: ${err}`)
})

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection is disconnected')
})
