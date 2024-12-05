import MainLayout from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

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

const CustomGraphicsPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("customGraphics.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("customGraphics.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("customGraphics.content.p1")}</Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default CustomGraphicsPage;
