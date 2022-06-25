const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmdXg8XW5gQ57UwXHCR7GZ6cvifUAqMP9rukDzST6mXmuN"
  const WALLET_ADDRESS = "0x1278ae0c10C9D76Ea6CD4f3A99d1F69c6933f967"
  const CONTRACT_ADDRESS = "0xD456A0f1A2Cd6eF5Bde527d832fB4C8c4f28Ab3F"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});