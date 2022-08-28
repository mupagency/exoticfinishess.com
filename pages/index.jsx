import MainLayout from "components/layouts/main";
import IntroSection from "components/sections/intro";
import ServiceGraphics from "components/shared/service-graphics";
import VehicleCustomization from "components/shared/vehicle-customization";
import Head from "next/head";

const HomePage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Exotic Finishess - Custom Textured Walls & Wraps</title>
        <meta name="description" content="Custom Textured Walls & Wraps" />
        <meta name="author" content="Exotic finishess" />
      </Head>

      <IntroSection />

      <ServiceGraphics />

      <VehicleCustomization />
    </MainLayout>
  );
};

export default HomePage;
