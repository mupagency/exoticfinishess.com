import React from "react";
import { HeadlineGroup } from "components/shared/headlines";

const LocationSection = () => {
  return (
    <div className="px-4 mx-auto max-w-4xl">
      <div className="mb-12">
        <HeadlineGroup category="Our" title="Services" />
      </div>
      <div className="text-lg mb-8 text-center font-normal">
        <p>We service all of US. Contact us for more information let&apos;s work together.</p>
      </div>
      <div className="mb-8">
        <img
          src="/images/location.png"
          alt="Exotic Finishess Mimaki Machine"
          width="1075"
          height="707"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default LocationSection;
