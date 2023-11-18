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
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default PerforatedWindowGraphicsPage;
