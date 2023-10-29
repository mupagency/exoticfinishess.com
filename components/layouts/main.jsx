import Header from "components/header";
import MachineSection from "components/sections/machine";
import LocationSection from "components/sections/location";
import ContactSection from "components/sections/contact";
import ClientsSection from "components/sections/clients";
import useAnimations from "hooks/useAnimations";

const MainLayout = ({ children }) => {
  useAnimations();

  return (
    <>
      <Header />
      <main>
        {children}
        <ContactSection />
        <MachineSection />
        <LocationSection />
        <ClientsSection />
      </main>
    </>
  );
};

export default MainLayout;

export const CompactLayout = ({ children }) => {
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

export const SimpleLayout = ({ children }) => {
  useAnimations();

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
