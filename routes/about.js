const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('pages/medium/about',{aboutPage:true, title:});

});

module.exports = router;

