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
                Make a bold statement and reinforce your brand message with our eye-catching wall graphics. Whether
                it&apos;s your company logo, mission statement, or product images, our designs are tailored to showcase
                your brand in the most compelling way.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Our high-quality wall graphics are not only visually striking but also durable and long-lasting. With easy
              application and removal, you can update your branding effortlessly, keeping your space fresh and relevant.
            </Product.Parragraph>
            <Product.Parragraph>
              Explore the power of branding through our custom wall graphics and elevate your business to new heights.
              Let your walls do the talking and captivate your audience with our exceptional wall graphics branding
              solutions!
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
