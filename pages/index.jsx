import MainLayout from "components/layouts/main";
import ClientsSection from "components/sections/clients";
import IntroSection from "components/sections/intro";
import Head from "next/head";
import Links from "components/shared/links";
import ServiceGraphics from "components/shared/service-graphics";
import VehicleCustomization from "components/shared/vehicle-customization";

const HomePage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Exotic Finishess - Custom Textured Walls & Wraps</title>
        <meta name="description" content="Custom Textured Walls & Wraps" />
        <meta name="author" content="Exotic finishess" />
      </Head>

      <IntroSection />

      <Links />

      <ServiceGraphics />

      <VehicleCustomization />

      <ClientsSection />
    </MainLayout>
  );
};

export default HomePage;
