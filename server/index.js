require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;


app.use(express.json());


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));