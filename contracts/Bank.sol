// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Bank {
    mapping(address => uint256) balances;

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    function withdraw() external {
        uint256 balance = balances[msg.sender];
        require(balance > 0, "Insufficient balance");

        balances[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Withdrawal failed");
    }

    function getBalance(address account) external view returns (uint256) {
        return balances[account];
    }
}
