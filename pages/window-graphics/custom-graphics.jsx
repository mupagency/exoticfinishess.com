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

const CustomGraphicsPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Custom <br /> Graphics
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Vinyl can be applied to windows to improve your brand visibility, for that reason we use 3M vinyl for
                the highest quality and can last long periods of time.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Welcome to our website, where creativity meets self-expression! Explore our collection of custom vinyl
              graphics and add a personal touch to your space or belongings. From eye-catching decals to intricate
              designs, our team of talented artists can bring your ideas to life. Whether it&apos;s for your home,
              office, vehicle, or any other surface, our high-quality vinyl graphics are durable and long-lasting.
              Unleash your imagination and let us help you transform ordinary into extraordinary with our custom vinyl
              graphics!
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

export default CustomGraphicsPage;
