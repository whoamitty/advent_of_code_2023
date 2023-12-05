const fs = require('fs');

// Créer un Readable Stream pour lire un fichier

const main=async()=> {
    const readStream = fs.createReadStream('input.txt','utf8')
    readStream.on('data',(buffer) =>{
        console.log('>>> DATA');
        
        console.log(buffer);
    }
    
);

    readStream.on('end',() =>{
        console.log('stream embed');
}

);
}

main();