import "styles/application.css";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";

const DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const canonical_url = pathname == "/" ? `${DOMAIN}${pathname}` : `${DOMAIN}${pathname}/`;

  return (
    <>
      <Head>
        <title>Vinyl graphics and films - Vehicle customization</title>
        <link rel="canonical" href={canonical_url} />
        <meta name="author" content="Exotic Finishess" />
        <meta
          name="description"
          content="What would you like to wrap or protect with our custom vinyl skins? For home, offices, Windows and walls, cars, Xpel ppf, ceramic, comercial wraps … give us a call. Window and wall graphics. Xpel - Paint protection film (PPF)"
        />
        <meta property="og:title" content="Vinyl graphics and films - Vehicle customization" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="What would you like to wrap or protect with our custom vinyl skins? For home, offices, Windows and walls, cars, Xpel ppf, ceramic, comercial wraps … give us a call. Window and wall graphics. Xpel - Paint protection film (PPF)"
        />
        <meta property="og:url" content={canonical_url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="Vinyl graphics and films - Vehicle customization" />
        <meta
          name="twitter:description"
          content="What would you like to wrap or protect with our custom vinyl skins? For home, offices, Windows and walls, cars, Xpel ppf, ceramic, comercial wraps … give us a call. Window and wall graphics. Xpel - Paint protection film (PPF)"
        />
        <meta name="twitter:url" content={canonical_url} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:alt" content="Vinyl graphics and films - Vehicle customization" />

        <link rel="icon" href="/favicon.ico?v=1.0.1" />
      </Head>
      <Script id="googletagmanager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NV4Q5VM');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
