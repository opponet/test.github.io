const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
    // 编写部署代码
    async function main() {
        // 1. 编译智能合约
        const Bank = await ethers.getContractFactory("Bank");
        console.log("Compiling Contract...");

        // 2. 部署智能合约
        const bank = await Bank.deploy();
        await bank.deployed();
        console.log(`Contract deployed to address: ${bank.address}`);

        // 3. 写入合约地址到文件
        const data = {
            address: bank.address,
        };
        fs.writeFileSync("./deployed_contract.json", JSON.stringify(data));

        // 4. 调用智能合约函数进行测试
        const [owner, addr1, addr2] = await ethers.getSigners();
        await bank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
        await bank.connect(addr2).deposit({ value: ethers.utils.parseEther("2.0") });

        console.log(`Balance of addr1: ${await bank.connect(addr1).getBalance()}`);
        console.log(`Balance of addr2: ${await bank.connect(addr2).getBalance()}`);

        await bank.connect(owner).withdraw();
    }

}

// 运行部署函数
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
