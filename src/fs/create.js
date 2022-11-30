import { writeFile, stat } from 'fs/promises'

const create = async () => {
    // Write your code here 
    const _filePath = new URL('files', import.meta.url)
    const _fileName = 'fresh.txt'

    try {
        const fileExist = async path => !!(await stat(path).catch(e => false));

        if (await fileExist(`${_filePath.pathname}/${_fileName}`)) {
            throw new Error('FS operation failed')
        }

        await writeFile(`${_filePath.pathname}/${_fileName}`, 'I am fresh and young', 'utf8')

    } catch (error) {
        console.log(error.message)
    }
};

await create();