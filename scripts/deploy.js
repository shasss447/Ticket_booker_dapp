const hre = require("hardhat"); //import the hardhat

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract

  console.log("Deploying contracts with the account:", deployer.address); 

  const Lock = await hre.ethers.getContractFactory("Lock"); // Getting the Contract
  const lock = await Lock.deploy(200,2); //deploying the contract

  await lock.deployed(); // waiting for the contract to be deployed

  console.log("Contract deployed", lock.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });