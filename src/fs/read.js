import { stat, readFile } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const read = async () => {
    // Write your code here 
    const _filesPath = new URL ('files', import.meta.url)
    const name = 'fileToRead.txt'
    const getFile = (path, name) => {
        const file =  pathToFileURL(`${fileURLToPath(path)}/${name}`)
        return file
    }

    try {
        const fileExist = async path => !!(await stat(path).catch(e => false));

        const isFileExist = await (fileExist(getFile(_filesPath, name)))

        if(!isFileExist) {
            throw new Error ('FS operation failed')
        }

        const fileData = await readFile(getFile(_filesPath, name), {encoding: 'utf8'})

        console.log(fileData)
    } catch (err) {
        console.error(err.message)
    }
};

await read();