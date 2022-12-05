import { fileURLToPath, pathToFileURL } from 'node:url';
import { fork } from 'node:child_process'
const spawnChildProcess = async (args) => {
    // Write your code here
    const _path = new URL('files', import.meta.url)
    const file = fileURLToPath(`${_path}/script.js`)
    const childProcess = fork(file, args.slice(2), {silent: true})
    
    process.stdin.pipe(childProcess.stdin)
    
    childProcess.stdout.pipe(process.stdout)
};

spawnChildProcess(process.argv);