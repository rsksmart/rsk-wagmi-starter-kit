import TokenTabs from "@/components/TokenTabs";
import Github from "@/components/icons/Github";
import Button from "@/components/ui/button";

export default function Home() {
  const scrollToTabs = () => {
    const tabsSection = document.getElementById("tabs");
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="mb-[200px] max-w-[1100px] mx-auto">
      <section className="mx-auto flex flex-col items-center justify-center min-h-[90vh]">
        <h1 className="text-[3em] md:text-[4em] lg:text-[7em] flex flex-col gap-5 text-center font-bold font-neueMachinaBold text-balance md:leading-[auto] lg:leading-tight text-black">
          <span className="bg-orange-400 lg:pt-5 px-2 leading-tight">
            Hackathon's
          </span>{" "}
          <span>
            <span className="bg-fuchsia-500 pt-5 px-2">Starter</span>{" "}
            <span className="bg-fuchsia-500 pt-5 px-2">Kits</span>
          </span>
        </h1>
        <p className="text-[1.5em] md:text-[2em] text-center font-bold">
          An introduction for building smart contracts on Bitcoin
        </p>
        <div className="flex gap-5">
          <Button className="mt-10 mx-auto flex gap-2">
            <Github /> See code
          </Button>
          <Button className="mt-10 mx-auto" onClick={scrollToTabs}>
            Try out
          </Button>
        </div>
      </section>

      <TokenTabs />
    </main>
  );
}
