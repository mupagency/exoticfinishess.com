import MainLayout from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

const GalleryData = [
  {
    url: "/images/content/perforated-window-graphics-slide.jpg",
    alt: "",
    width: 733,
    height: 488,
  },
];

const PerforatedWindowGraphicsPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("perforatedWindowGraphics.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("perforatedWindowGraphics.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("perforatedWindowGraphics.content.p1")}</Product.Parragraph>
            <Product.Parragraph>{t("perforatedWindowGraphics.content.p2")}</Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default PerforatedWindowGraphicsPage;
