const express = require('express');
const routes = require('./routes/api/books');
const connectDB = require('./db');

connectDB();

const app = express();

app.get('/', (req,res)=>{
    res.send("hello world!");
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listening on port ' + port));





/* Note With Postman, to test HTTP post actions with a raw JSON data payload, select the raw option and set the following header parameters:

Content-Type: application/json
 */