const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,res,cb){
        cb(null, './image')
    },
    filename : function(req,file,cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const Upload = multer({
    storage:storage
});

module.exports = Upload

