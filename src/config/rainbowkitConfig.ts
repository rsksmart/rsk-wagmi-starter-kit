import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { rootstock } from 'wagmi/chains';
import { rsktestnet } from '../utils/RootstockTestnet';

export const rainbowkitConfig = getDefaultConfig({
  appName: 'Rootstock Rainbowkit',
  projectId: 'YOUR_PROJECT_ID',
  chains: [rootstock, rsktestnet],
});
