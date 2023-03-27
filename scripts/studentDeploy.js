const { ethers } = require("hardhat");

async function main() {
  // 编译合约
  const Score = await ethers.getContractFactory("Score");
  console.log("Compiling Score...");

  // 部署 Score 合约
  const score = await Score.deploy();
  await score.deployed();
  console.log("Score deployed to:", score.address);

  // 部署 Teacher 合约，并将 Score 的实例传入构造函数中
  const Teacher = await ethers.getContractFactory("Teacher");
  console.log("Compiling Teacher...");

  const teacher = await Teacher.deploy(score.address);
  await teacher.deployed();
  console.log("Teacher deployed to:", teacher.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
