require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// const { ALCHEMY_API_KEY, ETHERSCAN_API_KEY, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // networks: {
  //   hardhat: {
  //     chainId: 1337
  //   },
  //   localhost: {
  //     url: "http://localhost:8545",
  //   },
  // },
  // networks: {
  //   rinkeby: {
  //     // url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  //     url: `https://rinkeby.infura.io/v3/8e5fd748b32d441fac16a6feec74d1dd`,
  //     // accounts: [`0x${PRIVATE_KEY}`]
  //     accounts: [`0x669B1BE4489934bC7b95B90D691172017898bDD9`]
  //   }

  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/8e5fd748b32d441fac16a6feec74d1dd",
      accounts: ["e3d7ddffc410c1e35b340e1570e5a27f96b75f7edc8deae6e5c2d0e176c6acec"],
    }
  },
  etherscan: {
    // apiKey: ETHERSCAN_API_KEY
    apiKey: '1V9T4XBM5WP1WDTPWP48GWJ1BB4VJU5VHG',
    // 下面的信息将用于Etherscan合约验证页面
    // 您需要确保这些与您的合约一致
    contractName: "Counter",
    // 包含合约代码的Solidity文件的路径（相对于hardhat.config.js文件）
    // 这里假设您的Solidity文件在contracts/MyContract.sol中
    // 如果您的文件位于不同的位置，请相应地更改路径
    sourceName: "./contracts/Counter.sol",
    // 合约地址
    contractAddress: "0x8281663A38E4cb7CE64d77F70a6AD208256F9Fa1"
  },
  solidity: "0.8.18",
};

