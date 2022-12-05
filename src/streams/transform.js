import { stdin, stdout } from 'node:process'
import { Transform } from 'node:stream'

const transform = async () => {
    // Write your code here 
    const inputStream = stdin
    const transformStream = new Transform({
        transform(chunk) {
            const reversedChunk = chunk.toString().split('').reverse().join('')
            this.push(reversedChunk)
        }
    })

    const outputStream = stdout
    
    inputStream.pipe(transformStream).pipe(outputStream)
    
};

await transform();