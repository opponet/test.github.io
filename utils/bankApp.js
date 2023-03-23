// const Web3 = require('web3');
// const web3 = new Web3('http://localhost:8545');  //这里的地址应该与你运行的网络相对应

// const contractAddress = '0x1234567890123456789012345678901234567890'; //这里填写实际的智能合约地址
// const contractABI = require('./build/contracts/Bank.json').abi; //这里的路径应该与你的ABI文件相对应
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// async function deposit() {
//     const accounts = await web3.eth.getAccounts();
//     const amount = web3.utils.toWei('1', 'ether'); //这里填写实际的存款金额
//     await contract.methods.deposit().send({ from: accounts[0], value: amount });
//   }
  
//   async function withdraw() {
//     const accounts = await web3.eth.getAccounts();
//     await contract.methods.withdraw().send({ from: accounts[0] });
//   }
  
//   async function getBalance() {
//     const accounts = await web3.eth.getAccounts();
//     const balance = await contract.methods.getBalance(accounts[0]).call();
//     console.log(`Balance: ${

// ***
// const Web3 = require('web3');
// const Bank = require('./build/contracts/Bank.json');

// // 连接到以太坊网络
// const web3 = new Web3('http://localhost:8545');

// // 获取 Bank 合约实例
// const contractAddress = '0x123456789...'; // Bank 合约地址
// const bankContract = new web3.eth.Contract(Bank.abi, contractAddress);

// // 调用合约函数
// async function deposit() {
//   const amount = 100; // 存款金额
//   const accounts = await web3.eth.getAccounts(); // 获取当前账户
//   const result = await bankContract.methods.deposit().send({
//     from: accounts[0],
//     value: web3.utils.toWei(amount.toString(), 'ether'),
//   });
//   console.log(result);
// }

// async function withdraw() {
//   const accounts = await web3.eth.getAccounts(); // 获取当前账户
//   const result = await bankContract.methods.withdraw().send({
//     from: accounts[0],
//   });
//   console.log(result);
// }

// async function getBalance() {
//   const accounts = await web3.eth.getAccounts(); // 获取当前账户
//   const balance = await bankContract.methods.getBalance(accounts[0]).call();
//   console.log(balance);
// }


// node app.js运行 ，即可调用智能合约中的函数。其中，需要将合约地址、ABI 定义和账户地址等参数填写正确。
// 导入 Web3.js 库
const Web3 = require('web3');

// 设置 Web3.js 对应的 provider
const provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/8e5fd748b32d441fac16a6feec74d1dd');

// 初始化 Web3 对象
const web3 = new Web3(provider);

// 智能合约地址
const contractAddress = '0x...';

// ABI 定义
const abi = [...];

// 初始化智能合约实例
const contract = new web3.eth.Contract(abi, contractAddress);

// 调用 deposit 函数
contract.methods.deposit()
  .send({from: '0x...', value: 1000000000000000000})
  .then((receipt) => {
    console.log(receipt);
  })
  .catch((error) => {
    console.error(error);
  });

// 调用 withdraw 函数
contract.methods.withdraw()
  .send({from: '0x...'})
  .then((receipt) => {
    console.log(receipt);
  })
  .catch((error) => {
    console.error(error);
  });

// 查询账户余额
contract.methods.getBalance('0x...')
  .call()
  .then((balance) => {
    console.log(balance);
  })
  .catch((error) => {
    console.error(error);
  });


  