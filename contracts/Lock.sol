// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    address payable public owner;
    uint public constant  seat_price= 2 ether;
    uint seats_available;
    constructor()private{
        owner=msg.sender;
        seats_available=200;  
    }
    modifier onlyIfSeatsAvailable{
         require(seats_available>0,'No seats available');
    }
    modifier IsSufficientEthers(uint _price){
        require(msg.value==_price,'proper amount not paid');
    }
    event  Booked(address _sender, uint _value)
    function book() payable onlyIfSeatsAvailable IsSufficientEthers(seat_price) {
       
        owner.transfer(msg.value);
        seats_available=seats_available-1;
        emit Booked(msg.sender,msg.value)
    }
    
}
