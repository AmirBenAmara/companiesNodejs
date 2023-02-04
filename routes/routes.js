const express = require('express');
const router = express.Router();
var companies_ctrl = require('../controllers/companies_ctrl');


router.get('/getPhoneNumber/:companyName' , companies_ctrl.getCompanyPhoneNumberByName)



module.exports = router;
