var express = require('express');
var router = express.Router();

var contactSchema = require('../models/contact');
var mongoose = require('mongoose');

router.use(function (req, res, next) {
    var db = mongoose.createConnection('mongodb://localhost/addressbook');

    req.db = db;

    db.on('error', function (err) {
        next(err);
    });
    db.once('open', function () {
        next();
    });


    // action after response
    var afterResponse = function() {
        db.close(function () {
            console.log('Mongoose connection disconnected');
        });
    }

    // hooks to execute after response
    res.on('finish', afterResponse);
    res.on('close', afterResponse);

});

/* GET contacts list */
router.get('/', function (req, res, next) {

    var Contact = req.db.model('contacts', contactSchema);

    Contact.find(function (err, contacts) {
        if (err) {
            next(err);
        }

        res.json(contacts);
    });
});

/* POST add contact */
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.json({prenom: 'Romain'});
});

/* GET show contact */
router.get('/:id', function (req, res, next) {
    res.json({prenom: 'Romain'});
});

/* GET modify contact */
router.post('/:id', function (req, res, next) {
    res.json({prenom: 'Romain'});
});

/* GET delete contact */
router.delete('/:id', function (req, res, next) {
    res.json({prenom: 'Romain'});
});

module.exports = router;
