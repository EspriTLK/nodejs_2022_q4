import { createReadStream } from 'node:fs'
import { stdout } from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url';

const read = async () => {
    // Write your code here 
    const __dirFilesName = new URL('files', import.meta.url)
    const __readFileName = 'fileToRead.txt'
    
    const file = pathToFileURL(fileURLToPath(`${__dirFilesName}/${__readFileName}`))
    
    const readFile = createReadStream(file)
    readFile.on('data', chunk => {
        stdout.write(chunk)
    })
    // readFile.pipe(stdout)
    // let data = ''
    // readFile.on('readable', () => {
    //     let chunk = readFile.read()
    //     if (chunk !== null) {
    //         data += chunk
    //     }
    // })

    // readFile.on('end', () => {
    //     stdout.write(data)
    // })
};

await read();