import MainLayout from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

const GalleryData = [
  {
    url: "/images/content/decor-slide-01.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
  {
    url: "/images/content/decor-slide-02.jpg",
    alt: "",
    width: 733,
    height: 412,
  },
  {
    url: "/images/content/decor-slide-03.jpg",
    alt: "",
    width: 733,
    height: 412,
  },
];

const DecorPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("decor.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("decor.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("decor.content.p1")}</Product.Parragraph>
            <Product.Parragraph>{t("decor.content.p2")}</Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default DecorPage;
