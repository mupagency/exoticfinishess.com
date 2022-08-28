import Brand from "components/shared/brand";
import { MinusIcon, PlusIcon } from "components/shared/icons";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-black z-50" id="header">
        <div className="relative mx-auto max-w-[1920px] flex justify-between px-4 py-2">
          <Link href="/">
            <div className="flex-none flex items-center gap-2 text-white text-2xl leading-none font-normal cursor-pointer">
              <span className="w-10">
                <Brand />
              </span>
              Exotic Finishess
            </div>
          </Link>
          <div className="flex-none">
            <div className="text-white cursor-pointer">
              <div className="w-8" onClick={() => setShowNav((prev) => !prev)}>
                {!showNav ? <PlusIcon /> : <MinusIcon />}
              </div>
            </div>
          </div>
        </div>
      </header>
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
