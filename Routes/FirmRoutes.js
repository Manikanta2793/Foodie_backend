const express = require('express');
const firmController = require('../controllers/firmController')
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();

router.post('/add-firm',verifyToken,firmController.addFirm);
router.get('/uploads/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '..', 'uploads', imageName);
  res.sendFile(imagePath);
});




router.delete('/:firmId',firmController.deleteFirmById);

module.exports = router