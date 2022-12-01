import { stat, rename as fprename } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const rename = async () => {
    // Write your code here 
    const _filesPath = new URL ('files', import.meta.url)
    const oldName = 'wrongFilename.txt'
    const newName = 'properFilename.md'
    const getFile = (path, name) => {
        const file =  pathToFileURL(`${fileURLToPath(path)}/${name}`)
        return file
    }

    try {
        const fileExist = async path => !!(await stat(path).catch(e => false));
        
        const isOldFileExist = await (fileExist(getFile(_filesPath, oldName)))
        const isNewFileExist = await (fileExist(getFile(_filesPath, newName)))

        const hasError = !isOldFileExist || isNewFileExist

        if(hasError) {
            throw new Error ('FS operation failed')
        }

        await fprename(getFile(_filesPath, oldName), getFile(_filesPath, newName))

    } catch (error){
        console.error(error.message)
    }
};

await rename();