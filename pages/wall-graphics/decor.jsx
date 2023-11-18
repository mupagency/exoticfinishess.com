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

const DecorPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Decor</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Unleash your creativity and transform any blank wall into a captivating canvas with our diverse
                selection of wall graphics. From nature-inspired landscapes to abstract art, our designs cater to
                various tastes and styles, making it easy to find the perfect match for your space.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Personalize your surroundings and express your unique identity with our customizable options. Create a
              space that tells your story and inspires those who enter. Let your walls become a reflection of your
              creativity and passion with our exceptional wall graphics decor.
            </Product.Parragraph>
            <Product.Parragraph>
              Vinyl can be applied to walls with any texture like, concrete, Sheetrock, wood, aluminum ect.
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

export default DecorPage;
