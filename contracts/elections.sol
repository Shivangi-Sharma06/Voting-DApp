// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Elections{

    struct candidate{
        string name;
        uint votecount;
    }
    struct voter{
        uint Voted_For_ID;
        bool HasVoted;
    }

    //stored the data in mapping thing not in dynamic array because of key value pair,gas cost
    //dmerits of storing in mapping is that it is not odered and ypu won't get length directly 

    address public controller; 
    uint public countcandidate;

    mapping (uint=>candidate) public candidates;
    mapping (address=>voter) public voters;  

    event candidateadded(uint indexed candidateID,string name);
    event candidateremoved(uint indexed candidateID,string name);
    event voted(uint indexed candidateID, address voter);
    event controllerchanged(address oldcontroller, address newcontroller);

    constructor(){
        controller=msg.sender;
        countcandidate=0;
    }

    modifier onlyadmin(){
        require (msg.sender==controller, "only controller can do this task");
        _;
    }

    modifier candidatexists(uint _candidateID){
        require(_candidateID > 0 && _candidateID <= countcandidate, "Invalid candidate ID");
       _;
    }

    modifier hasnotvoted(){
        require(!voters[msg.sender].HasVoted, "you have already voted");
        _;
    }

    function addcandidate(string memory _candidatename) public onlyadmin{
        countcandidate++;
        candidates[countcandidate]=candidate(_candidatename,0);
        emit candidateadded(countcandidate,_candidatename);
    }

    function removecandidate(uint _candidateID) public onlyadmin candidatexists(_candidateID){
        string memory candidatename=candidates[_candidateID].name;
        delete candidates[_candidateID];
        emit candidateremoved(_candidateID,candidatename);

    }

    function changeowner(address _newcontroller) public onlyadmin{
        require(_newcontroller!=address(0),"Invalid address");
        address oldcontroller=controller;
        controller=_newcontroller;
        emit controllerchanged(oldcontroller,_newcontroller);
    }

    function vote(uint _candidateID) public hasnotvoted candidatexists(_candidateID){
        voters[msg.sender].HasVoted=true;
        voters[msg.sender].Voted_For_ID= _candidateID;
        candidates[_candidateID].votecount++;
        emit voted(_candidateID,msg.sender);
    }

    function getcandidate(uint _candidateID) public view candidatexists(_candidateID)returns(uint,string memory,uint){
        candidate memory c=candidates[_candidateID];
        return (_candidateID,c.name,c.votecount);
    }

    function getController() public view returns (address) {
    return controller;
    }


    function countvotes(uint _candidateID) public view candidatexists(_candidateID) returns(uint){
        return candidates[_candidateID].votecount;
    }

    function hasvoted(address _voter) public view returns(bool) {
        return(voters[_voter].HasVoted);
    }

}


