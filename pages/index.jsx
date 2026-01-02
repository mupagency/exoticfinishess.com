import { SimpleLayout } from "components/layouts/main";
import VideoSection from "components/sections/video";
import WallGraphics from "components/shared/wall-graphics";
import WindowGraphics from "components/shared/window-graphics";
import DecalsStickers from "components/shared/decals-stickers";

const HomePage = () => {
  return (
    <SimpleLayout>
      <VideoSection />
      <WallGraphics />
      <WindowGraphics />
      <DecalsStickers />
    </SimpleLayout>
  );
};

export default HomePage;
