import MainLayout from "components/layouts/main";
import Product from "components/shared/product";
import Gallery from "components/shared/gallery";
import useTranslation from "hooks/useTranslation";

const GalleryData = [
  {
    url: "/images/content/branding-slide-01.jpg",
    alt: "",
    width: 550,
    height: 412,
  },
  {
    url: "/images/content/branding-slide-02.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
  {
    url: "/images/content/branding-slide-03.jpg",
    alt: "",
    width: 733,
    height: 550,
  },
];

const BrandingPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="container">
        <Product.Head>
          <div>
            <Product.Title>{t("branding.title")}</Product.Title>
          </div>
          <div>
            <Product.Description>
              <p>{t("branding.description")}</p>
            </Product.Description>
          </div>
        </Product.Head>
        <Product.Grid>
          <Product.GridItem>
            <Product.Parragraph>{t("branding.content.p1")}</Product.Parragraph>
            <Product.Parragraph>{t("branding.content.p2")}</Product.Parragraph>
          </Product.GridItem>
          <Product.GridItem>
            <Gallery images={GalleryData} />
          </Product.GridItem>
        </Product.Grid>
      </div>
    </MainLayout>
  );
};

export default BrandingPage;
