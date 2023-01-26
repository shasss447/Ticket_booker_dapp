/**
* @type import('hardhat/config').HardhatUserConfig
*/

//require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   paths: {
     artifacts: './src/artifacts',
   },
   networks: {
     hardhat: {
       chainId: 1337,
     },
   }
};

