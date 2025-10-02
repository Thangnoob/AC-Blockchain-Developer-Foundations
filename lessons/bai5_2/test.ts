// Không cần kiểm thử bằng TypeScript
console.log("Test contract trực tiếp bằng hardhat.");

/*
Các bước thực hiện:
    B1: clone project và thực hiện cài đặt thư viện: npm install
    B2: Thêm private key vào .env (TEST_PRIVATE_KEY và MAINNET_PRIVATE_KEY):
     + Trong file hiện tại là .env_example đổi tên thành .env hoặc config trong hardhat.config.ts phần dotenv.config({ path: ".env_example" }); 
     + Thêm private key (từ metamask) vào 2 truong TEST_PRIVATE_KEY và MAINNET_PRIVATE_KEY
    B3: Thực hiện deploy contract: npx hardhat deploy --network sepolia --tags deploy
    B4: Thực hiện test contract: npx hardhat run scripts/test.ts
*/
