const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('pages/medium/story',{});

});

module.exports = router;











