import Link from "next/link";
import { HeadlineGroup } from "./headlines";

const Item = ({ children, title = "" }) => {
  return (
    <div className="relative">
      <div className="relative z-0">{children}</div>
      <div className="absolute inset-0 bg-stone-900 bg-opacity-60 hover:bg-opacity-0 transition-colors z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h2 className="text-white uppercase text-2xl font-bold text-center px-4">{title}</h2>
      </div>
    </div>
  );
};

const VehicleCustomization = () => {
  return (
    <div>
      <div className="text-white px-4 py-8 bg-stone-900">
        <HeadlineGroup category="services" title="Vehicle Customization" />
      </div>
      <nav className="flex justify-center py-12 px-4">
        <div className="flex rounded-3xl overflow-hidden">
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
                <img src="/images/navigation/large-format-printing-mural-3m.jpg" alt="" width="348" height="499" />
              </Item>
            </a>
          </Link>
          <Link href="/visual-graphics/sticket-manufacturer/">
            <a>
              <Item title="Sticket Manufacturer">
                <img src="/images/navigation/large-format-printing-mural-3m.jpg" alt="" width="348" height="499" />
              </Item>
            </a>
          </Link>
          <Link href="/visual-graphics/window-frost-privacy-film/">
            <a>
              <Item title="Window Frost Privacy Film">
                <img src="/images/navigation/large-format-printing-mural-3m.jpg" alt="" width="348" height="499" />
              </Item>
            </a>
          </Link>
          <Link href="/visual-graphics/solar-window-film/">
            <a>
              <Item title="Powder Coat Paint">
                <img src="/images/navigation/large-format-printing-mural-3m.jpg" alt="" width="348" height="499" />
              </Item>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default VehicleCustomization;
