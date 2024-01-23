const { Web3 } = require('web3');
const bnb = require("@binance-chain/javascript-sdk/lib/crypto")
const privateKey = bnb.generatePrivateKey();
const address = bnb.generatePubKey(privateKey)
console.log(address)

function createAccount(password) {
    const web3 = new Web3.providers.HttpProvider("https://api.bscscan.com/api");

    let account = new Web3().eth.accounts.create(password)

    return { account: account }
}
module.exports = { createAccount };