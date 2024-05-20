// import {
//   CardTitle,
//   CardDescription,
//   CardHeader,
//   CardContent,
//   Card,
// } from "@/components/ui/card";
// import Button from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import Loader from "@/components/ui/loader";
// // import { PrimeSdk, EtherspotBundler } from "@etherspot/prime-sdk";
// import { formatAddress } from "@/lib/utils";
// import { Check, Copy } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
// import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

export default function Demo() {
  // const [sdk, setSdk] = useState<PrimeSdk | null>(null);
  // const { toast } = useToast();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [eoaWalletAddress, setEoaWalletAddress] = useState("");
  // const [etherspotWalletAddress, setEtherspotWalletAddress] = useState("");
  // const [copied, setCopied] = useState<boolean>(false);
  // const [eoaPrivateKey, setEoaPrivateKey] = useState("");

  // // const generatePaymaster = async () => {
  // //   if (!sdk) return;
  // //   setLoading(true);

  // //   try {
  // //     const address = await sdk.getCounterFactualAddress();
  // //     setEtherspotWalletAddress(address);
  // //     console.log("EtherspotWallet address:", address);
  // //   } catch (error) {
  // //     console.error("Error generating Etherspot Wallet:", error);
  // //   } finally {
  // //     setLoading(false);
  // //   }
  // // };

  // const copy = (address: string) => {
  //   navigator.clipboard.writeText(address);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 3000);
  // };

  // const estimateCost = () => {
  //   toast({
  //     title: "Estimate cost",
  //     description: "Estimate cost",
  //   });
  // };

  // const sendTx = () => {
  //   toast({
  //     title: "Send transaction",
  //     description: "Send transaction",
  //   });
  // };

  // const generateRandomEOA = async () => {
  //   const pk = generatePrivateKey();
  //   const account = privateKeyToAccount(pk);
  //   setEoaWalletAddress(account.address);
  //   setEoaPrivateKey(pk);
  // };

  // useEffect(() => {
  //   if (eoaPrivateKey) {
  //     const bundlerApiKey =
  //       "eyJvcmciOiI2NTIzZjY5MzUwOTBmNzAwMDFiYjJkZWIiLCJpZCI6IjMxMDZiOGY2NTRhZTRhZTM4MGVjYjJiN2Q2NDMzMjM4IiwiaCI6Im11cm11cjEyOCJ9";
  //     const customBundlerUrl = "https://rootstocktestnet-bundler.etherspot.io/";

  //     // const primeSdk = new PrimeSdk(
  //     //   { privateKey: eoaPrivateKey },
  //     //   {
  //     //     chainId: 31,
  //     //     bundlerProvider: new EtherspotBundler(
  //     //       31,
  //     //       bundlerApiKey,
  //     //       customBundlerUrl
  //     //     ),
  //     //   }
  //     // );

  //     // setSdk(primeSdk);
  //   }
  // }, [eoaPrivateKey]);

  return (
    <h1>Demo</h1>
    // <Card className="w-full max-w-md mx-auto">
    //   <CardHeader className="space-y-2">
    //     <CardTitle className="text-2xl font-bold">
    //       Account Abstraction
    //     </CardTitle>
    //     <CardDescription className="text-gray-500 dark:text-gray-400">
    //       Empower your users to seamlessly interact with your decentralized
    //       application without the hassle of managing private keys.
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent className="space-y-4">
    //     <div className="flex items-center gap-4">
    //       <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-fuchsia-500 grid place-items-center">
    //         01
    //       </span>
    //       <p>Generate a random wallet</p>
    //     </div>
    //     <div className="flex flex-col justify-center">
    //       <Button
    //         className="justify-self-center"
    //         onClick={generateRandomEOA}
    //         disabled={loading}
    //       >
    //         {loading ? <Loader /> : "Generate"}
    //       </Button>
    //       {eoaWalletAddress && (
    //         <p className="mt-3 opacity-60 flex gap-3">
    //           Wallet: {formatAddress(eoaWalletAddress)}{" "}
    //           <button onClick={() => copy(eoaWalletAddress)}>
    //             {copied ? <Check /> : <Copy />}
    //           </button>
    //         </p>
    //       )}
    //     </div>
    //     <div className="flex items-center gap-4">
    //       <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-fuchsia-500 grid place-items-center">
    //         02
    //       </span>
    //       <p>Generate the paymaster address</p>
    //     </div>
    //     <div className="flex flex-col justify-center">
    //       <Button
    //         className="justify-self-center"
    //         // onClick={}
    //         disabled={loading}
    //       >
    //         {loading ? <Loader /> : "Generate"}
    //       </Button>
    //       {etherspotWalletAddress && (
    //         <p className="mt-3 opacity-60 flex gap-3">
    //           Wallet: {formatAddress(etherspotWalletAddress)}{" "}
    //           <button onClick={() => copy(etherspotWalletAddress)}>
    //             {copied ? <Check /> : <Copy />}
    //           </button>
    //         </p>
    //       )}
    //     </div>
    //     <div className="flex items-center gap-4">
    //       <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-orange-500 grid place-items-center">
    //         03
    //       </span>
    //       <p>Estimate the transaction cost:</p>
    //     </div>
    //     <div className="flex flex-col justify-center">
    //       <Button
    //         className="justify-self-center"
    //         onClick={estimateCost}
    //         disabled={loading || !etherspotWalletAddress}
    //       >
    //         {loading ? <Loader /> : "Estimate"}
    //       </Button>
    //       {/* {
    //         TODO: show estimated cost
    //         cost &&
    //         <p className="mt-2 opacity-60">Tx cost:  {cost}</p>
    //       } */}
    //     </div>
    //     <div className="flex items-center gap-4">
    //       <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-green-500 grid place-items-center">
    //         04
    //       </span>
    //       <p>Send the transaction</p>
    //     </div>
    //     <div className="flex flex-col justify-center">
    //       <Button
    //         className="justify-self-center"
    //         onClick={sendTx}
    //         disabled={loading || !etherspotWalletAddress}
    //       >
    //         {loading ? <Loader /> : "Send"}
    //       </Button>
    //     </div>
    //     <div className="bg-secondary p-4 rounded-lg">
    //       <h4 className="text-lg font-medium mb-2">Account Balance</h4>
    //       <div className="flex items-center justify-between">
    //         <span className="text-gray-400">rBTC Tokens</span>
    //         <span className="font-medium">
    //           {etherspotWalletAddress ? (
    //             loading ? (
    //               <Loader />
    //             ) : (
    //               //   TODO: show balance
    //               0
    //             )
    //           ) : (
    //             0
    //           )}
    //         </span>
    //       </div>
    //     </div>
    //   </CardContent>
    // </Card>
  );
}
