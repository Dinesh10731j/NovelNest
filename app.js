const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const morgan = require("morgan");
app.use(express.json());
const {Routes} = require("./routes/route");


const Port =process.env.PORT;

app.use(morgan("combined"));
app.use(cors());

app.use("/",Routes);

app.listen(Port,()=>{
    console.log(`Listening to port ${Port}:`)
})


