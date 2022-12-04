const hre = require("hardhat"); //import the hardhat

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract

  console.log("Deploying contracts with the account:", deployer.address); 

  const Lock = await hre.ethers.getContractFactory("Lock"); // Getting the Contract
  const lock = await Lock.deploy(deployer.address,200); //deploying the contract

  await lock.deployed(); // waiting for the contract to be deployed

  console.log("Contract deployed", lock.address); // Returning the contract address on the rinkeby
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); // Calling the function to deploy the contract 