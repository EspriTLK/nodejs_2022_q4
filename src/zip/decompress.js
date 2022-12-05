import { fileURLToPath, pathToFileURL } from 'node:url';
import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs'

const decompress = async () => {
    // Write your code here 
    const __dirFilesName = new URL('files', import.meta.url)
    const __readFileName = 'archive.gz'
    
    const srcFile = pathToFileURL(fileURLToPath(`${__dirFilesName}/${__readFileName}`))
    const dstFile = pathToFileURL(fileURLToPath(`${__dirFilesName}/decompressedFile.txt`))
    const gzip = createGunzip();
    const source = createReadStream(srcFile);
    const destination = createWriteStream(dstFile)
    source.pipe(gzip).pipe(destination)
};

await decompress();