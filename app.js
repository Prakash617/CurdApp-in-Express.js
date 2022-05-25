import express from 'express';
// import { path } from 'express/lib/application';

import connectDB from "./db/connectdb.js"
import web from './routes/web.js'
import { join } from 'path';
const app = express()
const port = process.env.PORT || "3000"
const DATABASE_URL = process.env.PORT || 'mongodb://localhost:27017'


//Database connections
connectDB(DATABASE_URL);

//load static
app.use('/student', express.static(join(process.cwd(), "public")));
app.use('/student/edit', express.static(join(process.cwd(), "public")));
app.use(express.static(join(process.cwd(), "public")));

app.use(express.urlencoded({ extended: false }));
//load routes
app.use("/student", web);

// app.use(express.urlencoded({ extended: false }))

//set template engine
app.set('view engine', "ejs");

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})