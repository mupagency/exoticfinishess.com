import Header from "components/header";
import ContactSection from "components/sections/contact";

const VehicleLayout = ({ children }) => {
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
