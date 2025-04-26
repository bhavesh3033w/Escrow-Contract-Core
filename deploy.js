const hre = require("hardhat");

async function main() {
  const [deployer, buyer, seller, arbiter] = await hre.ethers.getSigners();

  console.log("Deploying Escrow contract with deployer:", deployer.address);
  console.log("Buyer:", buyer.address);
  console.log("Seller:", seller.address);
  console.log("Arbiter:", arbiter.address);

  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(buyer.address, seller.address, arbiter.address);

  await escrow.deployed();

  console.log("✅ Escrow contract deployed at:", escrow.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
