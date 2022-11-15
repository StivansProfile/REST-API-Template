const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');
const dotenv = require("dotenv")

dotenv.config()
const app = express();

app.use(express.json());
app.use('/api',routes);

async function connect(){
    await mongoose.connect(process.env.HOST);
    console.log("connected to the database");
}

connect().catch(err => console.log(err));


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})