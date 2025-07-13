require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");
require("dotenv").config();

const INFURA_NODO = process.env.NODO; // Para escribir en la blockchain
const SEPOLIA_PRIVATE_KEY = process.env.PRKEY; // El que paga el gas
const ETHERSCAN_API_KEY = process.env.ETHSCAN_KEY; // Va a verificar el contrato

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: INFURA_NODO,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};
