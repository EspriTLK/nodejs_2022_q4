import { createReadStream } from 'fs'
import { stdout } from 'process'
import { readFile } from 'fs/promises'
import { fileURLToPath, pathToFileURL } from 'url';

const calculateHash = async () => {
    // Write your code here 
    const _filesPath = new URL ('files', import.meta.url)
    const name = 'fileToCalculateHashFor.txt'
    const getFile = (path, name) => {
        const file =  pathToFileURL(`${fileURLToPath(path)}/${name}`)
        return file}
    const { createHash } = await import('crypto')
    const hash = createHash('sha256')

    // const input = createReadStream(getFile(_filesPath, name));
    // input.pipe(hash).setEncoding('hex').pipe(stdout);
    
    const input = await readFile(getFile(_filesPath, name))
    hash.update(input)
    console.log(hash.digest('hex'))
};

await calculateHash();