import { CompactLayout } from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

const GalleryData = [
  {
    url: "/images/content/window-frost-privacy-film-slide-01.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
  {
    url: "/images/content/window-frost-privacy-film-slide-02.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
  {
    url: "/images/content/window-frost-privacy-film-slide-03.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
];

const WindowFrostPrivacyFilmPage = () => {
  const { t } = useTranslation();
  return (
    <CompactLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("windowFrostPrivacyFilm.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("windowFrostPrivacyFilm.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("windowFrostPrivacyFilm.content.p1")}</Product.Parragraph>
            <Product.Parragraph>{t("windowFrostPrivacyFilm.content.p2")}</Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </CompactLayout>
  );
};

export default WindowFrostPrivacyFilmPage;
