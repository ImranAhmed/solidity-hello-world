### About
Sample HelloWorld contract with a function to update greeting which can only be called by the owner.

Hardhat support for compile, test and deploy.

## Clean Build
1. Create Contract
```
mkdir solidity-hello-world
cd solidity-hello-world
npm init
mkdir contracts
cd contracts
touch HelloWorld.sol
```

2. Install [Hardhat](https://hardhat.org/getting-started/)
```
npm install --save-dev hardhat
npx hardhat (create a new project)
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

3. Compile Contract
```
npx hardhat compile
```

4. Write Unit Test for Contract. See `/test/hello-world.js` for example test script.

```
npx hardhat test
```

5. Deploying Contract
See `/scripts/hello-world.js` for example deployment script.
See `hardhat.config.js` for configuring Ropsten testnet.

```
npm install --save-dev dotenv
touch .env 
```

6. Secrets
add following keys .env file. Do not check in .env file, .gitignore contains this file to prevent accidental check-in.

PRIVATE_KEY: PK of the wallet that will deploy and own the contract

ETHERSCAN_API_KEY: API Key for [Etherscan](https://info.etherscan.com/etherscan-developer-api-key/), used when verifying contract

ALCHEMY_API_URL: Go to [Alchemy](https://www.alchemyapi.io), sign up, create  new app. We are using Alchemy but pointing url to any Ethereum node or gateway would work.

```
npx hardhat run scripts/hello-world.js --network ropsten
```

7. Submit Contract to Etherscan
```
npx hardhat verify --network ropsten "DEPLOYED_CONTRACT_ADDRESS"
```

8. View Contract on Etherscan
https://ropsten.etherscan.io/address/DEPLOYED_CONTRACT_ADDRESS#code

## Further Reading
[Hardhat Deploy](https://hardhat.org/plugins/hardhat-deploy.html)
