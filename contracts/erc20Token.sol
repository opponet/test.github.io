// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract HQXToken {
    string public name = "HQX";
    string public symbol = "HQX";
    uint256 public totalSupply = 100000;
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address tokenOwner) public view returns (uint256 balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint256 tokens) public returns (bool success) {
        require(tokens <= balances[msg.sender]);
        balances[msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    event Transfer(address indexed from, address indexed to, uint256 tokens);
}
