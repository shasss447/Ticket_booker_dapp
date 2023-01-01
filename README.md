# Ticket Booking Decentralised Application

Welcome to the open source repo for the decentralised app for a ticket booking platform.
The folder structure is simple and is explained below:

Its based on a sample hardhat project directory structure:

## Contracts

The contracts directory contains the smart contract written in **Solidity**. The code is explained with the comments. The smart contract follows around a ```constructor``` that gets initialised on the start of the application. It uses strategies such as sending eth from one account to the another using **Metamask** wallet.

## Scripts

The folder simply contains the deployment script in order to deploy the smart contract to the testnet and use it with the frontend written in **React**.

## React folder

The React folder named ```src``` contains the frontend: components, hooks and routes.

## Test

The directory consists of a simple unit testing script for the smart contract written in JavaScript.


Apart from that, I seem to add more things:

### Smart Contract Security

I intend to add APIs around smart contract vulnerability tools like **Slither**, **Mythril** and other platforms in order to make sure that the contract is safe from any vulnerability loop hole. Since its a transaction platform, we need to make sure that there are no hacks around users money transfers, for that reason, implementing contract security is a top priority. 
