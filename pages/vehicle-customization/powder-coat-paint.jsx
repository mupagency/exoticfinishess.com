import VehicleLayout from "components/layouts/vehicle";
import Product from "components/shared/product";

const PowderCoatPaint = () => {
  return (
    <VehicleLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>Powder Coating Painting</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                It is the best protection you can provide to the surfaces of your vehicle, it is a thermoplastic
                transparent film, designed to protect painted surfaces from damage caused by abrasion, corrosion,
                chemicals or minor damage by road stones.
              </p>
              <p>
                Protect your investment from damage such as stones, scratches, friction with another surface, this is
                possible with the installation of Paint Protection Film (PPF).
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Powder coating wheel paint</Product.Subtitle>
            <Product.Parragraph>
              Powder coating is an electrically-bonded powder that when sprayed, sticks to the metal of the wheels via a
              process called &quot;electro-static attraction.&quot; As the atomized paint molecules are
              &quot;misted&quot; onto the wheel, they create a coating that can be baked into the surface via extreme
              heat with a kiln, or oven.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/powder-coating-wheel-paint-mercedes-benz.jpg"
              alt="Powder coat wheels on a Mercedes Benz AMG 53 in gloss black with red calipers"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItemImg>
            <img
              src="/images/content/painted-calipers-mercedes-benz.jpg"
              alt="Calipers painted in gloss red for Mercedes Benz AMG 53"
              className="max-w-full"
            />
          </Product.GridItemImg>
          <Product.GridItem>
            <Product.Subtitle>Painted calipers</Product.Subtitle>
            <Product.Parragraph>
              Stand Out With Painted Calipers. Give Your Vehicle the look of High Performance.
            </Product.Parragraph>
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Emblems blackout</Product.Subtitle>
            <Product.Parragraph>
              Black out your emblems to give your vehicle a sporty look. Primer and paint resistant spry made to last
              years in perfect condition.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/emblems-blackout-tesla-y.jpg"
              alt="Black out matte emblems painted for 2022 Tesla Model Y"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </VehicleLayout>
  );
};

export default PowderCoatPaint;
