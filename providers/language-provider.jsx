import { createContext, useEffect, useState } from "react";

export const defaultLocale = "es";
export const locales = ["en", "es"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ children }) => {
  const [locale, setlocale] = useState(defaultLocale);

  // const testLocale = (locale) => {
  //   Object.defineProperty(navigator, "language", {
  //     get: function () {
  //       return locale;
  //     },
  //   });
  // };

  // get the navigator language and set the locale
  useEffect(() => {
    // testLocale("es");

    const navigatorLocale = navigator.language.split("-")[0];
    if (locales.includes(navigatorLocale)) {
      setlocale(navigatorLocale);
    }
  }, []);

  return <LanguageContext.Provider value={[locale, setlocale]}>{children}</LanguageContext.Provider>;
};
