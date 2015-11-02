
var pages = require('./pages.js');

function router(req, res) {
    switch (req.url) {
        case '/':
            pages.accueil(req, res);
            break;
        case '/toto':
            pages.toto(req, res);
            break;
        default:
            pages.erreur404(req, res);
    }
}

module.exports = router;