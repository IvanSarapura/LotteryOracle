const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

const contractAddress = "0x8464135c8F25Da09e49BC8782676a84730C318bC"; //Address del contrato desplegado vía REMIX

const abi = ["event VRF()"];

async function main() {
  const contract = new ethers.Contract(contractAddress, abi, provider);

  contract.on("VRF", () => {
    console.log("Recibi un evento");
  });
  console.log("Estoy escuchando");
}

main();
