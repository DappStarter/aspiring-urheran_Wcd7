require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind purity half clog obscure tail'; 
let testAccounts = [
"0xba80aff62e161dc8690c483894cf5faa4df3787393f93574f850daed303165fe",
"0x65e9829cc030bd083714f5fd96b98eea2d8f990d4d7932976a1f47b0e70e6752",
"0x057e1f3db796401344a5b6171e032423ae7fd953a6eea9aca9162a55319def83",
"0xa3dbd314ec419e6910472c0aaad0d308c4a1872973a2ebb7bf68c13b5b659d56",
"0xc336a8125a2248636e95a3131845b33fdb1b9eecfbb8a40263a2229b3e8d3e1e",
"0xf77e8c03d8a074ded2d6195ed7050dce58c8b319a21a532e34b3628c1854187c",
"0x7d061e2dd3f486da29c92c136e4365f8dfe5d54a3f89f68a8fb0a048cdfac607",
"0x6d6fc111bda7416f96a0b25cfec6e720adc22c43240c29f5dc67832ecde6a565",
"0xdbad656693cd276bf04a16fe8966bf34368de499a469a93b211ca898d922c1da",
"0x5ef99b1d3fae48215650f5af2ef3b93c61f620f8f2645ac14c0b4bebaa266640"
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

