import GraphicLayout from "components/layouts/graphics";
import Product from "components/shared/product";

const SolarWindowFilmPage = () => {
  return (
    <GraphicLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Wall <br /> Graphics

            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                Vinyl can be applied to walls or windows to improve your brand visibility, for that reason we use 3M vinyl for the highest quality and can last long periods of time.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Wall Graphics</Product.Subtitle>
            <Product.Parragraph>
              Bring life to any room or office with our custom wall decals and graphics. Vinyl can be applied to walls with any texture like, concrete, Sheetrock, wood, aluminum ect. We use 3M vinyl for the highest quality and can last long periods of time.
            </Product.Parragraph>
            <div className="mb-8"></div>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/wall-graphics-3m-vinyl.jpg"
              alt="2022 BMW 240i with XPEL stealth paint protection film. Black out wheels from Zurikate"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItemImg>
            <img
              src="/images/content/large-format-printing-mural-3m.jpg"
              alt="Process of ultimate fusion XPEL in gloss paint protection film being installed on a 2022 Ford F250 Harley Davidson"
              className="max-w-full"
            />
          </Product.GridItemImg>
          <Product.GridItem>
            <Product.Subtitle>LARGE FORMAT PRINTING </Product.Subtitle>
            <Product.Parragraph>
              Have a large space that needs advertising? We design, print and install Murals, Banners, Posters, Wallpapers and Billboards. 
              Large format printing takes visual communication to a new level, amplifying a message in ways that were previously unthinkable. 
              Large format printing is a smart way to invest your marketing budget.
            </Product.Parragraph>
            <Product.Parragraph>Digital printing is extremely cost-effective and in many cases you can take advantage of surfaces you already have, 
            such as walls or windows.
            </Product.Parragraph>
          </Product.GridItem>
        </Product.Grid>
        <div className="mb-8 product-media">
        </div>

      </div>
    </GraphicLayout>
  );
};

export default SolarWindowFilmPage;
