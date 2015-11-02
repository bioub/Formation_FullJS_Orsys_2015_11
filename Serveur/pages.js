
var titre = 'Serveur';

exports.accueil = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page accueil !');
};

exports.toto = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page toto !');
};

exports.erreur404 = function(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
};