import { readdir, stat, copyFile, mkdir } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const copy = async () => {
    // Write your code here 
    const _filesPath = new URL ('files', import.meta.url)
    const _filesCopyPath = new URL ('files_copy', import.meta.url)

    try {
        const checkFolder = async path => !!(await stat(path).catch(e => false));

        const isFilesFolder = await (checkFolder(fileURLToPath(_filesPath)))
        const isFilesCopyFolder = await (checkFolder(fileURLToPath(_filesCopyPath)))

        const hasError = !isFilesFolder || isFilesCopyFolder

        if (hasError) {
            throw new Error ('FS operation failed')
        }

        await mkdir(_filesCopyPath)

        const files = await readdir(fileURLToPath(_filesPath))

        for (const file of files) {
            const copyFrom = pathToFileURL(`${_filesPath.pathname}/${file}`)
            const copyTo = pathToFileURL(`${_filesCopyPath.pathname}/${file}`)
            
            copyFile(fileURLToPath(copyFrom), fileURLToPath(copyTo))
        }
    } catch (err) {
        console.error(err.message)
    }
};

copy();