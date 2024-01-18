const express =require ("express");
const cors =require("cors");
const app=express();
const mysql = require("mysql2");

const corsoption = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
};
app.use(cors(corsoption));

var routes = require('./routes/routes.js');

require('dotenv').config()

const PORT=process.env.PORT

app.use(express.json());
app.use(routes);
app.listen(PORT, ()=>
    console.log("API iniciada en puerto: " + PORT)
)