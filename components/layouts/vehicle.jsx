import Header from "components/header";
import ContactSection from "components/sections/contact";
import useAnimations from "hooks/useAnimations";

const VehicleLayout = ({ children }) => {
  useAnimations();

  return (
    <>
      <Header />
      <main>
        {children}
        <ContactSection />
      </main>
    </>
  );
};

export default VehicleLayout;
