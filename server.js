const express = require('express')
const path = require('path')
const {runQuery, addEmail} = require('./app')

let bodyParser = require("body-parser");
const app = express()

app.use(express.static(path.join(__dirname, "public")))
// when i run end point data it will return runquery
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/data', async (req,res)=>{
    let data = await runQuery();
    console.log(data)
    
    //send data as jason file
    res.send({
        data: data[0].total
    });
});

app.post("/register", (req,res)=> {
  addEmail(req.body.email);
  console.log(req.body);
  res.send("POST request to the homepage");
});


app.listen(3002, ()=>{
    console.log('listening on port 3002')
})