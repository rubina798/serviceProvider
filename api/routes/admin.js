const express = require("express");
const router = express.Router();

const AdminController = require('../controllers/admin');
const checkAuth = require('../middleware/check-auth');

router.get("/customer",AdminController.fetch_customer);

router.get("/sp",AdminController.fetch_sp);

router.post('/login',AdminController.loginAdmin);

module.exports = router;
