const fs = require("fs");
const { argv } = require("process");

fileName='input.txt'

if (argv[2]=='test') {
    fileName='input_exemple.txt'
}

const main = () => {
    input = fs.readFileSync(fileName, "utf8").split("\n\n");

    input = input.split("\n");

    
    console.log(input)


    // console.log(input[0])
    // console.log(argv[2])

}

main()