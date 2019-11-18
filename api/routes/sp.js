const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const SpController = require('../controllers/sp.js');

router.patch("/update/spId/:long/:lat", checkAuth, SpController.sp_update);

router.post('/login',SpController.loginSp);

module.exports = router;
