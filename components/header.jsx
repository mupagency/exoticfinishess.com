import { PlusIcon } from "components/shared/icons";
import Link from "next/link";
import Brand from "./shared/brand";

const Header = () => {
  return (
    <header className="sticky top-0 bg-black z-50" id="header">
      <div className="relative mx-auto max-w-[1920px] flex items-center px-4 py-2">
        <Link href="/">
          <div className="flex-1 flex items-center gap-2 text-white text-2xl leading-none font-normal cursor-pointer">
            <span className="w-10">
              <Brand />
            </span>
            Exotic Finishess
          </div>
        </Link>
        <div className="flex-none">
          <div className="text-white">
            <div className="w-8">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
