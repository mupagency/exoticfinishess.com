import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

import Gallery from "components/shared/gallery";

const GalleryData = [
  {
    url: "/images/content/custom-graphics-slide-01.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
  {
    url: "/images/content/custom-graphics-slide-02.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
  {
    url: "/images/content/custom-graphics-slide-03.jpg",
    alt: "",
    width: 412,
    height: 550,
  },
  {
    url: "/images/content/custom-graphics-slide-04.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
];

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
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default DecalsStickersPage;
