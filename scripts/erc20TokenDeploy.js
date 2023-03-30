const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const HQXToken = await ethers.getContractFactory("HQXToken");
  const hqxToken = await HQXToken.deploy();

  console.log("HQXToken address:", hqxToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
