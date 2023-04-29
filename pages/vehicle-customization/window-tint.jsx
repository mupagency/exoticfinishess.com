import VehicleLayout from "components/layouts/vehicle";
import Product from "components/shared/product";

const WindowTintPage = () => {
  return (
    <VehicleLayout>
<div className="container">
        <Product.Head>
          <div>
            <Product.Title> SOLAR <br /> WINDOW FILM</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
              If you&#39re ready to take control of temperatures in your home or office and
              add next-level privacy with UV protection, look no further than VISION Solar
              Window Film or mostly known as window tint
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Clear View</Product.Subtitle>
            <Product.Parragraph>
            <p>
            Includes: Clear View Ceramic, Clear View Alloy, And Clear View Plus
            </p>
            <Product.Subtitle>Clear View</Product.Subtitle>
            <p>
            films are designed to filter in visible light while cutting Infrared
            heat and UV rays. These features optimize visibility from both sides of the glass.
            </p>
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
    </VehicleLayout>
  );
};

export default WindowTintPage;
