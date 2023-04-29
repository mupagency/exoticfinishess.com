import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const VehicleCustomization = () => {
  return (
    <div>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category="services" title="Window Films" />
      </div>
      <NavWrap>
        <Link href="/vehicle-customization/paint-protection-film/">
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
    
        <Link href="/vehicle-customization/window-tint/">
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

export default VehicleCustomization;
