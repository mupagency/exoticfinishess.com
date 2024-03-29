import VehicleLayout from "components/layouts/vehicle";
import Product from "components/shared/product";

const PaintProtectionFilmPage = () => {
  return (
    <VehicleLayout>
     <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Window Frost <br /> Privacy Film
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Increase the privacy of your home or business with window frost. This film creates a classic frosted
                design to your space without blocking light. Use it on standard windows to keep others from seeing
                inside your home or add accents to your windows. It&apos;s an easy way to provide accents and define
                unique spaces.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <img
              src="/images/content/window-frost-privacy-film.jpg"
              alt="Window frost privacy film installed on windows in an office space"
            />
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/partial-window-frost-privacy-film.jpg"
              alt="Partial window frost privacy film installed on glass for office with custom design"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </VehicleLayout>
  );
};

export default PaintProtectionFilmPage;
