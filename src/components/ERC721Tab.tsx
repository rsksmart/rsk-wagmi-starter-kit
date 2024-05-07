import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ERC721Tab(): JSX.Element {
  return (
    <Card className="mt-10 max-w-[600px]">
      <CardHeader>
        <p className="text-white/80 mb-4">Mint your own unique ERC-721 NFT.</p>
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
            <label className="block font-medium" htmlFor="name">
              NFT Name
            </label>
            <Input id="name" placeholder="Enter the NFT name" type="text" />
          </div>
          <div className="space-y-2">
            <label className="block font-medium" htmlFor="description">
              NFT Description
            </label>
            <Textarea
              id="description"
              placeholder="Enter the NFT description"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-medium" htmlFor="image">
              NFT Image
            </label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              className="cursor-pointer"
            />
          </div>
          <Button className="w-full" type="submit">
            Mint NFT
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
