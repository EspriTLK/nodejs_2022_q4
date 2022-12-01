import { readdir, stat } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const list = async () => {
    // Write your code here 
    const _filesPath = new URL ('files', import.meta.url)

    try {
        const checkFolder = async path => !!(await stat(path).catch(e => false));

        const isFilesFolder = await (checkFolder(fileURLToPath(_filesPath)))

        const hasError = !isFilesFolder

        if (hasError) {
            throw new Error ('FS operation failed')
        }

        const files = await readdir(fileURLToPath(_filesPath))

        for (const file of files) {
            console.log (file)
        }
    } catch (err) {
        console.error(err.message)
    }
};

await list();