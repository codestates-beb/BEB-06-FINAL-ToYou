const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const multer = require('multer');
const app = express();
require('dotenv').config();
const port = process.env.PORT||4000;

const storage = multer.diskStorage({
    destination : function(req,res,cb){
        cb(null, './image')
    },
    filename : function(req,file,cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

mongoose.connect(process.env.DB_PORT,{
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected..'))
.catch(err => console.log(err))


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(multer({dest:storage}).single('file'))
app.use('/image', express.static('./image'))
app.use(
    cors({
      origin: true, // '*' 안됨 -> 정확한 주소 또는 origin: true로 해도 됨
      credentials: true,
    }),
  );

  app.use('/', require('./routes/toyou.js'))
  app.use('/', require('./routes/user.js'))



const server = app.listen(port, ()=>{
    console.log("server start : localhost:4000")
});

