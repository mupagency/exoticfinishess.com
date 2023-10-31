import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

const BrandingPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Branding</Product.Title>
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

export default BrandingPage;
