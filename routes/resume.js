const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {




  res.render('pages/medium/resume',{resumePage:true,script:"/public/scripts/resume.js"})

});

module.exports = router;

