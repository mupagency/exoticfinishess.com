import { GraphicLayoutCompact } from "components/layouts/graphics";
import Product from "components/shared/product";

const WindowWallGraphicsPage = () => {
  return (
    <GraphicLayoutCompact>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Window <br /> & Wall <br /> graphics
            </Product.Title>
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
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Wall graphics</Product.Subtitle>
            <Product.Parragraph>
              Bring life to any room or office with our custom wall decals and graphics. Vinyl can be applied to walls
              with any texture like, concrete, Sheetrock, wood, aluminum ect. We use 3M vinyl for the highest quality
              and can last long periods of time.
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
        <Product.Grid>
          <Product.GridItemImg>
            <img
              src="/images/content/large-format-printing-mural-3m.jpg"
              alt="Large format printing in Miami Design District for murals with 3m high quality vinyl for advertising"
              className="max-w-full"
              loading="lazy"
              width="732"
              height="976"
            />
          </Product.GridItemImg>
          <Product.GridItem>
            <Product.Subtitle>Large format printing</Product.Subtitle>
            <Product.Parragraph>
              Have a large space that needs advertising? We design, print and install Murals, Banners, Posters,
              Wallpapers and Billboards. Large format printing takes visual communication to a new level, amplifying a
              message in ways that were previously unthinkable. Large format printing is a smart way to invest your
              marketing budget.
            </Product.Parragraph>
            <Product.Parragraph>
              Digital printing is extremely cost-effective and in many cases you can take advantage of surfaces you
              already have, such as walls or windows.
            </Product.Parragraph>
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>Window graphics</Product.Subtitle>
            <Product.Parragraph>
              From logos to grand openings, window graphics personalize your space to meet your goals and objectives.
              Increase brand awareness with branded masterpieces.
            </Product.Parragraph>
            <Product.Parragraph>
              We offer in house design, print and installation and service all United States. We use the best of vinyl
              graphics with our exotic laminations between glossy, matte, sparkle, textures and more.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/window-graphics-large-format-printing-3m.jpg"
              alt="Large format printing for store front with 3m vinyl graphics. Any design can be printed and installed on windows and walls"
              loading="lazy"
              className="max-w-full"
              width="733"
              height="550"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </GraphicLayoutCompact>
  );
};

export default WindowWallGraphicsPage;
