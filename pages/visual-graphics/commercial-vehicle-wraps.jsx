import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

const CommercialVehicleWrapsPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Commercial Vehicle Wraps</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Vehicle marketing solution for your business. To ensure quality and accuracy we design, print, install
                and remove. We do graphics for cars, vans, trucks, SUVs, boats, and planes. Fleet vehicle wraps increase
                advertising opportunity, promote brand consistency, and lend legitimacy to a business.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <div className="mb-8 mt-8 product-media">
          <img
            src="/images/content/commercial-car-wrap-design-mercedes-benz-van.jpg"
            alt="Commercial car wrap for Zurikate using 3m IJ180 vinyl and custom design"
          />
        </div>
        <div className="mb-12 product-media">
          <img
            src="/images/content/commercial-car-wraps-trailer-3m-vinyl.jpg"
            alt="Commercial car wrap for trailer with custom design and installed with 3m vinyl"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default CommercialVehicleWrapsPage;
