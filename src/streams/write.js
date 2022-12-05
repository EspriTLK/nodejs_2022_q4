import { createWriteStream } from 'node:fs'
import { stdin } from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url';

const write = async () => {
    // Write your code here 
    const __dirFilesName = new URL('files', import.meta.url)
    const __readFileName = 'fileToWrite.txt'
    
    const file = pathToFileURL(fileURLToPath(`${__dirFilesName}/${__readFileName}`))

    const writeFile = createWriteStream(file)
    stdin
        .pipe(writeFile)

};

await write();