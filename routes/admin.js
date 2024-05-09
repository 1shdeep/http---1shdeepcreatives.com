const express = require('express');
const router = express.Router();
const AdminController  = require('../controllers/adminController');
const { validateCreateAdmin } = require('../validations/adminValidation');

router.post('/create', validateCreateAdmin, AdminController.createAdmin);
router.post('/login', AdminController.loginAdmin);

module.exports = router;
