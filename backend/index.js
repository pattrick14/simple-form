const express = require('express');
const app = express();
const PORT = process.env.PORT || 6900;
const mongoose = require('mongoose');



const formModel  = require('./models/form-model');




app.use(bodyParser.json());

app.post('/details',async(req,res)=>{

    //get details
    const name = req.body.name;
    const comment = req.body.comment;

    const data = {

        "name":name,
        "comment":comment
    }
    const updatedData = await formModel.insertOne(data);

    if(updatedData){

        console.log(updatedData);
        res.json("message","OK");
    
    }
    else{

        res.json("message","failed");
    }


})






app.listen(PORT,()=>{

    console.log('listening on port');
})