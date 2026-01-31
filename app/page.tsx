import AboutUs from "@/components/sections/aboutparllax";
import HeroOg from "@/components/sections/heroog";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroOg />
      <AboutUs />
    </div>
  );
}
