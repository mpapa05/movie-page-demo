import Image from "next/image";
import WelcomeBanner from "./components/welcome-banner/welcome-banner";
import Carousel from "./components/carousel/carousel";

export default function Home() {
  return (
    <div>
      <WelcomeBanner />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}
