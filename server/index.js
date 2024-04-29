require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbconnect') 
const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

const initRoutes = require('./routes/index')

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(cors(corsOptions))

dbConnect();
initRoutes(app);


app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})