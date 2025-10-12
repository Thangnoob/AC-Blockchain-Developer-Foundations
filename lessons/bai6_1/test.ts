import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.public.blastapi.io"
  );

  const abi = [
    "function balanceOf(address account) view returns (uint256)",
    "function decimals() view returns (uint8)",
  ];
  const contractAddress = "0x026064a0A8686B4A78C4C09b9f37a48F02c5B5a0"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, provider);

  /**
   * Get the current balance of deployer
   */

  const address = "0xAD1fB15212Be0Af76B72a8d681f9E9e0A00786E5";
  const balance = await contract.balanceOf(address);
  const decimals = await contract.decimals();
  console.log(
    `Balance of ${address}:`,
    ethers.formatUnits(balance, decimals) + " tokens"
  );
}

main().catch(console.error);

/* Các bước thực hiện: 
  - Từ file template tạo Mytoken.sol
  - Deploy Mytoken.sol lên sepolia với lệnh: npx hardhat deploy --network sepolia --tags deploy (từ file có sẵn tạo 1 file Mytoken-deploy.ts trong thư mục deploy)
   (-) Hardhat sẽ tự động deloy contract và lưu lại địa chỉ contract trong file: deployments/sepolia/Mytoken.json
  - Thay địa chỉ contract vào chỗ contractAddress, địa chỉ được lấy từ file deployments/sepolia/Mytoken.json hoặc từ log khi deploy
  - Thêm abi để đọc balance
  - Chạy file test.ts để test: npx hardhat run scripts/lesson6-1.ts
*/
