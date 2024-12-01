import { useContext } from "react";
import Get from "lodash/get";

import { LanguageContext, defaultLocale } from "providers/language-provider";
import { Lang } from "lang/lang";

const useTranslation = () => {
  const [locale] = useContext(LanguageContext);

  const t = (key) => {
    let search = Get(Lang[locale], key);

    if (!search) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return search || Get(Lang[defaultLocale], key) || "";
  };

  return {
    t,
    locale,
  };
};

export default useTranslation;
