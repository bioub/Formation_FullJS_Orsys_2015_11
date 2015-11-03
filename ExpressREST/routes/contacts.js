var express = require('express');
var router = express.Router();

/* GET contacts list */
router.get('/', function(req, res, next) {
    res.json({prenom: 'Romain'});
});

/* POST add contact */
router.post('/', function(req, res, next) {
    res.json({prenom: 'Romain'});
});

/* GET show contact */
router.get('/:id', function(req, res, next) {
    res.json({prenom: 'Romain'});
});

/* GET modify contact */
router.post('/:id', function(req, res, next) {
    res.json({prenom: 'Romain'});
});

/* GET delete contact */
router.delete('/:id', function(req, res, next) {
    res.json({prenom: 'Romain'});
});

module.exports = router;
