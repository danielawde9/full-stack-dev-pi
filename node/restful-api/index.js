require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

//Here, this app.use takes two things. One is the base endpoint, and the other is the contents of the routes. Now, all our endpoints will start from '/api'.
app.use('/api', routes)


/* With Postman, to test HTTP post actions with a raw JSON data payload, select the raw option and set the following header parameters:

Content-Type: application/json
 */

/*  "scripts": {
    "start": "nodemon index.js"
},

This means that we can start our server using npm start, and it will run using the Nodemon package that  we previously installed. */


