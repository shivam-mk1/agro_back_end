const express = require("express");
const router = express.Router();
const {getLanguageData} = require("../controllers/lang");

router.get('/getlangdata', getLanguageData);

// router.post('/addtranslations', addTranslations);

module.exports = router;