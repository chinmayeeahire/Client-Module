// const express=require('express');
import express from 'express';
import bodyParser from 'body-parser';

import apiRoutes from './routes/index.js';

// const connect=require('./config/database');
import {connect} from './config/database.js';

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(3000, async ()=>{
console.log("Server started");
await connect();
console.log("Mongo DB connected");
});

