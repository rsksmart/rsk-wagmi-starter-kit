[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rsksmart/rsk-wagmi-starter-kit/badge)](https://scorecard.dev/viewer/?uri=github.com/rsksmart/rsk-wagmi-starter-kit)
[![CodeQL](https://github.com/rsksmart/rsk-wagmi-starter-kit/workflows/CodeQL/badge.svg)](https://github.com/rsksmart/rsk-wagmi-starter-kit/actions?query=workflow%3ACodeQL)
<img src="rootstock-logo.jpg" alt="RSK Logo" style="width:100%; height: auto;" />

## Rootstock Wagmi & Shadcn Starter Kit

This starter kit provides a foundation for building decentralized applications (dApps) on the Rootstock blockchain using [React](https://react.dev/learn), [Wagmi](https://wagmi.sh/) and [Shadcn](https://ui.shadcn.com/) libraries. It includes features such as:

- Integration with [Rainbowkit](https://www.rainbowkit.com/) for wallet connection and interacting with smart contracts
- Sample integrations of interactions with tokens like ERC20, ERC721, and ERC1155.
- Prettier and eslint configured for project files.
- Tailwindcss and Shadcn configured for style customization.

Check the live demo here: https://rsk-wagmi-starter-kit.vercel.app/

## Project Structure

```text
.
├── public
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── config
│   │   ├── providers.tsx
│   │   ├── rainbowkitConfig.ts
│   │   └── wagmiProviderConfig.ts
│   ├── lib
│   │   └── utils
│   ├── main.tsx
│   ├── pages
├── package.json
```

## Supported Networks

- Rootstock Mainnet
- Rootstock Testnet

## Usage

### Setup

#### 1. Clone Repository

```shell
git clone https://github.com/chrisarevalodev/rsk-wagmi-starter-kit.git
cd rsk-wagmi-starter-kit
```

#### 2. Configure Project

Copy the `.env.example` file and rename it to `.env`, and add a variables:

```shell
VITE_WC_PROJECT_ID='your Reown (prev wallet connect) key'
VITE_BUNDLER_API_KEY=your_api_key_here
VITE_CUSTOM_BUNDLER_URL=https://rootstocktestnet-bundler.etherspot.io/
```
> **Note**: Go to [Reown Dashboard](https://cloud.reown.com/sign-in) and create a project, copy the project ID and paste it on `VITE_WC_PROJECT_ID`.

#### 3. Install Dependencies

> **Note**: We recommend using yarn package manager given that there are some conflicts when installing some packages with npm.

For the variables `VITE_BUNDLER_API_KEY` and `VITE_CUSTOM_BUNDLER_URL`, these are used for the etherspot gasless demo part, and these variables (for testnet) are public and can be used as shown next. For production use, please obtain bundler api key and bundler url from [Etherspot](https://etherspot.io/)

```shell
yarn
```

#### 4. Run Project

```shell
yarn dev
```
