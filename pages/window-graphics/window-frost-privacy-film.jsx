import { CompactLayout } from "components/layouts/main";
import Product from "components/shared/product";

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
    </CompactLayout>
  );
};

export default WindowFrostPrivacyFilmPage;
