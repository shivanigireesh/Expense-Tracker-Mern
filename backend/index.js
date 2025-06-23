const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const {readdirSync, read} = require('fs');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

readdirSync('./router').map((r)=> app.use("/", require("./router/" + r)))
console.log(readdirSync('./router'))


const port = process.env.PORT || 4001;
app.listen(port , ()=>{
        console.log(`Server on :- ${port}`);
})

mongoose
.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
.then(()=> console.log("Database connect successfully"))
.catch((err)=> console.log("error conntecting to mongodb", err))