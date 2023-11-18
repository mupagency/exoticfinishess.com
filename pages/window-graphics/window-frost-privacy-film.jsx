import { CompactLayout } from "components/layouts/main";
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

const WindowFrostPrivacyFilmPage = () => {
  return (
    <CompactLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Window <br /> Frost <br /> Privacy Film
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Welcome to our window frost collection, where elegance meets privacy in perfect harmony! Our exquisite
                window frost designs are the ideal solution for adding a touch of sophistication to any space while
                ensuring a sense of seclusion.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Transform plain glass surfaces into works of art with our premium-quality window frost film. The delicate
              patterns and frosty textures not only add a touch of beauty but also provide privacy without sacrificing
              natural light. Whether it&apos;s for your home, office, or retail space, our window frost options are
              customizable to suit your unique style and preferences.
            </Product.Parragraph>
            <Product.Parragraph>
              Enhance the ambiance of your surroundings and create a serene atmosphere with our carefully curated
              selection of window frost designs. Unleash your creativity and explore the endless possibilities of
              transforming your windows into a stunning visual experience. Experience the magic of window frost and
              discover the perfect balance between beauty and practicality.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </CompactLayout>
  );
};

export default WindowFrostPrivacyFilmPage;
