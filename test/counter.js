const { expect } = require("chai");

describe("Counter", function () {
  it("Should return the initial counter value", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    await counter.deployed();

    expect(await counter.counter()).to.equal(0);
  });

  it("Should increment the counter by 1", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    await counter.deployed();

    await counter.count();
    expect(await counter.counter()).to.equal(1);
  });

  it("Should only allow the owner to increment the counter", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const [owner, user] = await ethers.getSigners();

    const counter = await Counter.deploy(0);
    await counter.deployed();

    await counter.connect(owner).count();
    expect(await counter.counter()).to.equal(1);

    await expect(counter.connect(user).count()).to.be.revertedWith(
      "Only the contract owner can call this function"
    );
    expect(await counter.counter()).to.equal(1);
  });
});
