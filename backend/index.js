const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/a3abdc1def32488499e3e416c908452e"
);

const contractAddress = "0x9fe8fb3d466fE5e7f9A58fe32f90e12dcd2960a0"; //Address del contrato desplegado vía REMIX

const abi = ["event VRF()"];

async function main() {
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Escucha el evento VRFAsk
  contract.on("VRF", () => {
    console.log("Recibi un evento");
  });
  console.log("Estoy escuchando");
}

main();
