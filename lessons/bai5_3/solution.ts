import { ethers } from "ethers";

async function main() {
  //Provider ket noi den blockchain
  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.public.blastapi.io"
  );

  //Địa chỉ contract từ README.md
  const address = "0x41d0Ad4E6227062B59CA673B418Fc00E3A2d10Cf";

  //ABI của contract
  const abi = [
    "function getCount() public view returns (uint)",
    "function increment() public",
  ];

  //Tạo đối tương contract
  const contract = new ethers.Contract(address, abi, provider);

  //Gọi hàm getCount() chỉ đọc
  const count = await contract.getCount();
  console.log("Current count is:", count.toString());
}

main().catch(console.error);
