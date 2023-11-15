import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

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

export default DecorPage;
