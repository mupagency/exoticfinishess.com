import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimations = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(".product-grid");

    containers.forEach((element) => {
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

  useEffect(() => {
    const containers = document.querySelectorAll(".product-media");

    containers.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.2,
        scale: 0.7,
        opacity: 0,
        y: "+=10%",
      });
    });
  }, []);
};

export default useAnimations;
