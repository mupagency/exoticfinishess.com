import "styles/application.css";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { LanguageProvider } from "providers/language-provider";

const DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const canonical_url = pathname == "/" ? `${DOMAIN}${pathname}` : `${DOMAIN}${pathname}/`;

  return (
    <>
      <Head>
        <title>Vinyl graphics and films</title>
        <link rel="canonical" href={canonical_url} />
        <meta name="author" content="Exotic Finishess" />
        <meta
          name="description"
          content="Explore our vinyl graphics specializing in custom designs for events, branding, decals, and more. We elevate your visuals with durable materials that provide vibrant colors and lasting impact. Ideal for personal and commercial applications, our innovative solutions will transform your space. Elevate your brand with us today!"
        />
        <meta property="og:title" content="Vinyl graphics and films" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Explore our vinyl graphics specializing in custom designs for events, branding, decals, and more. We elevate your visuals with durable materials that provide vibrant colors and lasting impact. Ideal for personal and commercial applications, our innovative solutions will transform your space. Elevate your brand with us today!"
        />
        <meta property="og:url" content={canonical_url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="Vinyl graphics and films" />
        <meta
          name="twitter:description"
          content="Explore our vinyl graphics specializing in custom designs for events, branding, decals, and more. We elevate your visuals with durable materials that provide vibrant colors and lasting impact. Ideal for personal and commercial applications, our innovative solutions will transform your space. Elevate your brand with us today!"
        />
        <meta name="twitter:url" content={canonical_url} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:alt" content="Vinyl graphics and films" />

        <link rel="icon" href="/favicon.ico?v=1.0.1" />
      </Head>
      <Script id="googletagmanager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NV4Q5VM');`}
      </Script>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}

export default MyApp;
