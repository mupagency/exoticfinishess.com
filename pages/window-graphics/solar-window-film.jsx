import { CompactLayout } from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

const GalleryData = [
  {
    url: "/images/content/solar-window-film-slide-01.jpg",
    alt: "",
    width: 733,
    height: 488,
  },
  {
    url: "/images/content/solar-window-film-slide-02.jpg",
    alt: "",
    width: 733,
    height: 488,
  },
  {
    url: "/images/content/solar-window-film-slide-03.jpg",
    alt: "",
    width: 733,
    height: 488,
  },
  {
    url: "/images/content/solar-window-film-slide-04.jpg",
    alt: "",
    width: 733,
    height: 488,
  },
];

const SolarWindowFilmPage = () => {
  const { t } = useTranslation();
  return (
    <CompactLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("solarWindowFilm.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("solarWindowFilm.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("solarWindowFilm.content.p1")}</Product.Parragraph>
            <Product.Parragraph>{t("solarWindowFilm.content.p2")}</Product.Parragraph>
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
