import Header from "components/header";
import MachineSection from "components/sections/machine";
import LocationSection from "components/sections/location";
import ContactSection from "components/sections/contact";
import ClientsSection from "components/sections/clients";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GraphicLayout = ({ children }) => {
  useEffect(() => {
    const containers = document.querySelectorAll(".product-grid");

    containers.forEach((element) => {
      console.log(element);
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.5,
        opacity: 0,
        y: "+=20%",
      });
    });
  }, []);

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
