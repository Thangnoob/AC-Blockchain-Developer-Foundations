// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Profile {
    string public name;
    uint public age;

    constructor (string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    function setProfile(string memory _name, uint _age) external  {
        name = _name;
        age = _age;
    }
}