const express = require('express');
const {getHomePage, getABC, getTest} = require('../controllers/homeController');
const router = express.Router();

// route.METHOD('/route', handler)
router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/test', getTest);

module.exports = router;