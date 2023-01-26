// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Lock 
{
    address payable public owner=payable(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266); //owner of the cinema hall
     //price of each seat
    uint seats_available; //no. of seats available
    uint seat_price;

    
    constructor(uint _seatavailable,uint _seatprice) 
    {
        seats_available = _seatavailable; //setting capacity of cinema hall
         seat_price=_seatprice;
    }

    // check whether seats are available or not
    modifier onlyIfSeatsAvailable() 
    {
        require(seats_available > 0, "No seats available");
        _;
    }

    event Booked(address _sender, uint256 _value);

    // main function to book seat and do the payment
    function book() external payable onlyIfSeatsAvailable
    {
        // owner.transfer(msg.value);
        seats_available = seats_available - 1;
        emit Booked(msg.sender, msg.value); 
    }
    function getdata()external view returns(uint,uint){
        return (seats_available,seat_price);
    }
}
