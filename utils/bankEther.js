const { ethers } = require("ethers");

// 1. 配置连接到以太坊网络的provider
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// 2. 配置签名账户和私钥
const signer = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

// 3. 配置合约地址和合约ABI
const contractAddress = "CONTRACT_ADDRESS";
const contractABI = [
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// 4. 创建合约实例
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// 5. 调用智能合约方法
(async () => {
    // 存款
    const depositTx = await contract.deposit({ value: ethers.utils.parseEther("1.0") });
    console.log(`Deposit transaction hash: ${depositTx.hash}`);

    // 查询余额
    const balance = await contract.getBalance(signer.address);
    console.log(`Balance: ${ethers.utils.formatEther(balance)}`);

    // 取款
    const withdrawTx = await contract.withdraw();
    console.log(`Withdraw transaction hash: ${withdrawTx.hash}`);

    // 再次查询余额
    const updatedBalance = await contract.getBalance(signer.address);
    console.log(`Updated balance: ${ethers.utils.formatEther(updatedBalance)}`);
})();


// 笔记
// npx hardhat run scripts/your-script.js

// 如果脚本需要传递参数，则可以在命令行中使用--符号将参数传递给脚本。例如，如果你想在脚本中使用另一个地址来查询余额，则可以在命令行中使用以下命令：
// npx hardhat run scripts/your-script.js --address 0x123456789...

// 在脚本中，可以使用process.argv来获取命令行参数。例如，如果你想获取地址参数，可以使用以下代码：
// const address = process.argv[2];

