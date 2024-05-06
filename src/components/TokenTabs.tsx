import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TokenTabs(): JSX.Element {
  return (
    <section className=" grid place-items-center py-[100px]" id="tabs">
      <Tabs
        defaultValue="20"
        className=" flex flex-col justify-center items-center"
      >
        <TabsList>
          <TabsTrigger value="20">ERC-20</TabsTrigger>
          <TabsTrigger value="721">ERC-721</TabsTrigger>
          <TabsTrigger value="1155">ERC-1155</TabsTrigger>
        </TabsList>
        <TabsContent value="20">Make changes to your account here.</TabsContent>
        <TabsContent value="721">Change your password here.</TabsContent>
        <TabsContent value="1155">como es</TabsContent>
      </Tabs>
    </section>
  );
}
