import React from "react";
import { HeadlineGroup } from "components/shared/headlines";

const MachineSection = () => {
  return (
    <div className="relative bg-white z-30">
      <div className="relative px-4 mx-auto max-w-4xl">
        <div className="mb-12">
          <HeadlineGroup category="Our machine" title="Mimaki" />
        </div>
        <div className="text-lg mb-8 font-normal text-center">
          <p>
            We want the best for your business, that&apos;s why we have the best machine in the market to delivery high
            quality graphic design installations.
          </p>
          <br />
          <p>
            Also we offer design services if you don&apos;t know how to start. Our team can advise and accompany you
            through the entire design and installation process.
          </p>
        </div>
        <div className="mb-8">
          <img
            src="/images/mimaki-machine.jpg"
            alt="Exotic Finishess Mimaki Machine"
            width="1265"
            height="789"
            className="mx-auto"
          />
        </div>
        <div className="mb-16 mx-auto max-w-[240px] md:max-w-none">
          <img
            src="/images/machine-logos.png"
            alt="Exotic Finishess Mimaki logos"
            width="445"
            height="115"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MachineSection;
