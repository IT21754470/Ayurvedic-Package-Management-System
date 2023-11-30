const express = require('express');
const multer = require('multer');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const imageFileName = uniqueSuffix + '-' + file.originalname;
    cb(null, imageFileName);
  },
});

const upload = multer({ storage: storage });

router.post('/create', upload.single('image'), treatmentController.createTreatment);
router.get('/getData', treatmentController.getTreatmentData);
router.put('/update/:id', upload.single('image'), treatmentController.updateTreatment);
router.delete('/delete/:id', treatmentController.deleteTreatment);

module.exports = router;

