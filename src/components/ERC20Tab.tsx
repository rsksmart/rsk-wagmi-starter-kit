import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { useState } from "react";
import Loader from "@/components/ui/loader";
import { useAccount } from "wagmi";

export default function ERC20Tab(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const { address } = useAccount();

  const mintTokens = async () => {
    console.log(address);
    setLoading(true);
    try {
      // TODO: mint tokens
    } catch (e) {
      setLoading(false);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-10 max-w-[600px]">
      <CardHeader>
        <p className="text-white/80">
          This is an implementation of a faucet of tRSK tokens (ERC-20 deployed
          on the Rootstock Testnet).
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-center gap-4">
          <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-fuchsia-500 grid place-items-center">
            01
          </span>
          <p>Make sure your wallet is connected.</p>
        </div>
        <div className="flex justify-center">
          <ConnectButton showBalance={false} chainStatus={"icon"} />
        </div>
        <div className="flex items-center gap-4">
          <span className="font-neueMachinaBold px-2 pt-[5px] text-black rounded-full bg-orange-400 grid place-items-center">
            02
          </span>
          <p>
            Press the button for the tRSK tokens to be deposited in your wallet.
          </p>
        </div>
        <div className="text-center z-[-10]">
          <Button disabled={loading} onClick={mintTokens}>
            {loading ? <Loader /> : "Deposit"}
          </Button>
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Your Balance</h4>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">tRSK Tokens</span>
            <span className="font-medium">0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
