import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const VehicleCustomization = () => {
  return (
    <div>
      <div className="text-white px-4 py-8 bg-stone-900">
        <HeadlineGroup category="services" title="Vehicle Customization" />
      </div>
      <NavWrap>
        <Link href="/vehicle-customization/paint-protection-film/">
          <a>
            <Item title="Paint Protection Film" type="xpel">
              <img src="/images/navigation/stealth-ppf-xpel-bmw-m240i.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/window-tint/">
          <a>
            <Item title="Window Tint" type="xpel">
              <img src="/images/navigation/nano-ceramic-window-tint-xpel.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/vehicle-wraps/">
          <a>
            <Item title="Vehicle Wraps" type="3m">
              <img src="/images/navigation/color-change-3m-mustang-thumbnail.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/ceramic/">
          <a>
            <Item title="Ceramic" type="xpel">
              <img
                src="/images/navigation/ceramic-coating-xpel-fusion-plus-paint-ppf-bmw-thumbnail.jpg"
                alt=""
                width="348"
                height="499"
              />
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/powder-coat-paint/">
          <a>
            <Item title="Custom details - Powder Coat Paint">
              <img src="/images/navigation/painted-calipers-mercedes-benz.jpg" alt="" width="348" height="499" />
            </Item>
          </a>
        </Link>
      </NavWrap>
    </div>
  );
};

export default VehicleCustomization;
