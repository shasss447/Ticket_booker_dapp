// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    address payable public owner; //owner of the cinema hall
    uint256 public constant seat_price = 0.00002 ether; //price of each seat
    uint256 seats_available; //no. of seats available

    receive() external payable {}

    constructor(uint256 _seatavailable) {
        seats_available = _seatavailable; //setting capacity of cinema hall
    }

    // check whether seats are available or not
    modifier onlyIfSeatsAvailable() {
        require(seats_available > 0, "No seats available");
        _;
    }

    //  // check whether right amount of ether is sent or not
    //     modifier IsSufficientEthers(uint _price)
    //     {
    //         require(msg.value==_price,'proper amount not paid');
    //         _;
    //     }
    // event to show the address and amount paid by the seat booker
    event Booked(address _sender, uint256 _value);

    // main function to book seat and do the payment
    function book() external payable onlyIfSeatsAvailable {
        owner.transfer(msg.value);
        seats_available = seats_available - 1;
        emit Booked(msg.sender, msg.value);
    }
}
