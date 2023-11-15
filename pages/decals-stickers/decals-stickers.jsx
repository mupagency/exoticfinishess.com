import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

const DecalsStickersPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              DECALS / <br /> STICKERS
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Explore our vibrant collection of stickers and decals that add flair and personality to your belongings,
                both big and small. As many as you need, we are able to print stickers from any artwork, picture or
                logo. Fast turn around times and high quality vinyl.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Crafted with care and precision, our stickers and decals are not only visually stunning but also durable
              and weather-resistant. They are designed to withstand the test of time, ensuring that your chosen designs
              remain vivid and vibrant.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/wall-graphics-3m-vinyl.jpg"
              alt="Wall graphics with necklace and rings design using 3m vinyl and professionally installed"
              className="max-w-full"
              loading="lazy"
              width="732"
              height="976"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default DecalsStickersPage;
