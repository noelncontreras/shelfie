require ("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require("./controller");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log(`Database Connected`);
})
.catch(err => console.log(err));

app.use(express.json());

//put endpoints below

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
})