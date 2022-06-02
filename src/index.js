const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const route = require('./routers');
const db = require('./config/db');
const port = 8000;
const app = express();

//body-parser custom
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: "50mb"}));

//connect database
db.connect();
// route init
route(app);
app.use(morgan('combined'));
app.listen(port, () => {
    console.log('server is running....');
});