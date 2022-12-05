import { fileURLToPath, pathToFileURL } from 'node:url';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs'

const compress = async () => {
    // Write your code here 
    const __dirFilesName = new URL('files', import.meta.url)
    const __readFileName = 'fileToCompress.txt'
    
    const srcFile = pathToFileURL(fileURLToPath(`${__dirFilesName}/${__readFileName}`))
    const dstFile = pathToFileURL(fileURLToPath(`${__dirFilesName}/archive.gz`))
    const gzip = createGzip();
    const source = createReadStream(srcFile);
    const destination = createWriteStream(dstFile)
    source.pipe(gzip).pipe(destination)

};

await compress();