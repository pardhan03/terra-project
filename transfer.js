const { LCDClient, MnemonicKey, MsgSend, isTxError } = require('@terra-money/terra.js')
require('dotenv').config();

const main = async () => {
    const terra = new LCDClient({
        URL: process.env.TERRA_NODE_URL,
        chainID: process.env.TERRA_CHAIN_ID,
    })
    const mk = new MnemonicKey({
        mnemonic: process.env.MENMONIC
    });

    const wallet = terra.wallet(mk);
    const toAddress = "terravaloper1kfnw4h0zv6pz0x2apwsmu2zty30jrz2ctzvtld";
    const msg = new MsgSend(wallet.key.accAddress, toAddress, {
        uluna: 1 * 1000000,
    })

    const tx = await wallet.createAndSignTx({
        msgs: [msg],
        memo: "This is the transaction",
    })

    const txResult = await terra.tx.broadcast(tx);
    if(isTxError(txResult)) {
        console.log(txResult);
        throw new Error();
    }

    console.log(`logs: ${txResult.logs}`)
}

main().then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
})