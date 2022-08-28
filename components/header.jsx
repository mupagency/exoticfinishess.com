import Brand from "components/shared/brand";
import { MIcon, MinusIcon, PlusIcon, XpelIcon } from "components/shared/icons";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-black z-50" id="header">
        <div className="relative mx-auto max-w-[1920px] flex items-center px-4">
          <div className="flex-none w-56">
            <Link href="/">
              <div className="flex items-center gap-2 text-white text-2xl leading-none font-normal cursor-pointer">
                <span className="w-10">
                  <Brand />
                </span>
                Exotic Finishess
              </div>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center mx-auto">
            <ul className="flex gap-4 text-white text-center">
              <li className="cursor-pointer">
                <Link href="/visual-graphics/">
                  <h3 className="text-xl hover:text-primary leading-none uppercase px-4 py-5">
                    Vinyl Graphics & Films
                  </h3>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/vehicle-customization/">
                  <h3 className="text-xl hover:text-primary leading-none uppercase px-4 py-5">Vehicle Customization</h3>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none w-56">
            <div className="text-white text-right cursor-pointer">
              <div className="w-8 ml-auto" onClick={() => setShowNav((prev) => !prev)}>
                {!showNav ? <PlusIcon /> : <MinusIcon />}
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="relative top-full left-0 right-0 bg-neutral-900 bg-opacity-80 md:rounded-b-2xl">
        <div className="overflow-x-auto touch-pan-x whitespace-nowrap px-8">
          <ul className="text-center leading-none text-white uppercase text-xs">
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/paint-protection-film/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Paint Protection Film
                  <div className="flex justify-center w-10 mx-auto">
                    <XpelIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/window-tint/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Window Tint
                  <div className="flex justify-center w-10 mx-auto">
                    <XpelIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/vehicle-wraps/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Vehicle Wraps
                  <div className="flex justify-center w-5 mx-auto">
                    <MIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/ceramic/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Ceramic
                  <div className="flex justify-center w-10 mx-auto">
                    <XpelIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/powder-coat-paint/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Custom details - Powder <br /> Coat Paint
                  <span></span>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="text-center leading-none text-white uppercase text-xs">
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/window-wall-graphics/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Window Wall Graphics
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/commercial-vehicle-wraps/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Commercial Vehicle Wraps
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/sticker-manufacturer/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  sticker Manufacturer
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/window-frost-privacy-film/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Window Frost Privacy Film
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/solar-window-film/">
                <div className="px-4 py-4 hover:text-primary cursor-pointer">
                  Solar Window Film
                  <span></span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="relative top-full left-0 right-0">
        <div className="overflow-x-auto touch-pan-x whitespace-nowrap px-8 border-b border-neutral-400">
          <ul className="text-center leading-none text-neutral-400 uppercase text-xs ">
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/paint-protection-film/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Paint Protection Film
                  <div className="flex justify-center w-10 mx-auto">
                    <XpelIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/window-tint/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Window Tint
                  <div className="flex justify-center w-10 mx-auto">
                    <XpelIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/vehicle-wraps/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Vehicle Wraps
                  <div className="flex justify-center w-5 mx-auto">
                    <MIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/ceramic/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Ceramic
                  <div className="flex justify-center w-10 mx-auto">
                    <XpelIcon />
                  </div>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/vehicle-customization/powder-coat-paint/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Custom details - Powder <br /> Coat Paint
                  <span></span>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="text-center leading-none text-neutral-400 uppercase text-xs">
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/window-wall-graphics/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Window Wall Graphics
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/commercial-vehicle-wraps/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Commercial Vehicle Wraps
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/sticker-manufacturer/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  sticker Manufacturer
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/window-frost-privacy-film/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Window Frost Privacy Film
                  <span></span>
                </div>
              </Link>
            </li>
            <li className="inline-block min-w-[220px] align-top">
              <Link href="/visual-graphics/solar-window-film/">
                <div className="px-4 py-4 hover:text-black cursor-pointer">
                  Solar Window Film
                  <span></span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {!!showNav && (
        <div className="bg-primary fixed inset-0 z-20">
          <div className="h-screen flex place-items-center nav-section">
            <div className="max-w-sm mx-auto">
              <nav className="text-center text-black uppercase">
                <ul>
                  <li className="cursor-pointer mb-2 font-acuminpro">
                    <Link href="/" onClick={() => setShowNav(false)}>
                      <h3 className="text-4xl md:text-7xl font-black">Home</h3>
                    </Link>
                  </li>
                  <li className="cursor-pointer mb-2 font-acuminpro">
                    <Link href="/contact">
                      <h3 className="text-4xl md:text-7xl font-black">Contact</h3>
                    </Link>
                  </li>
                  <li className="cursor-pointer mb-6 font-acuminpro">
                    <Link href="/about">
                      <h3 className="text-4xl md:text-7xl font-black">About</h3>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/privacy-policy">
                      <h4 className="text-base md:text-2xl">Privacy Policy</h4>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/terms-and-conditions">
                      <h4 className="text-base md:text-2xl">Terms and Conditions</h4>
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
