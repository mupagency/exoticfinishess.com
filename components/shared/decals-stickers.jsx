import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";

const DecalsStickers = () => {
  return (
    <div>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category="services" title="DECALS / STICKERS" />
      </div>
      <NavWrap>
        <Link href="/decals-stickers/decals-stickers/">
          <a>
            <Item title="Decals / stickers">
              <picture>
                <source srcSet="/images/navigation/mobile/decals-stickers.jpg" media="(max-width: 768px)" />
                <img
                  src="/images/navigation/decals-stickers.jpg"
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

export default DecalsStickers;
