const {LCDClient} = require('@terra-money/terra.js')
require('dotenv').config();

const main = async () => {
    const terra = new LCDClient({
        URL: process.env.TERRA_NODE_URL,
        chainID: process.env.TERRA_CHAIN_ID,
    })
    console.log(`Successfully connected to terra node : ${terra}`);
    return terra;
}

main().then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
})