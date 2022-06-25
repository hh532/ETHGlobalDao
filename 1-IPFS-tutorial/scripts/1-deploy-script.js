const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

  const DAO = await hre.ethers.getContractFactory("DAO");
  const dao = await DAO.deploy();
  await dao.deployed();
  console.log("dao deployed to:", dao.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});