

var fs = require('fs');
try {
    var stats = fs.statSync('./dist');
} catch (e) {
    fs.mkdirSync('./dist');
}
var fichiers = fs.readdirSync('./public');
for (var i = 0; i < fichiers.length; i++) {
    var fichier = fichiers[i];
    var src = './public/' + fichier;
    var dest = './dist/' + fichier;
    var contenu = fs.readFileSync(src).toString();
    
    if (dest.endsWith('.html')) {
        contenu = contenu.replace('src="jquery-1.11.3.js"', 'src="//code.jquery.com/jquery-1.11.3.min.js"');
    }
    
    fs.writeFileSync(dest, contenu);
}