import ProductHomeGrid from "@/components/product/product-home-grid";
import Hero from "@/components/sections/heronew";
import ShaderBackground from "@/components/sections/shader-background";
import HeroContent from "@/components/sections/heronew";
import PulsingCircle from "@/components/sections/pulsing-circle";
import FeaturesNew from "@/components/sections/featuresnew";
import AboutUs from "@/components/sections/aboutparllax";

export default function HeroOg() {
  return (
    <div >
      <ShaderBackground>
        <HeroContent />
        <PulsingCircle />
        {/* <FeaturesNew/> */}
      </ShaderBackground>
    </div>
  );
}
