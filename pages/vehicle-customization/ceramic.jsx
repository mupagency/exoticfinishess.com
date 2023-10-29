import MainLayout from "components/layouts/main";
import Product from "components/shared/product";

const CeramicPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Ceramic <br /> Coating
              <span className="inline-block align-middle">
                <img src="/images/xpel.png" alt="ExoticFinishes Xpel" width="103" height="27" />
              </span>
            </Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>
                FUSION PLUS ™ bonds at the molecular level to seal and protect surfaces from environmental contaminants,
                harmful UV rays, and insect acids. FUSION PLUS also provides resistance to light scratches and fading.
                Its hydrophobic properties repel dirt and liquids, making surfaces easier to clean.
              </p>
              <p>
                Developed to perform in a wide variety of surface types, FUSION PLUS Ceramic Coating offers unrivaled
                gloss, superior hydrophobic protection, and improved scratch resistance with a single application.
              </p>
            </Product.Description>
          </div>
        </Product.Head>
        <div className="mb-8 product-media">
          <img
            src="/images/content/ceramic-coating-xpel-fusion-plus-paint-ppf-bmw-thumbnail.jpg"
            alt="Xepl fusion plus ceramic coating being applied with a sponge on stealth paint protection film on a 2022 BMW m240i."
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-12">
          <div className="order-1 product-media">
            <img
              src="/images/content/xpel-fusion-plus-ceramic-coating-plastic-trim-install.jpg"
              alt="Xpel fusion plus ceramic coating application on plastic trim with sponge."
            />
          </div>
          <div className="order-last md:order-1 product-media">
            <img src="/images/content/fusion-ceramic-coating.png" alt="Fusion Ceramic Coating" />
          </div>
          <div className="order-1 product-media">
            <img
              src="/images/content/xpel-fusion-plus-ceramic-coating-wheel-caliper-install.jpg"
              alt="Xpel fusion plus ceramic coating application on wheels and calipers with sponge."
            />
          </div>
          <div className="order-1 product-media">
            <img
              src="/images/content/xpel-fusion-plus-ceramic-coating-paint-ppf-install.jpg"
              alt="Xpel fusion plus ceramic coating application on a car's body paint with sponge."
            />
          </div>
          <div className="order-1 product-media">
            <img
              src="/images/content/xpel-fusion-plus-ceramic-coating-glass-install.jpg"
              alt="Xpel fusion plus ceramic coating application on glass with sponge."
            />
          </div>
          <div className="order-1 product-media">
            <img
              src="/images/content/xpel-fusion-plus-ceramic-coating-interior-install.jpg"
              alt="Xpel fusion plus ceramic coating application on leather seats with microfiber cloth."
            />
          </div>
        </div>
        <Product.Grid>
          <Product.GridItem>
            <Product.Subtitle>PAINT & PPF CERAMIC COATING</Product.Subtitle>
            <Product.Parragraph>
              FUSION PLUS ™ Paint & PPF is a flexible and thin, 9H ceramic coating, purposely developed to perform with
              PPF (paint protection film) and painted surfaces. FUSION PLUS Ceramic Coating offers unrivaled gloss,
              superior hydrophobic protection, and improved scratch resistance with a single layer application.
            </Product.Parragraph>
            <div className="mb-8"></div>
            <Product.Subtitle>WHEEL & CALIPER CERAMIC COATING</Product.Subtitle>
            <Product.Parragraph>
              FUSION PLUS ™ WHEEL & CALIPER is tested and proven to withstand the wear and tear and the constant heat
              that your vehicles wheels and calipers go through on a daily basis. With a protective hydrophobic layer,
              maintaining your wheels and calipers just became easier.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Product.Subtitle>GLASS CERAMIC COATING</Product.Subtitle>
            <Product.Parragraph>
              FUSION PLUS ™ GLASS Ceramic Coating provides a clear protective layer on your glass surface to help keep
              your glass cleaner, clearer and most of all easy to clean. Due to this products hydrophobic properties it
              also helps cleaning and maintaining your glass surfaces.
            </Product.Parragraph>
            <div className="mb-8"></div>
            <Product.Subtitle>UPHOLSTERY CERAMIC COATING</Product.Subtitle>
            <Product.Parragraph>
              FUSION PLUS ™ UPHOLSTERY Ceramic Coating offers superior protection for your fabric seats, carpet, leather
              and vinyl surfaces. Stains will be a thing of the past. FUSION PLUS UPHOLSTERY protects your surfaces
              while retaining the factory feel and natural finish.
            </Product.Parragraph>
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default CeramicPage;
