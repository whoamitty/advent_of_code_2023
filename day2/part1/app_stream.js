const fs = require('fs');

// Créer un Readable Stream pour lire un fichier
const readStream = fs.createReadStream('gros_fichier.txt', 'utf8');

// Écouter l'événement 'data' qui est émis lorsque des données sont disponibles à lire
readStream.on('data', function(chunk) {
    console.log('Nouveau morceau de données reçu:');
    console.log(chunk);
});

// Écouter l'événement 'end' qui est émis lorsque toutes les données ont été lues
readStream.on('end', function() {
    console.log('Lecture du fichier terminée.');
});

// Gérer les erreurs
readStream.on('error', function(err) {
    console.error('Erreur lors de la lecture du fichier:', err);
});

