const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port  = 8080;



const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'


async function main()
{

    mongoose.connect(MONGO_URL);

}

main()
    
    .then(()=>{

        console.log("Connected to DB");


    })

    .catch((err)=>{

        console.log(err);


    })






app.get("/", (req, res)=>{

    res.send("Hi, i am root");        


})




app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);

})
