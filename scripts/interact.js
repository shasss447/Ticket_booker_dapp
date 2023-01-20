const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract=require("../../artifacts/contracts/Lock.sol/Lock.json")
// console.log(JSON.stringify(contract.abi));
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const lockContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const seat = await lockContract.getdata();
    console.log("Seat available:" + seat);
  }
  main();
  // export {seat};