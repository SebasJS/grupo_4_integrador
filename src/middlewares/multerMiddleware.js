const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/imageProfile');
    },
    filename: (req, file, cb) => {
        let fileName = Date.now()+ "-" +file.originalname; 
        cb(null, fileName);
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;