const express = require('express');
const router = express.Router();

router.get('/users/sigin', (req, res) =>{
    res.send('Ingresando a la app');
});

router.get('/users/sigup', (req, res) =>{
    res.send('Formulario de autenticación');
});

router.get('/users/sigout', (req, res) =>{
    res.send('Saleindo de la app');
});

module.exports = router;