const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmdXg8XW5gQ57UwXHCR7GZ6cvifUAqMP9rukDzST6mXmuN"
  const WALLET_ADDRESS = "0x1278ae0c10C9D76Ea6CD4f3A99d1F69c6933f967"
  const CONTRACT_ADDRESS = "0xc69876890fD966B57dca8fC8d5954C219dC631f6"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});