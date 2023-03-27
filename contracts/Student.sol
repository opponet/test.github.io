// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IScore {
    function setScore(address student, uint256 score) external;
}

contract Score is IScore {
    mapping(address => uint256) private scores;
    address private teacher;

    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only teacher can perform this action");
        _;
    }

    constructor() {
        teacher = msg.sender;
    }

    function setScore(address student, uint256 score) external override onlyTeacher {
        require(score <= 100, "Score cannot be greater than 100");
        scores[student] = score;
    }

    function getScore(address student) public view returns (uint256) {
        return scores[student];
    }
}

contract Teacher {
    IScore private scoreContract;

    constructor(IScore _scoreContract) {
        scoreContract = _scoreContract;
    }

    function setScore(address student, uint256 score) public {
        scoreContract.setScore(student, score);
    }
}
