// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }
    address public owner;
    mapping (uint => Candidate) public candidates; // id -> Candidate
    mapping (address => bool) public hasVoted;     // address -> voted?

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can create candidate!");
        _;
    }

    event Voted(address voter, uint candidateId);

    constructor(){
        owner = msg.sender;
    }

    function createCandidate(string memory _name, uint _candidateId) public onlyOwner {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(candidates[_candidateId].name).length == 0, "Candidate already exists");
        candidates[_candidateId] = Candidate(_name, 0);
    }

    function vote(uint _candidateId) public {   
        require(!hasVoted[msg.sender], "You have already voted!");
        //do string không có length trực tiếp, nên dùng byte nếu > 0 -> có chuỗi | == 0 -> chuỗi rỗng
        require(bytes(candidates[_candidateId].name).length > 0, "Candidate does not exist");
        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        emit Voted(msg.sender, _candidateId);
    }
}