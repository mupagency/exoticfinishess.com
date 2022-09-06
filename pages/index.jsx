import MainLayout from "components/layouts/main";
import IntroSection from "components/sections/intro";
import ServiceGraphics from "components/shared/service-graphics";
import VehicleCustomization from "components/shared/vehicle-customization";

const HomePage = () => {
  return (
    <MainLayout>
      <IntroSection />

      <ServiceGraphics />

      <VehicleCustomization />
    </MainLayout>
  );
};

export default HomePage;
