import { ethers, deployments, getNamedAccounts } from "hardhat";

async function main() {
  const { deployer } = await getNamedAccounts();
  const deployment = await deployments.get("MyMintableToken");

  console.log("====================");
  console.log("Minting tokens...");
  console.log("====================");

  const token = await ethers.getContractAt("MyMintableToken", deployment.address);

  const amount = ethers.parseUnits("1000", 18);
  const tx = await token.mint(deployer, amount);
  await tx.wait();

  const balance = await token.balanceOf(deployer);
  console.log(`✅ Minted 1000 MMT for ${deployer}`);
  console.log(`💰 Current balance: ${ethers.formatUnits(balance, 18)} MMT`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
