import Link from "next/link";
import { HeadlineGroup } from "components/shared/headlines";
import { NavWrap, NavItem as Item } from "components/shared/custom-nav";
import useTranslation from "hooks/useTranslation";

const WindowGraphics = ({ fullHeight = false }) => {
  const { t } = useTranslation();

  const mainClass = fullHeight ? "min-h-[calc(100vh-61px)]" : "";

  return (
    <div className={`flex flex-col ${mainClass}`}>
      <div className="text-white px-4 py-6 bg-stone-900">
        <HeadlineGroup category={t("homepage.windowGraphics.category")} title={t("homepage.windowGraphics.title")} />
      </div>
      <NavWrap>
        <Link href="/window-graphics/custom-graphics/">
          <a>
            <Item title={t("homepage.windowGraphics.items.customGraphics")}>
              <picture>
                <source srcSet="/images/navigation/mobile/custom-graphics.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/custom-graphics.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/window-graphics/perforated-window-graphics/">
          <a>
            <Item title={t("homepage.windowGraphics.items.perforatedWindowGraphics")}>
              <picture>
                <source srcSet="/images/navigation/mobile/perforated-window-graphics.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/perforated-window-graphics.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/window-graphics/window-frost-privacy-film/">
          <a>
            <Item title={t("homepage.windowGraphics.items.windowFrostPrivacyFilm")}>
              <picture>
                <source srcSet="/images/navigation/mobile/window-frost-privacy-film.jpg" media="(max-width: 768px)" />
                <img src="/images/navigation/window-frost-privacy-film.jpg" alt="" width="348" height="499" />
              </picture>
            </Item>
          </a>
        </Link>
        <Link href="/window-graphics/solar-window-film/">
          <a>
            <Item title={t("homepage.windowGraphics.items.solarWindowFilm")}>
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
