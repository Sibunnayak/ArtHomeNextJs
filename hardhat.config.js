require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const privateKey =
  "2b95e1adbd917753ac61f59f9276849f120de934800ee90c1d64ff82be9548ca";

// const ANKR_API_KEY = process.env.NEXT_PUBLIC_ANKR_API_KEY;
const ANKR_API_KEY =
  "d993c4b26284bf1b2a2dd15539bcaabe996a568164d46e9a51f08e7aa6b19fef";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: `https://rpc.ankr.com/polygon_mumbai/${ANKR_API_KEY}`,
      accounts: [`0x${privateKey}`],
      chainId: 80001,
    },
  },
};
