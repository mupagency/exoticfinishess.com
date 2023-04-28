import Brand from "components/shared/brand";
import { MIcon, MinusIcon, PlusIcon, XpelIcon } from "components/shared/icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NONAV = 0;
const VISUAL = 1;
const VEHICLE = 2;

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [navType, setNavType] = useState(NONAV);

  const router = useRouter();
  const { pathname = "" } = router;
  const isHome = pathname === "/";

  const handleNavType = (t) => {
    if (navType == t) {
      setNavType(() => NONAV);
      return;
    }
    setNavType(() => t);
  };

  useEffect(() => {
    if (pathname.includes("/visual-graphics")) {
      setNavType(() => VISUAL);
    }

    if (pathname.includes("/vehicle-customization")) {
      setNavType(() => VEHICLE);
    }

    return () => {};
  }, [pathname]);

  useEffect(() => {
    if (showNav) {
      setNavType(NONAV);
    }
  }, [showNav]);

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <div className="bg-black">
          <div className="relative mx-auto max-w-[1920px] flex items-center justify-between px-4 py-2 lg:py-0">
            <div className="flex-none lg:w-52">
              <Link href="/">
                <div className="flex items-center gap-2 text-white md:text-xl leading-none font-normal cursor-pointer">
                  <span className="w-10 py-2">
                    <Brand />
                  </span>
                  Exotic Finishess
                </div>
              </Link>
            </div>
            {showNav == false && (
              <div className="flex-1 hidden lg:flex justify-center items-center mx-auto">
                <ul className="flex gap-4 text-white text-center">
                  <li
                    onClick={() => handleNavType(VISUAL)}
                    className={`relative ${pathname.startsWith("/visual-graphics") && "text-primary"}`}
                  >
                    <h3 className="cursor-pointer text-xl hover:text-primary leading-none uppercase px-4 py-5">
                      Vinyl Graphics
                    </h3>
                    {pathname.startsWith("/visual-graphics") && (
                      <div className="absolute bottom-0 left-0 right-0 h-0 w-0 mx-auto border-solid border-b-primary border-b-8 border-x-transparent border-x-8 border-t-0"></div>
                    )}
                  </li>
                  <li
                    onClick={() => handleNavType(VEHICLE)}
                    className={`relative ${pathname.startsWith("/vehicle-customization") && "text-primary"}`}
                  >
                    <h3 className="cursor-pointer text-xl hover:text-primary leading-none uppercase px-4 py-5">
                      Window Films
                    </h3>
                    {pathname.startsWith("/vehicle-customization") && (
                      <div className="absolute bottom-0 left-0 right-0 h-0 w-0 mx-auto border-solid border-b-primary border-b-8 border-x-transparent border-x-8 border-t-0"></div>
                    )}
                  </li>
                </ul>
              </div>
            )}
            <div className="flex-none lg:w-52">
              <div className="text-white text-right cursor-pointer">
                <div className="w-8 ml-auto" onClick={() => setShowNav((prev) => !prev)}>
                  {!showNav ? <PlusIcon /> : <MinusIcon />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showNav == false && (
          <div className="text-center bg-black text-white flex justify-evenly lg:hidden">
            <div
              onClick={() => handleNavType(VISUAL)}
              className={`${pathname.startsWith("/visual-graphics") && "text-primary"}`}
            >
              <h3 className="text-sm hover:text-primary leading-none p-4 cursor-pointer text-current">
                Vinyl Graphics & Films
              </h3>
            </div>
            <div
              onClick={() => handleNavType(VEHICLE)}
              className={`${pathname.startsWith("/vehicle-customization") && "text-primary"}`}
            >
              <h3 className="text-sm hover:text-primary leading-none p-4 cursor-pointer text-current">
                Window Graphics
              </h3>
            </div>
          </div>
        )}

        {isHome && navType == VISUAL && (
          <nav className="absolute top-full left-0 right-0 bg-neutral-900 bg-opacity-80 md:rounded-b-2xl">
            <div className="max-w-[1520px] mx-auto overflow-x-auto touch-pan-x whitespace-nowrap px-8">
              <ul className="text-center leading-none text-white uppercase text-xs lg:text-lg">
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/visual-graphics/window-wall-graphics/">
                    <div className="p-3 lg:p-4 hover:text-primary text-current cursor-pointer">
                      Window Graphics
                      <span></span>
                    </div>
                  </Link>
                </li>
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/visual-graphics/solar-window-film/">
                    <div className="p-3 lg:p-4 hover:text-primary text-current cursor-pointer">
                      Wall Graphics
                      <span></span>
                    </div>
                  </Link>
                </li>
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/visual-graphics/sticker-manufacturer/">
                    <div className="p-3 lg:p-4 hover:text-primary text-current cursor-pointer">
                      Logos & stickers
                      <span></span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
        {!isHome && navType == VISUAL && (
          <nav className="relative bg-white">
            <div className="max-w-[1520px] mx-auto overflow-x-auto touch-pan-x whitespace-nowrap px-8 border-b border-neutral-400">
              <ul className="text-center leading-none text-neutral-400 uppercase text-xs lg:text-lg">
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/visual-graphics/window-wall-graphics/">
                    <div className={`${pathname.includes("window-wall-graphics") && "text-black"}`}>
                      <div className="p-3 lg:p-4 hover:text-black text-current cursor-pointer">
                        Window <br /> Graphics
                        <span></span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/visual-graphics/sticker-manufacturer/">
                    <div className={`${pathname.includes("sticker-manufacturer") && "text-black"}`}>
                      <div className="p-3 lg:p-4 hover:text-black text-current cursor-pointer">
                        Sticker <br /> Manufacturer
                        <span></span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/visual-graphics/solar-window-film/">
                    <div className={`${pathname.includes("solar-window-film") && "text-black"}`}>
                      <div className="p-3 lg:p-4 hover:text-black text-current cursor-pointer">
                        Wall <br /> Graphics
                        <span></span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}

        {isHome && navType == VEHICLE && (
          <nav className="absolute top-full left-0 right-0 bg-neutral-900 bg-opacity-80 md:rounded-b-2xl">
            <div className="max-w-[1520px] mx-auto overflow-x-auto touch-pan-x whitespace-nowrap px-8">
              <ul className="text-center leading-none text-white uppercase text-xs lg:text-lg">

                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/vehicle-customization/window-tint/">
                    <div className="p-3 lg:p-4 hover:text-primary text-current cursor-pointer">
                      Solar Window <br /> Film
                      <div className="flex justify-center w-10 mx-auto">
                       
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/vehicle-customization/paint-protection-film/">
                    <div className="p-3 lg:p-4 hover:text-primary text-current cursor-pointer">
                      WINDOW FROST <br /> PRIVACY FILM 
                      <div className="flex justify-center w-10 mx-auto">
                       
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
        {!isHome && navType == VEHICLE && (
          <nav className="relative bg-white">
            <div className="max-w-[1520px] mx-auto overflow-x-auto touch-pan-x whitespace-nowrap px-8 border-b border-neutral-400">
              <ul className="text-center leading-none text-neutral-400 uppercase text-xs lg:text-lg">
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/vehicle-customization/paint-protection-film/">
                    <div className={`${pathname.includes("paint-protection-film") && "text-black"}`}>
                      <div className="p-3 lg:p-4 hover:text-black text-current cursor-pointer">
                        Window frost <br /> privacy Film
                        <div className="flex justify-center w-10 mx-auto">
                         
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/vehicle-customization/window-tint/">
                    <div className={`${pathname.includes("window-tint") && "text-black"}`}>
                      <div className="p-3 lg:p-4 hover:text-black text-current cursor-pointer">
                        Solar Window <br /> Film
                        <div className="flex justify-center w-10 mx-auto">
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>


                <li className="inline-block min-w-[110px] lg:min-w-[220px] align-top">
                  <Link href="/vehicle-customization/powder-coat-paint/">
                    <div className={`${pathname.includes("powder-coat-paint") && "text-black"}`}>
                      <div className="p-3 lg:p-4 hover:text-black text-current cursor-pointer">
                        Custom details - Powder <br /> Coat Paint
                        <span></span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </header>

      {!!showNav && (
        <div className="bg-primary fixed inset-0 z-20">
          <div className="h-screen flex place-items-center nav-section">
            <div className="max-w-md mx-auto">
              <nav className="text-center text-black uppercase">
                <ul>
                  <li className="cursor-pointer mb-2 font-acuminpro" onClick={() => setShowNav(false)}>
                    <Link href="/">
                      <h3 className="min-h-[46px] md:min-h-[72px] text-3xl md:text-6xl hover:text-4xl hover:md:text-7xl font-black transition-all origin-center">
                        Home
                      </h3>
                    </Link>
                  </li>
                  <li className="cursor-pointer mb-2 font-acuminpro">
                    <Link href="/contact">
                      <h3 className="min-h-[46px] md:min-h-[72px] text-3xl md:text-6xl hover:text-4xl hover:md:text-7xl font-black transition-all origin-center">
                        Contact
                      </h3>
                    </Link>
                  </li>
                  <li className="cursor-pointer mb-6 font-acuminpro">
                    <Link href="/about">
                      <h3 className="min-h-[46px] md:min-h-[72px] text-3xl md:text-6xl hover:text-4xl hover:md:text-7xl font-black transition-all origin-center">
                        About
                      </h3>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/pdf/Privacy-Policy.pdf">
                      <a target="_blank">
                        <h4 className="text-base md:text-2xl hover:underline mb-2">Privacy Policy</h4>
                      </a>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/pdf/Terms-Conditions.pdf">
                      <a target="_blank">
                        <h4 className="text-base md:text-2xl hover:underline mb-2">Terms and Conditions</h4>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
