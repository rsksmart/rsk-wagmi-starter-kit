'use client';

import { useEffect, useState } from 'react';
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { PrimeSdk, EtherspotBundler } from "@etherspot/prime-sdk";
import { formatAddress } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { parseEther } from "viem/utils";
import { BigNumber } from 'ethers';

export default function Demo() {
    const [sdk, setSdk] = useState<PrimeSdk | null>(null);
    const { toast } = useToast();
    const [loadingEOA, setLoadingEOA] = useState<boolean>(false);
    const [loadingEtherspotWallet, setLoadingEtherspotWallet] = useState<boolean>(false);
    const [loadingEstimate, setLoadingEstimate] = useState<boolean>(false);
    const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
    const [loadingSendTx, setLoadingSendTx] = useState<boolean>(false);
    const [eoaWalletAddress, setEoaWalletAddress] = useState("");
    const [etherspotWalletAddress, setEtherspotWalletAddress] = useState("");
    const [copiedEOA, setCopiedEOA] = useState<boolean>(false);
    const [copiedEtherspot, setCopiedEtherspot] = useState<boolean>(false);
    const [eoaPrivateKey, setEoaPrivateKey] = useState("");
    const [recipient, setRecipient] = useState("");
    const [value, setValue] = useState("");
    const [balance, setBalance] = useState<string>("");
    const [estimatedGas, setEstimatedGas] = useState<string>("");

    const copy = (address: string, setCopied: (value: boolean) => void) => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const generateRandomEOA = async () => {
        setLoadingEOA(true);
        try {
            const pk = generatePrivateKey();
            const account = privateKeyToAccount(pk);
            setEoaWalletAddress(account.address);
            setEoaPrivateKey(pk);
        } catch (error) {
            console.error("Error generating EOA:", error);
            toast({
                title: "Error",
                description: "Failed to generate EOA wallet.",
            });
        } finally {
            setLoadingEOA(false);
        }
    };

    const getBalance = async () => {
        if (!sdk) {
            console.log('SDK is not initialized');
            return;
        }

        setLoadingBalance(true);

        try {
            const balance = await sdk.getNativeBalance();
            console.log('Account balance:', balance);
            setBalance(balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
            toast({
                title: "Error",
                description: "Failed to fetch balance.",
            });
        } finally {
            setLoadingBalance(false);
        }
    };

    const generateEtherspotWallet = async () => {
        if (!sdk) return;
        setLoadingEtherspotWallet(true);

        try {
            const address = await sdk.getCounterFactualAddress();
            setEtherspotWalletAddress(address);
            console.log("EtherspotWallet address:", address);
            await getBalance();
        } catch (error) {
            console.error("Error generating Etherspot Wallet:", error);
            toast({
                title: "Error",
                description: "Failed to generate Etherspot wallet.",
            });
        } finally {
            setLoadingEtherspotWallet(false);
        }
    };

    const estimateCost = async () => {
        if (!sdk) {
            console.log('SDK is not initialized');
            return;
        }

        if (!recipient || !value) {
            toast({
                title: "Invalid Input",
                description: "Recipient address and value are required.",
            });
            return;
        }

        setLoadingEstimate(true);
        const apiKey = 'arka_public_key';
        const chainID = 31;

        try {
            console.log('Starting useArkaPaymaster function');

            const address = await sdk.getCounterFactualAddress();
            setEtherspotWalletAddress(address);
            console.log('EtherspotWallet address:', address);

            await sdk.clearUserOpsFromBatch();
            console.log('Cleared user operations from batch');

            await sdk.addUserOpsToBatch({ to: recipient, value: parseEther(value) });
            console.log('Transaction batch added with recipient:', recipient, 'and value:', value);

            const op = await sdk.estimate({
                paymasterDetails: { url: `https://arka.etherspot.io?apiKey=${apiKey}&chainId=${chainID}`, context: { mode: 'sponsor' } }
            });
            console.log('Estimated UserOp:', op);

            // Calculate the total estimated gas
            const callGasLimit = BigNumber.from(op.callGasLimit);
            const preVerificationGas = BigNumber.from(op.preVerificationGas);
            const verificationGasLimit = BigNumber.from(op.verificationGasLimit);
            const totalEstimatedGas = callGasLimit.add(preVerificationGas).add(verificationGasLimit);
            console.log(`Total estimated gas: ${totalEstimatedGas.toString()}`);
            setEstimatedGas(totalEstimatedGas.toString());

            toast({
                title: "Success",
                description: `Estimated gas: ${totalEstimatedGas.toString()}`,
            });
        } catch (error) {
            console.error('Error using Arka Paymaster:', error);
            toast({
                title: "Error",
                description: "Failed to estimate transaction cost.",
            });
        } finally {
            setLoadingEstimate(false);
        }
    };

    const sendTx = async () => {
        setLoadingSendTx(true);
        try {
            // Add transaction sending logic here
            toast({
                title: "Transaction Sent",
                description: "Your transaction has been sent.",
            });
        } catch (error) {
            console.error('Error sending transaction:', error);
            toast({
                title: "Error",
                description: "Failed to send transaction.",
            });
        } finally {
            setLoadingSendTx(false);
        }
    };

    useEffect(() => {
        if (eoaPrivateKey) {
            const bundlerApiKey =
                "eyJvcmciOiI2NTIzZjY5MzUwOTBmNzAwMDFiYjJkZWIiLCJpZCI6IjMxMDZiOGY2NTRhZTRhZTM4MGVjYjJiN2Q2NDMzMjM4IiwiaCI6Im11cm11cjEyOCJ9";
            const customBundlerUrl = "https://rootstocktestnet-bundler.etherspot.io/";

            const primeSdk = new PrimeSdk(
                { privateKey: eoaPrivateKey },
                {
                    chainId: 31,
                    bundlerProvider: new EtherspotBundler(
                        31,
                        bundlerApiKey,
                        customBundlerUrl
                    ),
                }
            );

            setSdk(primeSdk);
        }
    }, [eoaPrivateKey]);

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold">
                    Account Abstraction
                </CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">
                    Empower your users to seamlessly interact with your decentralized
                    application without the hassle of managing private keys.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-fuchsia-500 grid place-items-center">
                        01
                    </span>
                    <p>Generate a random wallet</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Button
                        className="justify-self-center"
                        onClick={generateRandomEOA}
                        disabled={loadingEOA}
                    >
                        {loadingEOA ? <Loader /> : "Generate"}
                    </Button>
                    {eoaWalletAddress && (
                        <p className="mt-3 opacity-60 flex gap-3">
                            Wallet: {formatAddress(eoaWalletAddress)}{" "}
                            <button onClick={() => copy(eoaWalletAddress, setCopiedEOA)}>
                                {copiedEOA ? <Check /> : <Copy />}
                            </button>
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-fuchsia-500 grid place-items-center">
                        02
                    </span>
                    <p>Generate the paymaster address</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Button
                        className="justify-self-center"
                        onClick={generateEtherspotWallet}
                        disabled={loadingEtherspotWallet}
                    >
                        {loadingEtherspotWallet ? <Loader /> : "Generate"}
                    </Button>
                    {etherspotWalletAddress && (
                        <p className="mt-3 opacity-60 flex gap-3">
                            Wallet: {formatAddress(etherspotWalletAddress)}{" "}
                            <button onClick={() => copy(etherspotWalletAddress, setCopiedEtherspot)}>
                                {copiedEtherspot ? <Check /> : <Copy />}
                            </button>
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-blue-500 grid place-items-center">
                        03
                    </span>
                    <p>Get Account Balance</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Button
                        className="justify-self-center"
                        onClick={getBalance}
                        disabled={loadingBalance || !etherspotWalletAddress}
                    >
                        {loadingBalance ? <Loader /> : "Get Balance"}
                    </Button>
                    {balance && (
                        <p className="mt-3 opacity-60 flex gap-3">
                            Balance: ${balance} rBTC
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-orange-500 grid place-items-center">
                        04
                    </span>
                    <p>Estimate the transaction cost:</p>
                </div>
                <div className="flex flex-col justify-center">
                    <input
                        type="text"
                        className="input mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Recipient Address"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Value (in ETH)"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button
                        className="justify-self-center"
                        onClick={estimateCost}
                        disabled={loadingEstimate || !etherspotWalletAddress}
                    >
                        {loadingEstimate ? <Loader /> : "Estimate"}
                    </Button>
                    {estimatedGas && (
                        <p className="mt-3 opacity-60">
                            Estimated Gas: {estimatedGas}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-green-500 grid place-items-center">
                        05
                    </span>
                    <p>Send the transaction</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Button
                        className="justify-self-center"
                        onClick={sendTx}
                        disabled={loadingSendTx || !etherspotWalletAddress}
                    >
                        {loadingSendTx ? <Loader /> : "Send"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
