import GraphicLayout from "components/layouts/graphics";
import Product from "components/shared/product";

const CommercialVehicleWrapsPage = () => {
  return (
    <GraphicLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Commercial Vehicle Wraps</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Vinyl can be applied to walls or windows to improve your brand visibility, for that reason we use 3M
                vinyl for the highest quality and can last long periods of time.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <div className="mb-8 mt-8">
          <img
            src="/images/content/commercial-car-wrap-design-mercedes-benz-van.jpg"
            alt="Commercial car wrap for Zurikate using 3m IJ180 vinyl and custom design"
          />
        </div>
        <div className="mb-12">
          <img
            src="/images/content/commercial-car-wraps-trailer-3m-vinyl.jpg"
            alt="Commercial car wrap for trailer with custom design and installed with 3m vinyl"
          />
        </div>
      </div>
    </GraphicLayout>
  );
};

export default CommercialVehicleWrapsPage;
