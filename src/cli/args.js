import { argv } from 'process'

const parseArgs = () => {
    // Write your code here 
    const args = []
    argv.forEach((elm, i) => {
        if(elm.startsWith('-')) {
            args.push(`${elm.slice(2)} is ${argv[i+1]}`)
        }
    })
    console.log(args.join(', '))
};

parseArgs();