import useTranslation from "hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-61px)] grid place-content-center">
        <div className="lg:flex px-4 lg:px-12">
          <div className="flex-none pr-8 my-8">
            <h2 className="uppercase text-4xl lg:text-7xl font-acuminpro font-black">
              Exotic <br /> finishess
            </h2>
          </div>
          <div className="border-l-2 border-black pl-4 lg:pl-8 lg:py-8">
            <div className="text-base md:text-lg">
              <p className="mb-4">{t("about.description")}</p>
              <p className="mb-4">{t("about.content.p1")}</p>
              <p>{t("about.content.p2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
