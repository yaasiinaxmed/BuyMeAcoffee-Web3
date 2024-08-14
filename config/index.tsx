import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Your WalletConnect Cloud project ID
export const projectId = "b309f3de68f9e7633077bf4d62d4e939";

// Create a metadata object
export const metadata = {
  name: "Buy Me a Coffee",
  description: "Buy Me a Coffee - Web3 | Yasin Ahmed",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: false, // default to true
    showWallets: true, // default to true
    walletFeatures: true, // default to true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
