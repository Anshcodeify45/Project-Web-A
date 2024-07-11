import express from 'express'; 
import Connection from './Database/db.js';
import dotenv from 'dotenv'
import Router from './Routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app =express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

const PORT = 8000;


const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USER,PASSWORD);

app.listen(PORT,()=>console.log(`Server running successfully on ${PORT}`));

