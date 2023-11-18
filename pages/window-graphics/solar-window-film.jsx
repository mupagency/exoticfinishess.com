import { CompactLayout } from "components/layouts/main";
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

const SolarWindowFilmPage = () => {
  return (
    <CompactLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Solar <br /> Window Film
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                If you&apos;re ready to take control of temperatures in your home or office and add next-level privacy
                with UV protection, look no further than VISION Solar Window Film or mostly known as window tint.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>
              Experience the perfect balance of natural light and privacy as our solar window films allow ample daylight
              to filter through while keeping prying eyes at bay. With a variety of shades and styles to choose from,
              you can find the ideal match to complement your interior decor.
            </Product.Parragraph>
            <Product.Parragraph>
              Upgrade your windows with our state-of-the-art solar window films and enjoy the benefits of a more
              comfortable, energy-efficient, and environmentally friendly space. Discover the future of window
              technology with our exceptional solar window films!
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </CompactLayout>
  );
};

export default SolarWindowFilmPage;
