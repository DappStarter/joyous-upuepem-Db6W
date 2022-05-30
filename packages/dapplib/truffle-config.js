require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rival scrub protect idea clock equal gate'; 
let testAccounts = [
"0xffa5fdfb6cce27798c1a2b9367bbb7833b2c9391c26fdef8406598d1c45615cf",
"0x1da74a5e6d969a124da999e2ff9ede2d083c916605288a917af520e92448f423",
"0x0fef1eb163ffeea43f4b2fa1d0495a893e8bbb0f06d7163d9bcdceb6e3fef768",
"0xe615652d5e9a7e15af16e244295d0ff8003c20e5aafa280d45cb0cbf333b6c06",
"0xe5c428505a912aa795ba340690c535077c2e951a5dd201e027d0d31b249c20a7",
"0x2ed5d6854c7d3dd87da62e3db2ae98d3baac894cd9cc3bbc338fe328d2203275",
"0x5913b516037ea6f4c497dd0c5eac72e60e88faf3e7be2b8528d63b093bb67060",
"0x3c854851be3f6789310dca8adb9186bf85ca2cee5c771e8091541a6becef46b2",
"0x6c3e39b3f40d812ba450db489f68f23fdccb4a142d6a5da4d75d7d9f700fbee8",
"0x714b20bf1bc3f7e56c01dfe37ae9b8a7f98857d53af2fd8a6c7830d2fdc13e93"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

