const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

    var x = [1, 2, 3, 4, 5, 6, 7];
    res.render('pages/medium/art', { artPage: true,art:x });

});

module.exports = router;

