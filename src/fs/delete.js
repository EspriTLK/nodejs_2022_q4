import { stat, rm } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const remove = async () => {
    // Write your code here 
    const _filesPath = new URL ('files', import.meta.url)
    const name = 'fileToRemove.txt'
    const getFile = (path, name) => {
        const file =  pathToFileURL(`${fileURLToPath(path)}/${name}`)
        return file
    }

    try {
        await rm(getFile(_filesPath, name))
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed')
        } else {
            console.error(err.message)
        }
    }
};

await remove();