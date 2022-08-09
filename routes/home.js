const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('pages/medium/home',{homePage:true,script:"/public/scripts/canvas.js"});

});

module.exports = router;

