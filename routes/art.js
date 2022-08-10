const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

    var x = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14];
    res.render('pages/medium/art', { artPage: true,art:x });

});

module.exports = router;

