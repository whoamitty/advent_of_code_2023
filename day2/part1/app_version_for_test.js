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
concatGamesTrue="";
sumIndexGames=0;
sumGamesTrue=0;
listGamesTrue="";
sumAllTrueElements=0
sumAllElements=0
sumAllElementsPlusIDs=0

// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++;
    sumIndexGames=Number(sumIndexGames)+Number(lineNumber)
    
    
    
    /* 
    if (statusGame1(line)) {console.log(statusGame1(line),"Yes")}
    else {console.log(statusGame1(line),"No")};
    */
    
    console.log("Nombre de bleu dans le premier tiragee :",searchNumberColor2(lineToTable(line)[0],regexBlue))
    console.log("sum:",gameSumElements(line))
    console.log(lineToTable(line))
    console.log(statusGame1(line),"\n\n");
    
    // console.log(`Ligne ${lineNumber}: ${line}`);
    
    sumAllElements=sumAllElements+gameSumElements(line) //+Number(lineNumber);
    sumAllElementsPlusIDs=sumAllElementsPlusIDs+gameSumElements(line) +Number(lineNumber);
    if (statusGame1(line)){

        sumGamesTrue=Number(sumGamesTrue)+Number(lineNumber)
        concatGamesTrue=concatGamesTrue.toString()+lineNumber.toString();
        listGamesTrue=listGamesTrue.toString()+ " " + lineNumber.toString();
        sumAllTrueElements=sumAllTrueElements+gameSumElements(line) //+Number(lineNumber);
    }



    
});


function gameSumElements(line){
    let numberColor=0;

    for (const regex of [regexRed,regexGreen,regexBlue]){
    numberColor=numberColor+searchNumberColor(line,regex);
    }
    
    return numberColor;
}


/* 
Red.trim()
Green
Blue
*/

 

function statusGame1(line){
    
    for (const color of regexColors) {
        
        let number=searchNumberColor(line, color[1]);
        // console.log("searchNumberColor in function statusGame1:",   color[0], number);
        if (statusColor(color[0], number)){
            "pass";
        }
        else{return false;}
    }

    

    return true;
}
/* ATTENTION, ce n'est pas lui ("Color2") !!!!! */
function searchNumberColor(line,regexColor){ ///!!!!!!!!!!!


    let listNumberColor=line.match(regexColor);
    let numberColor=0;


    listNumberColor.forEach(
        number => {
            numberColor=Number(numberColor)+Number(number);
    });
    return numberColor
}




function searchNumberColor2(subSetofColor,regexColor){

    let numberColor=subSetofColor.match(regexColor)
    if (!/null/.test(numberColor)){
        return 0;
        
    }
    console.log("Hello Hello:",Number(numberColor))
    return Number(numberColor)

}

// ##############################
function lineToTable(line) {
    let listNumberColor
    // const config=line.split(': ')[1].map((x) => x.trim())
    const config=line.split(': ')[1].trim()
    // let set=config.split(";").map((x) => x.trim())
    let setofTable=config.split(";")
    
    return setofTable


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


// Écouter l'événement 'close' et effectuer une action une fois que le fichier a été lu entièrement
rl.on('close', () => {

    console.log("concatGamesTrue:",concatGamesTrue);
    console.log("listGamesTrue:",listGamesTrue); 
    console.log("sumGamesTrue:",sumGamesTrue);
    console.log("sumIndexGames:",sumIndexGames); 
    console.log("sumAllTrueElement:",sumAllTrueElements); 
    console.log("sumAllElements:",sumAllElements); 
    console.log("sumAllElementsPlusIDs:",sumAllElementsPlusIDs); 
    console.log("concatGamesTrue+sumIndexGames:",concatGamesTrue+sumIndexGames.toString());
    console.log("sumIndexGames+concatGamesTrue:",sumIndexGames.toString()+concatGamesTrue);

    // console.log(argv[2]);

    console.log('Fin de la lecture du fichier.');
});

// Gérer les erreurs éventuelles
rl.on('error', (err) => {
    console.error('Une erreur est survenue lors de la lecture du fichier:', err);
});