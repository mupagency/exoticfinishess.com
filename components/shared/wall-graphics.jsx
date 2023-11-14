import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const WallGraphics = () => {
  return (
    <div>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category="services" title="WALL GRAPHICS" />
      </div>
      <NavWrap>
        <Link href="/wall-graphics/branding/">
          <a>
            <Item title="Branding">
              <picture>
                <source srcSet="/images/navigation/mobile/wall-graphics-branding.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/wall-graphics-branding.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/wall-graphics/decor/">
          <a>
            <Item title="Decor">
              <picture>
                <source srcSet="/images/navigation/mobile/wall-graphics-decor.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/wall-graphics-decor.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
      </NavWrap>
    </div>
  );
};

export default WallGraphics;
