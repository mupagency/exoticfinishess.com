import GraphicLayout from "components/layouts/graphics";
import Product from "components/shared/product";

const StickerManufacturerPage = () => {
  return (
    <GraphicLayout>
       <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Sticker <br /> Manufacturer
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
               As many as you need, we are able to print stickers from any artwork,
               picture or logo. Fast turn around times and high quality vinyl. Waterproof, STICKER UV resistant and don’t fade
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <img
              src="/images/content/stickers-manufacturer-decals-3m.jpg"
              alt="Window frost privacy film installed on windows in an office space"
            />
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/stickers-manufacturer-decals.jpg"
              alt="Partial window frost privacy film installed on glass for office with custom design"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </GraphicLayout>
  );
};

export default StickerManufacturerPage;
