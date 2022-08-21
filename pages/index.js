import MainLayout from "components/layouts/main";
import ClientsSection from "components/sections/clients";
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Exotic Finishess - Custom Textured Walls & Wraps</title>
        <meta name="description" content="Custom Textured Walls & Wraps" />
        <meta name="author" content="Exotic finishess" />
      </Head>
      <ul>
        {/* link to vehicle-customization */}
        <li>
          <Link href="/vehicle-customization/">
            <a>Vehicle Customization</a>
          </Link>
        </li>
        {/* link to ceramic */}
        <li>
          <Link href="/vehicle-customization/ceramic/">
            <a>Ceramic</a>
          </Link>
        </li>
        {/* link to vehicle wraps */}
        <li>
          <Link href="/vehicle-customization/vehicle-wraps/">
            <a>Vehicle Wraps</a>
          </Link>
        </li>
        {/* link to window tint */}
        <li>
          <Link href="/vehicle-customization/window-tint/">
            <a>Window Tint</a>
          </Link>
        </li>
        {/* link to paint-protection-film */}
        <li>
          <Link href="/vehicle-customization/paint-protection-film/">
            <a>Paint Protection Film</a>
          </Link>
        </li>
        {/* link to powder-coat-paint */}
        <li>
          <Link href="/vehicle-customization/powder-coat-paint/">
            <a>Powder Coat Paint</a>
          </Link>
        </li>
        {/* link to visual-graphics */}
        <li>
          <Link href="/visual-graphics/">
            <a>Visual Graphics</a>
          </Link>
        </li>
        {/* link to commercial-vehicle-wraps */}
        <li>
          <Link href="/visual-graphics/commercial-vehicle-wraps/">
            <a>Commercial Vehicle Wraps</a>
          </Link>
        </li>
        {/* link to solar-window-film */}
        <li>
          <Link href="/visual-graphics/solar-window-film/">
            <a>Solar Window Film</a>
          </Link>
        </li>
        {/* link to sticket-manufacturer */}
        <li>
          <Link href="/visual-graphics/sticket-manufacturer/">
            <a>Sticket Manufacturer</a>
          </Link>
        </li>
        {/* link to window-frost-privacy-film */}
        <li>
          <Link href="/visual-graphics/window-frost-privacy-film/">
            <a>Window Frost Privacy Film</a>
          </Link>
        </li>
        {/* link to window-wall-graphics */}
        <li>
          <Link href="/visual-graphics/window-wall-graphics/">
            <a>Window Wall Graphics</a>
          </Link>
        </li>
      </ul>
      <ClientsSection />
    </MainLayout>
  );
};

export default HomePage;
