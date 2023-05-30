import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const ServiceGraphics = () => {
  return (
    <div>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category="services" title="VINYL GRAPHICS & FILMS" />
      </div>
      <NavWrap>
        <Link href="/visual-graphics/solar-window-film/">
          <a>
            <Item title="Wall Graphics">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/large-format-printing-mural-3m.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/large-format-printing-mural-3m.jpg"
                  alt="Large format printing in Miami Design District for murals with 3m high quality vinyl for advertising"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/visual-graphics/window-wall-graphics/">
          <a>
            <Item title="Windows grahics">
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
      
      </NavWrap>
    </div>
  );
};

export default ServiceGraphics;
