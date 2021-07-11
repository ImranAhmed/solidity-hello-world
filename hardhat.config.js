/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-etherscan");
 require("@nomiclabs/hardhat-ethers");
 
 const { ALCHEMY_API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "ropsten",
   networks: {
     hardhat: {},
     ropsten: {
       url: ALCHEMY_API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
   etherscan: {
     apiKey: process.env.ETHERSCAN_API_KEY,
   },
 };
 