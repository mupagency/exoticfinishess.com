import Header from "components/header";
import MachineSection from "components/sections/machine";
import LocationSection from "components/sections/location";
import ContactSection from "components/sections/contact";
import ClientsSection from "components/sections/clients";
import useAnimations from "hooks/useAnimations";

const GraphicLayout = ({ children }) => {
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

export default GraphicLayout;

export const GraphicLayoutCompact = ({ children }) => {
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
