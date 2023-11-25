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
        <Link href="/window-graphics/custom-graphics/">
          <a>
            <Item title="Custom Graphics">
              <picture>
                <source srcSet="/images/navigation/mobile/custom-graphics.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/custom-graphics.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/window-graphics/perforated-window-graphics/">
          <a>
            <Item title="Perforated window graphics">
              <picture>
                <source srcSet="/images/navigation/mobile/perforated-window-graphics.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/perforated-window-graphics.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/window-graphics/window-frost-privacy-film/">
          <a>
            <Item title="Window Frost Privacy Film">
              <picture>
                <source srcSet="/images/navigation/mobile/window-frost-privacy-film.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/window-frost-privacy-film.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/window-graphics/solar-window-film/">
          <a>
            <Item title="Solar Window Film">
              <picture>
                <source srcSet="/images/navigation/mobile/solar-window-film.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/solar-window-film.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
      </NavWrap>
    </div>
  );
};

export default WindowGraphics;
