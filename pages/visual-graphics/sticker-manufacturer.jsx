import GraphicLayout from "components/layouts/graphics";
import Product from "components/shared/product";

const StickerManufacturerPage = () => {
  return (
    <GraphicLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Wall Graphics</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Vinyl can be applied to walls or windows to improve your brand visibility, for that reason we use 3M
                vinyl for the highest quality and can last long periods of time.
              </p>
            </Product.Description>
           <Product.GridItem>
            <img
              src="/images/content/window-graphics-large-format-printing-3m.jpg"
              alt="Large format printing for store front with 3m vinyl graphics. Any design can be printed and installed on windows and walls"
              loading="lazy"
              className="max-w-full"
              width="600"
              height="450"
            />
          </Product.GridItem>

          </div>

        </Product.Head>

        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Wall Graphics</Product.Subtitle>
            <Product.Parragraph>
              Bring life to any room or office with our custom wall decals and graphics. Vinyl
              can be applied to walls with any texture like, concrete, Sheetrock, wood,
              aluminum ect. We use 3M vinyl for the highest quality and can last long periods
              of time
            </Product.Parragraph>
            <Product.Parragraph>
              We offer in house design, print and installation and service all United States. We use the best of vinyl
              graphics with our exotic laminations between glossy, matte, sparkle, textures and more.
            </Product.Parragraph>
          </Product.GridItem>

        </Product.Grid>
      </div>
    </GraphicLayout>
  );
};

export default StickerManufacturerPage;
