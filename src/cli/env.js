import { env } from 'process';

const parseEnv = () => {
    // Write your code here 
    const envList = []
    for (let key in env) {
        if(key.includes('RSS_'))
            envList.push(`${key}=${env[key]}`)
    }
    console.log(envList.join('; '))
};

parseEnv();