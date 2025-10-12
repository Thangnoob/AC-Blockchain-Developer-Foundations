import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const MyNFT = await ethers.getContractFactory("MyNFT");

  const nft = await MyNFT.deploy();
  await nft.waitForDeployment();

  const contractAddress = await nft.getAddress();
  console.log(" Deployed:", contractAddress);

  const mintTx = await nft.mint(deployer.address);
  const receipt = await mintTx.wait();

  console.log(" Deployer address:", await deployer.getAddress());

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const owner = await nft.ownerOf(0);
  console.log(" Owner of token 0:", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
