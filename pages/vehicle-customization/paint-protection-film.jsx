import VehicleLayout from "components/layouts/vehicle";
import Product from "components/shared/product";

const PaintProtectionFilmPage = () => {
  return (
    <VehicleLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>
              Paint Protection Film
              <span className="inline-block align-middle">
                <img src="/images/xpel.png" alt="ExoticFinishes Xpel" width="103" height="27" />
              </span>
            </Product.Title>
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
            <Product.Subtitle>Self-Healing</Product.Subtitle>
            <Product.Parragraph>
              When exposed to heat, the enhanced clear coat properties eliminate fine scratches and swirl marks over
              time.
            </Product.Parragraph>
            <div className="mb-8"></div>
            <Product.Subtitle>Sleek Satin Finish</Product.Subtitle>
            <Product.Parragraph>
              With an unique satin finish, STEALTH helps match most factory flat paint jobs and virtually disappears on
              most surfaces. With a finish that&apos;s uniformly smooth, you can add STEALTH to your matte or gloss
              paint job for a unique satin finish.
            </Product.Parragraph>
            <div className="mb-8"></div>
            <Product.Subtitle>Easy Maintenance</Product.Subtitle>
            <Product.Parragraph>
              Flat finishes are notoriously difficult to maintain and even harder to repair. STEALTH enables you to
              easily wash and dry your car without damaging its sheen.
            </Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/stealth-ppf-xpel-bmw-m240i.jpg"
              alt="2022 BMW 240i with XPEL stealth paint protection film. Black out wheels from Zurikate"
              className="max-w-full"
            />
          </Product.GridItem>
        </Product.Grid>
        <Product.Grid>
          <Product.GridItemImg>
            <img
              src="/images/content/paint-protection-film-ultimate-fusion-gloss-with-ceramic-xpel.jpg"
              alt="Process of ultimate fusion XPEL in gloss paint protection film being installed on a 2022 Ford F250 Harley Davidson"
              className="max-w-full"
            />
          </Product.GridItemImg>
          <Product.GridItem>
            <Product.Subtitle>Next level dual-purpose protection</Product.Subtitle>
            <Product.Parragraph>
              ULTIMATE FUSION is an optically clear, high gloss, self-healing film that protects vehicles from rock
              chips, scuffs, and light scratches. Developed with a hydrophobic top-coat, the film&apos;s naturally slick
              surface helps repel water, making protected surfaces easier to wash and stay clean.
            </Product.Parragraph>
            <Product.Parragraph>Hydrophobic Properties: Repels water, dirt, and road grime.</Product.Parragraph>
            <Product.Parragraph>
              Provides Protection From The Elements: Formulated to protect against damaging oxidation, insect acids,
              corrosion, and contaminants.
            </Product.Parragraph>
            <Product.Parragraph>
              Improves Surface Clarity: Increases color depth, leaving PPF with a smooth and slick finish.
            </Product.Parragraph>
          </Product.GridItem>
        </Product.Grid>
        <div className="mb-8 product-media">
          <img
            src="/images/content/lamborghini-paint-protection-film-ultimate-fusion-gloss-with-ceramic-xpel.jpg"
            alt="Lamborghini with XPEL ultimate fusion plus in gloss with ceramic paint protection film"
          />
        </div>
        <h2 className="font-acuminpro text-3xl uppercase text-center mb-8 px-4">
          PPF XPEL SMOKED HEAD LIGHT
        </h2>
        <Product.Grid>
          <Product.GridItem>
            <img
              src="/images/content/ppf-xpel-smoked-head-lights-tesla-y-1.jpg"
              alt="Process of XPEL XR plus on headlights for 2022 Tesla Model Y"
            />
          </Product.GridItem>
          <Product.GridItem>
            <img
              src="/images/content/ppf-xpel-smoked-head-lights-tesla-y-2.jpg"
              alt="Smoked headlights with XPEL XR plus on 2022 Tesla Model Y. Stealth paint protection film xpel"
            />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </VehicleLayout>
  );
};

export default PaintProtectionFilmPage;
