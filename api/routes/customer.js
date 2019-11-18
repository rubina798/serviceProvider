const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const CustomerController = require('../controllers/customer.js');


router.patch("/update/customerId/:long/:lat", checkAuth, CustomerController.customer_update);

router.post('/login',CustomerController.loginCustomer);

module.exports = router;
