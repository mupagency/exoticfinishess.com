import Header from "components/header";
import ContactSection from "components/sections/contact";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VehicleLayout = ({ children }) => {
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
      </main>
    </>
  );
};

export default VehicleLayout;
