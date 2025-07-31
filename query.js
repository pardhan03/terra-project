const { LCDClient, MnemonicKey } = require('@terra-money/terra.js')
require('dotenv').config();

const main = async () => {
    const terra = new LCDClient({
        URL: process.env.TERRA_NODE_URL,
        chainID: process.env.TERRA_CHAIN_ID,
    })
    const mk = new MnemonicKey({
        mnemonic: process.env.MENMONIC
    });

    const nodeInfo = await terra.tendermint.nodeInfo();
    const accountInfo = await terra.auth.accountInfo(mk.accAddress);
    const exchangeRates = await terra.oracle.exchangeRate();
}

main().then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
})