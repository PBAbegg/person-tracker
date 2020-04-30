// npm packages i want to import
const express = require('express');
require('dotenv').config();

// import database settings
const db = require('./config/database');

// initialize connection to database
db();

// import route files
const nameRoutes = require('./api/routes/names.routes');

// contains settings file
// const port = require('./config/settings').PORT;
// const appName = require('./config/settings').APPNAME;
// type above or
let {
    PORT,
    APPNAME,
} = require('./config/settings');

// define app
const app = express();
app.use(express.json());

// use ejs
app.set('view engine', 'ejs');

// create express router for project
const router = express.Router();
const uiRouter = express.Router();

// tell app to use api routs
app.use('/api', router);
nameRoutes(router);

// tell the app to use ui routes
app.use('/', uiRouter);
uiRoutes(uiRouter);

app.listen(PORT, () => {
    console.log(`${APPNAME} is listening on port ${PORT}...`);
});
