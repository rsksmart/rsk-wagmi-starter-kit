import { rsktestnet } from "@/lib/utils/RootstockTestnet";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { rootstock } from "wagmi/chains";

export const rainbowkitConfig = getDefaultConfig({
  appName: "Rootstock Rainbowkit",
  projectId: "YOUR_PROJECT_ID",
  chains: [rootstock, rsktestnet],
});
