const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery", function () {
  let Lottery; // Va a tener el objeto para hacer el deploy (esto se deployea internamente en un entorno llamado develop)
  let lottery; // Va a tener el contrato

  // Vamos a deployar un contrato con cada prueba, por lo tanto esta función sera asincronica
  beforeEach(async function () {
    Lottery = await ethers.getContractFactory("Lottery"); // "NombreDelContrato" // Vamos a traver todo el ABI y todo el modulo que necesitamos para poder hacer el deploy.
    lottery = await Lottery.deploy(); // Si el contrato tuviera constructor iría dentro con ("") // Deployamos el contrato y lo guardamos acá
  });

  it("testing setOracle()", async function () {
    await lottery.setOracle("0x1234567890123456789012345678901234567890"); // Address inventada
    let result = await lottery.oracle();
    expect(result).to.equal("0x1234567890123456789012345678901234567890");
  });

  it("testing play()", async function () {
    let contadorBefore = await lottery.counter();
    await lottery.play(); // Así le estamos mandando un value 0
    let contadorAfter = await lottery.counter();
    let result = contadorAfter - contadorBefore;
    expect(result).to.equal(1); // Uno menos el otro tiene que dar 1 como resultado
  });
});
