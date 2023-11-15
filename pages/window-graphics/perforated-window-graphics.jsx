import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

const PerforatedWindowGraphicsPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Perforated <br /> Window <br /> Graphics
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Step into a world of captivating possibilities with our perforated window graphics! These innovative and
                versatile designs combine artistry with functionality to create an exceptional visual experience.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Peel back the ordinary and turn your windows into stunning showcases with our premium-quality perforated
              vinyl. Our graphics strike the perfect balance between privacy and allure, allowing you to enjoy an
              unobstructed view from the inside while captivating passersby with a captivating display from the outside.
            </Product.Parragraph>
            <Product.Parragraph>
              Whether it&apos;s for your business, storefront,or even home, our perforated window graphics make a
              lasting impression and provide a seamless branding opportunity. Embrace creativity without compromising on
              practicality - let your windows speak volumes with our exceptional perforated window graphics.
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

export default PerforatedWindowGraphicsPage;
