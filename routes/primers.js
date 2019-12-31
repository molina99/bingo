const express = require('express');
const router = express.Router();

router.get('/primers', (req, res) =>{
    res.send('Primers from databses');
});

module.exports = router;