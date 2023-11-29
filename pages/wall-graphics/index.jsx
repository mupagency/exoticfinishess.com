import { SimpleLayout } from "components/layouts/main";
import WallGraphics from "components/shared/wall-graphics";

const WallGraphicsPage = () => {
  return (
    <SimpleLayout>
      <WallGraphics fullHeight={true} />
    </SimpleLayout>
  );
};

export default WallGraphicsPage;
