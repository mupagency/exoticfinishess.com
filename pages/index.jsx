import { SimpleLayout } from "components/layouts/main";
import IntroSection from "components/sections/intro";
import WallGraphics from "components/shared/wall-graphics";
import WindowGraphics from "components/shared/window-graphics";
import DecalsStickers from "components/shared/decals-stickers";

const HomePage = () => {
  return (
    <SimpleLayout>
      <IntroSection />
      <WallGraphics />
      <WindowGraphics />
      <DecalsStickers />
    </SimpleLayout>
  );
};

export default HomePage;
