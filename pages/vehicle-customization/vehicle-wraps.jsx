import VehicleLayout from "components/layouts/vehicle";
import Product from "components/shared/product";

const VehicleWrapsPage = () => {
  return (
    <VehicleLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Vehicle <br /> Wraps
              <span className="inline-block align-middle pl-4">
                <img src="/images/3m.png" alt="ExoticFinishes 3M" width="64" height="34" />
              </span>
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Change the look of your vehicle with vinyl. We can do anything from chrome delete to full wrap in any
                color you desire. We offer personalized designs to bring your dream car to live.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Color change 3M</Product.Subtitle>
            <Product.Parragraph>
              Choose from a bold assortment of colors, patterns and textures to design a vehicle wrap that stands out
              from the crowd.
            </Product.Parragraph>
            <Product.Parragraph>
              100+ colors, available in Gloss, Satin, Matte, Textures, Color Flip and Chrome finishes.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/color-change-3m-mercedes-benz-gwagon.jpg"
              alt="Full wrap color change for Mercedes Benz G wagon with 3m matte black vinyl"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItemImg>
            <img
              src="/images/content/blackout-package-3m-bmw-x6.jpg"
              alt="Chrome delete on a BMW X6 with 3m gloss black vinyl. Black out package covers chrome details on vehicles"
              className="max-w-full"
            />
          </Product.GridItemImg>
          <Product.GridItem>
            <Product.Subtitle>Black out package 3M</Product.Subtitle>
            <Product.Parragraph>
              Don&apos;t like the chrome trim on your car? We have a solution with matte or gloss black vinyl to create
              that sporty look you are looking for.
            </Product.Parragraph>
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Custom stripes 3M</Product.Subtitle>
            <Product.Parragraph>
              Personalize designs for Racing stripes or decals for your vehicle are available in Exotic finishess.
            </Product.Parragraph>
            <div className="mb-8"></div>
            <Product.Subtitle>Personalize wrap design 3M</Product.Subtitle>
            <Product.Parragraph>
              We can create amazing custom designs to make your vehicle unique. Take your vehicle to the next level with
              3M personalize designs!
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/trailer-wrap-custom-design-stripes-3m-vinyl.jpg"
              alt="Full wrap for trailer using 3m 2080 gloss white vinyl. Custom decals and logos in reflective vinyl. Racing flags die cut in 3m gloss black"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </VehicleLayout>
  );
};

export default VehicleWrapsPage;
