// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }
    address public owner;

    mapping(address => Student) public student;

    event Registered(address _user, string _name);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function register(address _user, string memory _name, uint _age) public onlyOwner {
       student[_user] = Student(_name, _age, true);
       emit Registered(_user, _name); 
    }

    function getStudent(address _user) public view returns (string memory, uint, bool) {
        Student memory s = student[_user];
        return (s.name, s.age, s.isRegistered);
    }

    function isStudentRegistered(address _user) public view returns (bool) {
        return student[_user].isRegistered;
    }
}