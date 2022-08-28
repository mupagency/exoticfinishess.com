import GraphicLayout from "components/layouts/graphics";
import Product from "components/shared/product";

const SolarWindowFilmPage = () => {
  return (
    <GraphicLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title> Solar Window Film</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                If you&apos;re ready to take control of temperatures in your home or office and add next-level privacy
                with UV protection, look no further than VISION Solar Window Film or mostly known as window tint.{" "}
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Clear view</Product.Subtitle>
            <Product.Parragraph>Includes: Clear View Ceramic, Clear View Alloy, And Clear View Plus</Product.Parragraph>
            <Product.Parragraph>
              CLEAR VIEW films are designed to filter in visible light while cutting Infrared heat and UV rays. These
              features optimize visibility from both sides of the glass.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/xpel-vision-clear-view-plus-thumb.jpg"
              alt="Xpel vision clear view plus solar window film installed in a house. Window tint with maximum technology to keep the heat away"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </GraphicLayout>
  );
};

export default SolarWindowFilmPage;
