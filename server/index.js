const express = require('express')
const app = express();

const server = app.listen(4000, ()=>{
    console.log("server start : localhost:4000")
});

app.get('/', function (req,res){
    res.send('우리들의 투자플랫폼 ToYou!')
})