import { Html, Head, Main, NextScript } from "next/document";
import { locales } from "providers/language-provider";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/app.css" />
        {locales.map((locale) => (
          <link key={locale} rel="alternate" hrefLang={locale} href={`https://www.exoticfinishess.com/`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`https://www.exoticfinishess.com/`} />
      </Head>
      <body className="font-century min-w-[320px]">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NV4Q5VM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
