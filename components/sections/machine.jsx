import React from "react";
import { HeadlineGroup } from "components/shared/headlines";
import useTranslation from "hooks/useTranslation";

const MachineSection = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-white z-30">
      <div className="relative px-4 mx-auto max-w-4xl">
        <div className="mb-12">
          <HeadlineGroup category={t("machine.category")} title={t("machine.title")} />
        </div>
        <div className="text-lg mb-8 font-normal text-center">
          <p>{t("machine.description")}</p>
          <br />
          <p>{t("machine.content")}</p>
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
