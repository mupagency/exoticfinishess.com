import GraphicLayout from "components/layouts/graphics";
import Product from "components/shared/product";

const StickerManufacturerPage = () => {
  return (
    <GraphicLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Sticker Manufacturer</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                As many as you need, we are able to print stickers from any artwork, picture or logo. Fast turn around
                times and high quality vinyl. Waterproof, UV resistant and don&apos;t fade!
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <img
              src="/images/content/stickers-manufacturer-decals-3m.jpg"
              alt="Stickers in silver using 3m vinyl. Decals in different designs"
            />
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/stickers-manufacturer-decals.jpg"
              alt="Stickers in silver using 3m vinyl. Decals in different designs"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </GraphicLayout>
  );
};

export default StickerManufacturerPage;
