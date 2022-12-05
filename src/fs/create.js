import { writeFile, stat } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const create = async () => {
    // Write your code here 
    const _filePath = new URL('files', import.meta.url)
    const _fileName = 'fresh.txt'
    const _file = pathToFileURL(`${fileURLToPath(_filePath)}/${_fileName}`)

    try {
        const fileExist = async path => !!(await stat(path).catch(e => false));

        if (await fileExist(fileURLToPath(_file))) {
            throw new Error('FS operation failed')
        }

        await writeFile(fileURLToPath(_file), 'I am fresh and young', 'utf8')

    } catch (error) {
        console.log(error.message)
    }
};

await create();