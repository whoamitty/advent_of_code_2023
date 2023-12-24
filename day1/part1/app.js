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



lineNumber=0
sum=0
// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++
    firstAndLast=lookFirstAndLastDigit(line)
    if (firstAndLast.length==1){
        concat=Number(line[firstAndLast[0]]  +  line[firstAndLast[0]])
    }

    else if (firstAndLast.length==2){
        concat=Number(line[firstAndLast[0]]   +   line[firstAndLast[1]])
        
    }

    sum=sum+concat


    console.log('concat:',concat)
    console.log("lineNumber:",lineNumber,"\nlookFirstAndLastDigit:" ,firstAndLast,"\n\n")

});


// Return first and last digit if exist
/* function lookNumberOfDigit(line){
    lineLength=line.length

    indexForFirstElement=0
    isDigit=true
    oneDigit=false
    twoDigit=false

 

    // Verify if there is 1 digit
    while (indexForFirstElement <= lineLength -1 ) {

        if (Number(line[indexForFirstElement].match(/\d/g))){
            oneDigit=true
        }

        indexForFirstElement++

        if (oneDigit){
            break
        }
    }

    // Verify if there is 2 digit
    while (indexForFirstElement <= lineLength -1 ) {


        if (Number(line[indexForFirstElement].match(/\d/g))){
            twoDigit=true
            
        }

        
        indexForFirstElement++
        if (twoDigit){

            break
        }



    }

    if (twoDigit) {
        return 2
    }

    else if (oneDigit){
        return 1
    }

    else {
        return 0
    }
     

}
 */

function lookFirstAndLastDigit(line){
    let firstAndLast=[]
    lineLength=line.length

    indexForFirstElement=0
    oneDigit=false


 

    // Search first digit
    while (indexForFirstElement <= lineLength -1 ) {

        if (/\d/.test(line[indexForFirstElement])){
            firstAndLast.push(indexForFirstElement)
            oneDigit=true
        }
        
        
        
        if (oneDigit){
            break
            
        }
        indexForFirstElement++
    }

    // Add last digit in firstAndLast if oneDigit==true
    
    indexForLastElement=lineLength-1
    LastElement=false
    
    
    if (oneDigit && indexForFirstElement!=lineLength ){
    while (indexForLastElement > indexForFirstElement ) {

        if (/\d/g.test(line[indexForLastElement])){

            LastElement=true

            
        }

        
        if (LastElement){

            firstAndLast.push(Number(indexForLastElement))
            return firstAndLast
        }

        indexForLastElement--


    }

    return firstAndLast
}}


// Écouter l'événement 'close' et effectuer une action une fois que le fichier a été lu entièrement
rl.on('close', () => {

    console.log("sum:",sum)
    console.log('Fin de la lecture du fichier.');
    // console.log(argv[2]);
});

// Gérer les erreurs éventuelles
rl.on('error', (err) => {
    console.error('Une erreur est survenue lors de la lecture du fichier:', err);
    
});
