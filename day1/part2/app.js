const { kMaxLength } = require('buffer');
const { log } = require('console');
const fs = require('fs');
const { argv } = require('process');
const readline = require('readline');


fileName='../input.txt'

// listStringNumber=[["0",/(?<=[a-z]*)zero/,/zero(?=[a-z]*)/],["1",/(?<=[a-z]*)one/,/one(?=[a-z]*)/],["2",/(?<=[a-z]*)two/,/two(?=[a-z]*)/],["3",/(?<=[a-z]*)three/,/three(?<=[a-z]*)/],["4",/(?<=[a-z]*)four/,/four(?<=[a-z]*)/],["5",/(?<=[a-z]*)five/,/five(?<=[a-z]*)/],[6,/(?<=[a-z])six/,/six(?<=[a-z]*)/],["7",/(?=[a-z]*)seven/,/seven(?=[a-z]*)/],["8",/(?=[a-z]*)eight/,/eight(?=[a-z]*)/],["9",/(?=[a-z]*)nine/,/nine(?=[a-z]*)/]]
// listStringNumber=[["0",/zero/,/zero/],["1",/(?<=[a-z]*)one/,/one(?=[a-z]*)/],["2",/(?<=[a-z]*)two/,/two(?=[a-z]*)/],["3",/(?<=[a-z]*)three/,/three(?<=[a-z]*)/],["4",/(?<=[a-z]*)four/,/four(?<=[a-z]*)/],["5",/(?<=[a-z]*)five/,/five(?<=[a-z]*)/],[6,/(?<=[a-z])six/,/six(?<=[a-z]*)/],["7",/(?=[a-z]*)seven/,/seven(?=[a-z]*)/],["8",/(?=[a-z]*)eight/,/eight(?=[a-z]*)/],["9",/(?=[a-z]*)nine/,/nine(?=[a-z]*)/]]

listStringNumber=[["0","zero"],["1","one"],["2","two"],["3","three"],["4","four"],["5","five"],["6","six"],["7","seven"],["8","eight"],["9","nine"]]

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



lineNumber=0
sum=0
// Écouter l'événement 'line' qui est émis à chaque fois qu'une nouvelle ligne est lue
rl.on('line', (line) => {
    lineNumber++



    // for ( number of listStringNumber){
    //     line=line.replace(number[1], number[0])
    //     line=line.replace(number[2], number[0])


    // }

    console.log(line)

    firstAndLast=lookFirstAndLastDigit(line)

    if (firstAndLast.length==1){
        concat=Number(line[firstAndLast[0]]  +  line[firstAndLast[0]])
    }

    else if (firstAndLast.length==2){
        concat=Number(line[firstAndLast[0]]   +   line[firstAndLast[1]])
    }

    sum=sum+concat


    console.log('concat:',concat)
    console.log('lookFirstandLastNumberInLetter:',lookFirstandLastNumberInLetter(line))
    console.log("lineNumber:",lineNumber,"\nlookFirstAndLastDigit:" ,firstAndLast,"\n\n")

});
/* 
function replaceNumberLetterbyNumberSymbole(line){

    for ( number of listStringNumber){
        line.replace(number[1], number[0])
        
    }
} */

function cleanListIndex(listIndexElement){
    let cleanListIndex
    let min
    let max

    for (index of listIndexElement){
        console.log(min,max)

        if (index[1]!=-1 && min > index[1]){
            min=index


        }

        if (index[1]!=-1 && min < index[1]){
            max=index
        }
        // console.log(min,max)

        
    }



    cleanListIndex=[min,max]

    return cleanListIndex

    


}


function lookFirstandLastNumberInLetter(line){
    listIndexFirstAndLast=[]
    listIndexElement=[]
    for ( number of listStringNumber){
        listIndexElement.push([number[1],[line.search(number[1])]])
    }


    return cleanListIndex(listIndexElement)


}

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
