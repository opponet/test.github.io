// 导入 Hardhat 库
const { ethers } = require('hardhat');

// 异步函数，包含与智能合约交互的步骤
async function main() {
  // 获取Bank合约工厂
  const Bank = await ethers.getContractFactory('Bank');
  // 部署Bank合约
  const bank = await Bank.deploy();

  // 确认Bank合约已部署
  await bank.deployed();

  // 获取帐户列表
  const accounts = await ethers.getSigners();
  // 获取第一个帐户
  const account = accounts[0];

  // 输出信息，表示将要执行存款操作
  console.log(`Depositing 1 ETH from ${account.address}...`);
  // 连接Bank合约，向其存入1 ETH
  await bank.connect(account).deposit({ value: ethers.utils.parseEther('1') });

  // 输出信息，表示将要执行取款操作
  console.log(`Withdrawing balance from ${account.address}...`);
  // 连接Bank合约，从中取出余额
  await bank.connect(account).withdraw();

  // 获取该帐户的余额
  const balance = await bank.getBalance(account.address);
  // 输出余额信息
  console.log(`Balance for ${account.address}: ${balance.toString()} wei`);
}

// 执行主函数并处理异常
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
