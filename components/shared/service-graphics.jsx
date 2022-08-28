import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const ServiceGraphics = () => {
  return (
    <div>
      <div className="text-white px-4 py-8 bg-stone-900">
        <HeadlineGroup category="services" title="VINYL GRAPHICS & FILMS" />
      </div>
      <NavWrap>
        <Link href="/visual-graphics/window-wall-graphics/">
          <a>
            <Item title="Window Wall Graphics">
              <img src="/images/navigation/large-format-printing-mural-3m.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/commercial-vehicle-wraps/">
          <a>
            <Item title="Commercial Vehicle Wraps">
              <img
                src="/images/navigation/commercial-car-wrap-design-mercedes-benz-van.jpg"
                alt=""
                width="348"
                height="499"
              />
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/sticker-manufacturer/">
          <a>
            <Item title="sticker Manufacturer">
              <img src="/images/navigation/stickers-manufacturer-decals-3m.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/window-frost-privacy-film/">
          <a>
            <Item title="Window Frost Privacy Film">
              <img src="/images/navigation/window-frost-privacy-film.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/solar-window-film/">
          <a>
            <Item title="Solar Window Film">
              <img src="/images/navigation/xpel-vision-clear-view-plus-thumb.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
      </NavWrap>
    </div>
  );
};

export default ServiceGraphics;
