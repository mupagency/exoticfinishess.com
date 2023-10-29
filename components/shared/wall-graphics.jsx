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
        <Link href="/visual-graphics/window-wall-graphics/">
          <a>
            <Item title="Window & Wall Graphics">
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
      </NavWrap>
    </div>
  );
};

export default WallGraphics;
