import VehicleLayout from "components/layouts/vehicle";
import Product from "components/shared/product";

const WindowTintPage = () => {
  return (
    <VehicleLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Window <br /> Tint
              <span className="inline-block align-middle">
                <img src="/images/xpel.png" alt="ExoticFinishes Xpel" width="103" height="27" />
              </span>
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <Product.Subtitle>NANO-CERAMIC WINDOW TINT</Product.Subtitle>
              <p>
                If you&apos;re looking for maximum performance & protection from your window tint, look no further than
                nano-ceramic window film like PRIME XR PLUS. Ceramic tint is designed to block out the most infrared
                heat possible, while reflecting harmful UV rays to keep you safe. No matter the shade, ceramic window
                tint delivers results you expect
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <div className="mb-8 product-media">
          <img
            src="/images/content/nano-ceramic-window-tint-xpel.jpg"
            alt="Window tint for a 2022 Tesla Model Y with XR plus nano-ceramic film"
          />
        </div>
        <h2 className="font-acuminpro text-3xl uppercase text-center mb-12 px-4">We Carry:</h2>
        <div className="mb-20 product-media">
          <img src="/images/content/prime-xr.png" alt="Prime XR automotive window film" className="mx-auto" />
        </div>
            <Link href="/visual-graphics/window-frost-privacy-film/">
          <a>
            <Item title="Window Frost Privacy Film">
              <picture>
                <source srcSet="/images/navigation/mobile/window-frost-privacy-film.jpg" media="(max-width: 768px)" />
                <img
                  src="/images/navigation/window-frost-privacy-film.jpg"
                  alt="Partial window frost privacy film installed on glass for office with custom design"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>

      </div>
    </VehicleLayout>
  );
};

export default WindowTintPage;
