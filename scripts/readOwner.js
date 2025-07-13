const { ethers } = require("hardhat");

async function main() {
  addr_ = "0x9fe8fb3d466fe5e7f9a58fe32f90e12dcd2960a0"; // Sabe donde ir a buscarlo pero no tiene el ABI
  Lottery = await ethers.getContractFactory("Lottery"); // Tiene el ABI pero nosabe donde ir a buscarlo
  lottery = Lottery.attach(addr_); // Los junta
  owner = await lottery.owner(); // Este await se encarga de que espere a que reciba la info de la blockchain
  console.log("El owner es: " + owner);
}

main();
