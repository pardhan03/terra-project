const { LCDClient, MnemonicKey } = require('@terra-money/terra.js')
require('dotenv').config();

const main = async () => {
    const terra = new LCDClient({
        URL: process.env.TERRA_NODE_URL,
        chainID: process.env.TERRA_CHAIN_ID,
    })
    const mk = new MnemonicKey();
    console.log(mk.valAddress, mk.mnemonic)
}

main().then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
})