const { kMaxLength } = require('buffer');
const { log } = require('console');
const fs = require('fs');
const { argv } = require('process');
const readline = require('readline');


fileName='../input.txt'

if (argv[2]=='../test'){
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
powerSum=0

// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++;
    setOfTable=lineToTable(line)
    console.log(line);
    console.log(setOfTable)
    console.log(power(setOfTable))
    
    statusLIne=testAllColors(setOfTable)

    powerSum=powerSum+power(setOfTable)


    if (statusLIne) {
        sumIdexGamesTrue=sumIdexGamesTrue+lineNumber
        listIndexTrue.push(lineNumber)
    }

    // console.log("status",statusLIne)

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
            // console.log(boolean,`: ${numberColor} ${color[0]} `)

         if(!boolean){
                return boolean
            }



            
        };

    }

return boolean

}

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


function power(setOfTable){
    let numberColor
    let listMinimal=[0,0,0]
    for (subSet of setOfTable ){
        for (indexListMinimal  of [[0,'red',regexRed],[1,'green',regexGreen],[2,'blue',regexBlue]]){
            
            numberColor=searchNumberColor(subSet,indexListMinimal[2])
            if (listMinimal[indexListMinimal[0]] < numberColor){
                listMinimal[indexListMinimal[0]] = numberColor
            }

        }
    }

    return listMinimal[0]*listMinimal[1]*listMinimal[2]
   
}






// Écouter l'événement 'close' et effectuer une action une fois que le fichier a été lu entièrement
rl.on('close', () => {
    console.log("powerSum :",powerSum)
    
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
