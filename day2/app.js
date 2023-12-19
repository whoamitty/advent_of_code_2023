const { kMaxLength } = require('buffer');
const { log } = require('console');
const fs = require('fs');
const { argv } = require('process');
const readline = require('readline');


fileName='input.txt'

if (argv[2]=='test'){
    fileName='input_test.txt'

}



// Créer un Readable Stream pour lire un fichier
const readStream = fs.createReadStream(fileName);

// Créer une instance de readline
const rl = readline.createInterface({
    input: readStream,
    output: process.stdout,
    terminal: false
});



regexRed=/\d+(?= red)/g
regexGreen=/\d+(?= green)/g
regexBlue=/\d+(?= blue)/g
var regexColors=[['red',regexRed],['green',regexGreen],['blue',regexBlue]]

lineNumber = 0;
sumGamesTrue=0;
listGamesTrue="";


// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++;
    console.log("Nombre de bleu dans le premier tirage :",searchNumberColor(lineToTable(line)[0],regexBlue))
    console.log(line);
    console.log(lineToTable(line))
    
    console.log("\n")
});

function searchNumberColor(subSetofColor,regexColor){
    
    let numberColor=subSetofColor.match(regexColor)
    return Number(numberColor)

}



// ##############################
function lineToTable(line) {
    const config=line.split(': ')[1].trim()
    let setofTable=config.split(";")
    return setofTable

    }

    
    
// Écouter l'événement 'close' et effectuer une action une fois que le fichier a été lu entièrement
rl.on('close', () => {
    console.log('Fin de la lecture du fichier.');
    // console.log(argv[2]);
});

// Gérer les erreurs éventuelles
rl.on('error', (err) => {
    console.error('Une erreur est survenue lors de la lecture du fichier:', err);
    
});


function statusColor(color, number) {
    if (color === "red") {
        if (number > 12) { return false; }
    }

    else if (color === "green") {
        if (number > 13) { return false; }
    }

    else if (color === "blue") {
        if (number > 14) { return false; }
    };
    
    return true;
}

/* 
Red.trim()
Green
Blue
*/