const { kMaxLength } = require('buffer');
const fs = require('fs');
const readline = require('readline');

// Créer un Readable Stream pour lire un fichier
const readStream = fs.createReadStream('input.txt');

// Créer une instance de readline
const rl = readline.createInterface({
    input: readStream,
    output: process.stdout,
    terminal: false
});

regexRed=/\d+(?= red)/g
regexGreen=/\d+(?= green)/g
regexBlue=/\d+(?= blue)/g
lineNumber = 0;
concatGamesTrue="";
sumIndexGames=0;
sumGamesTrue=0;
// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++;
    sumIndexGames=Number(sumIndexGames)+Number(lineNumber)


    
    
    console.log(line);
    
    /* 
    if (statusGame(line)) {console.log(statusGame(line),"Yes")}
    else {console.log(statusGame(line),"No")};
    */
    
    console.log(statusGame(line),"\n\n");
    
    // console.log(`Ligne ${lineNumber}: ${line}`);
    
    if (statusGame(line)){
        sumGamesTrue=Number(sumGamesTrue)+Number(lineNumber)
        concatGamesTrue=concatGamesTrue.toString()+lineNumber.toString();
        // output=Number(output)+Number(lineNumber);
    }

    
});


/* 
Red
Green
Blue
*/


function statusGame(line){
    
    for (const color of [['red',regexRed],['green',regexGreen],['blue',regexBlue]]) {
        
        let number=searchNumberColor(line, color[1]);
        // console.log("searchNumberColor in function statusGame:",   color[0], number);
        if (statusColor(color[0], number)){
            "pass";
        }   
        else{return false;}
    }

    

    return true;
}

function searchNumberColor(line,regexColor){
    /*  
    console.log("\n\n",line.search('red'),'premier index pour red');
    index=line.search('red');
    console.log(line.match(regex).pop());
    console.log(line.match(regex)); */

    listNumberColor=line.match(regexColor);
    let numberColor=0;

    listNumberColor.forEach(
        number => {
            numberColor=Number(numberColor)+Number(number);
    });

    // console.log(numberColor);
    return numberColor}

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
    console.log("sumGamesTrue:",sumGamesTrue);
    console.log("sumIndexGames:",sumIndexGames); 
    console.log("concatGamesTrue+sumIndexGames:",concatGamesTrue+sumIndexGames.toString());
    
   


    console.log('Fin de la lecture du fichier.');
});

// Gérer les erreurs éventuelles
rl.on('error', (err) => {
    console.error('Une erreur est survenue lors de la lecture du fichier:', err);
});