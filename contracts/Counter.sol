// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Counter {
    uint256 public counter;
    address public owner;

    constructor(uint256 x) {
        counter = x;
        owner = msg.sender;
    }

    function count() public {
        require(msg.sender == owner,"Only the contract owner can call this function");
        counter = counter + 1;
    }
}