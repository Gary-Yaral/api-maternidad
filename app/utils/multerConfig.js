const multer = require("multer"); 
const { pathFolder } = require("./constants")

const upload = multer({
  dest: pathFolder,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|xlsx)$/)) {
      return cb(new Error("Solo se permiten archivos JPEG, JPG o PNG."), false);
    }
    cb(null, true);
  },
});

module.exports = { upload }