const { kMaxLength } = require('buffer');
const { log } = require('console');
const fs = require('fs');
const { argv } = require('process');
const readline = require('readline');


fileName='../input.txt'

if (argv[2]=='test'){
    fileName='../input_test.txt'

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
sumIdexGamesTrue=0;
listGamesTrue="";
listIndexTrue=[];

// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++;
    console.log(line);
    console.log(lineToTable(line))
    
    statusLIne=testAllColors(lineToTable(line))

    if (statusLIne) {
        sumIdexGamesTrue=sumIdexGamesTrue+lineNumber
        listIndexTrue.push(lineNumber)
    }

    console.log("status",statusLIne)

    console.log("\n")
});

function searchNumberColor(subSetofColor,regexColor){
    
    let numberColor=subSetofColor.match(regexColor)
    return Number(numberColor)

}



// ##############################
function lineToTable(line) {
    const config=line.split(': ')[1].trim()
    let setOfTable=config.split(";")
    return setOfTable

    }

function testAllColors(setOfTable){

    let numberColor
    let boolean=true
    



    for (subSet of setOfTable ){
        for ( color  of regexColors){ 
            
            numberColor=searchNumberColor(subSet,color[1]) //color[1] représente la partie regex de l'élément de liste

            boolean=statusColor(color[0],numberColor)
            console.log(boolean,`: ${numberColor} ${color[0]} `)

         if(!boolean){
                return boolean
            }



            
        };

    }

return boolean

}

// Écouter l'événement 'close' et effectuer une action une fois que le fichier a été lu entièrement
rl.on('close', () => {
    
    console.log("sumIdexGamesTrue:",sumIdexGamesTrue);
    console.log("listIndexTrue",listIndexTrue)

    console.log('Fin de la lecture du fichier.');
    // console.log(argv[2]);
});

// Gérer les erreurs éventuelles
rl.on('error', (err) => {
    console.error('Une erreur est survenue lors de la lecture du fichier:', err);
    
});






/* 
Red.trim()
Green
Blue
*/