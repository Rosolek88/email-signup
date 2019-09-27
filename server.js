const express = require ('express')
const path = require ('path')
const {runQuery} = require ('./app')
const {addEmail} = require ('./app')

const app = express()

app.use(express.static(path.join(__dirname, "public")))
// when i run end point data it will return runquery
app.get('/data', async (req,res)=>{
    let data = await runQuery();
    console.log(data)
    
    //send data as jason file
    res.send({
        data: data
    });
});
// app.post.("./register",(req,res)=>{
//     const data = await runQuery()
//     console.log(data[0])
// })


app.listen(3002, ()=>{
    console.log('listening on port 3002')
})