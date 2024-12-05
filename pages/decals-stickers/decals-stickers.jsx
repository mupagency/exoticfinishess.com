import MainLayout from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

const GalleryData = [
  {
    url: "/images/content/decals-stickers-slide-01.jpg",
    alt: "",
    width: 424,
    height: 550,
  },
  {
    url: "/images/content/decals-stickers-slide-02.jpg",
    alt: "",
    width: 550,
    height: 412,
  },
  {
    url: "/images/content/decals-stickers-slide-03.jpg",
    alt: "",
    width: 424,
    height: 550,
  },
  {
    url: "/images/content/decals-stickers-slide-04.jpg",
    alt: "",
    width: 584,
    height: 550,
  },
];

const DecalsStickersPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("decalsStickers.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("decalsStickers.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("decalsStickers.content.p1")}</Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default DecalsStickersPage;
