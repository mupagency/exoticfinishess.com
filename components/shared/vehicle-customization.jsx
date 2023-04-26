import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const VehicleCustomization = () => {
  return (
    <div>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category="services" title="Window Graphics" />
      </div>
      <NavWrap>
        <Link href="/vehicle-customization/paint-protection-film/">
          <a>
            <Item title="Paint Protection Film" type="xpel">
              <picture>
                <source srcSet="/images/navigation/mobile/stealth-ppf-xpel-bmw-m240i.jpg" media="(max-width: 768px)" />
                <img
                  src="/images/navigation/stealth-ppf-xpel-bmw-m240i.jpg"
                  alt="2022 BMW 240i with XPEL stealth paint protection film. Black out wheels from Zurikate"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/window-tint/">
          <a>
            <Item title="Window Tint" type="xpel">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/nano-ceramic-window-tint-xpel.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/nano-ceramic-window-tint-xpel.jpg"
                  alt="Window tint for a 2022 Tesla Model Y with XR plus nano-ceramic film"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/vehicle-wraps/">
          <a>
            <Item title="Vehicle Wraps" type="3m">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/color-change-3m-mustang-thumbnail.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/color-change-3m-mustang-thumbnail.jpg"
                  alt="Mustang had a color change using 3m 2080 gloss pink vinyl"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/ceramic/">
          <a>
            <Item title="Ceramic" type="xpel">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/ceramic-coating-xpel-fusion-plus-paint-ppf-bmw-thumbnail.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/ceramic-coating-xpel-fusion-plus-paint-ppf-bmw-thumbnail.jpg"
                  alt="Xepl fusion plus ceramic coating being applied with a sponge on stealth paint protection film on a 2022 BMW m240i"
                  width="348"
                  height="499"
                />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/vehicle-customization/powder-coat-paint/">
          <a>
            <Item title="Custom details - Powder Coat Paint">
              <picture>
                <source
                  srcSet="/images/navigation/mobile/painted-calipers-mercedes-benz.jpg"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/navigation/painted-calipers-mercedes-benz.jpg"
                  alt="Calipers painted in gloss red for Mercedes Benz AMG 53"
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
