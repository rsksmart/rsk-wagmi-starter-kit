import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ERC1155Tab(): JSX.Element {
  return (
    <Card className="mt-10 max-w-[600px]">
      <CardHeader>
        <p className="text-white/80 mb-4">
          Transfer ERC-1155 tokens to another wallet.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
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
            <p>Enter the NFT metadata and the claim your NFT</p>
          </div>
          <div className="space-y-2">
            <label className="block font-medium" htmlFor="tokenId">
              Token ID
            </label>
            <Input id="tokenId" placeholder="Enter the token ID" type="text" />
          </div>
          <div className="space-y-2">
            <label className="block font-medium" htmlFor="amount">
              Amount
            </label>
            <Input id="amount" placeholder="Enter the amount" type="number" />
          </div>
          <div className="space-y-2">
            <label className="block font-medium" htmlFor="recipient">
              Recipient Address
            </label>
            <Input
              id="recipient"
              placeholder="Enter the recipient address"
              type="text"
            />
          </div>
          <Button className="w-full" type="submit">
            Transfer Tokens
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
