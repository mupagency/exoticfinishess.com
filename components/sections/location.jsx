import React from "react";
import { HeadlineGroup } from "components/shared/headlines";
import useTranslation from "hooks/useTranslation";

const LocationSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 mx-auto max-w-4xl">
      <div className="mb-12">
        <HeadlineGroup category={t("location.category")} title={t("location.title")} />
      </div>
      <div className="text-lg mb-8 text-center font-normal">
        <p>{t("location.content")}</p>
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
