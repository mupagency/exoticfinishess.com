import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const WindowGraphics = () => {
  return (
    <div>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category="services" title="WINDOW GRAPHICS" />
      </div>
      <NavWrap>
        <Link href="/visual-graphics/commercial-vehicle-wraps/">
          <a>
            <Item title="Commercial Vehicle Wraps">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/commercial-car-wrap-design-mercedes-benz-van.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/commercial-car-wrap-design-mercedes-benz-van.jpg"
                  alt="Commercial car wrap for Zurikate using 3m IJ180 vinyl and custom design"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/sticker-manufacturer/">
          <a>
            <Item title="sticker Manufacturer">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/stickers-manufacturer-decals-3m.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/stickers-manufacturer-decals-3m.jpg"
                  alt="Stickers in silver using 3m vinyl. Decals in different designs"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/window-frost-privacy-film/">
          <a>
            <Item title="Window Frost Privacy Film">
              <picture>
                <source srcSet="/images/navigation/mobile/window-frost-privacy-film.jpg" media="(max-width: 768px)" />
                <img
                  src="/images/navigation/window-frost-privacy-film.jpg"
                  alt="Partial window frost privacy film installed on glass for office with custom design"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/solar-window-film/">
          <a>
            <Item title="Solar Window Film">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/xpel-vision-clear-view-plus-thumb.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/xpel-vision-clear-view-plus-thumb.jpg"
                  alt="Xpel vision clear view plus solar window film installed in a house. Window tint with maximum technology to keep the heat away"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
      </NavWrap>
    </div>
  );
};

export default WindowGraphics;
