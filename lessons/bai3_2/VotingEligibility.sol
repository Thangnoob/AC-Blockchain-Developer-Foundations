// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingEligibility {
    uint public minAge = 18;
    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner!");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function checkEligibility(uint age) external view returns (bool) {
        return age >= minAge;
    }

    function updateMinAge(uint newMinAge) external onlyOwner {
        minAge = newMinAge;
    }
}