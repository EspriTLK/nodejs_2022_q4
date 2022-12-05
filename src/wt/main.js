import { fileURLToPath, pathToFileURL } from 'node:url';
import { Worker } from 'node:worker_threads'
import { cpus } from 'node:os'
const performCalculations = async () => {
    // Write your code here
    const _path = fileURLToPath(new URL('.', import.meta.url))
    let num = 10
    const result = []
    
    const runWorkers = await Promise.allSettled( cpus().map(() => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(`${_path}/worker.js`, {
                    workerData: num++
                })
                worker.on('message', (msg) => {
                    resolve(msg)
                })
                worker.on('error', (err) => {
                    reject(err)
                })
                
            })
            
        }))
        
        for(let elm in runWorkers){
        let resData = {}

        if(runWorkers[elm].status === 'fulfilled'){
            resData.status = 'resolved',
            resData.data = runWorkers[elm].value
            result.push(resData)
        } else {
            resData.status = 'error'
            resData.data = null
        }
        
    }
    
    console.log(result)
    
};

await performCalculations();