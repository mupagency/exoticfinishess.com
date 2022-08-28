import Brand from "components/shared/brand";
import Button from "components/shared/button";
import Link from "next/link";

const IntroSection = () => {
  return (
    <div className="bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <img src="/images/home.jpg" alt="" className="w-full h-full object-cover object-center" />
      </div>

      <div className="absolute inset-0 grid grid-cols-2 z-0">
        <div className="bg-black bg-opacity-80 hover:bg-opacity-10 transition-colors"></div>
        <div className="bg-black bg-opacity-80 hover:bg-opacity-10 transition-colors"></div>
      </div>

      <div className="absolute top-3/4 left-12 md:left-48 floating z-0 pointer-events-none">
        <img src="/images/icons/icon-ring-gold.png" alt="floating ring" width={49} height={49} />
      </div>
      <div className="absolute top-1/4 right-12 md:right-48 floating z-0 pointer-events-none">
        <img src="/images/icons/icon-ring-gold.png" alt="floating ring" width={49} height={49} />
      </div>

      <div className="relative min-h-[calc(100vh-60px)] grid place-content-center px-4 z-0 pointer-events-none">
        <div className="relative mx-auto max-w-6xl z-10">
          <h3 className="text-center mb-12 uppercase">Welcome To</h3>
          <div className="flex justify-center mb-12">
            <div className="w-24 md:w-auto">
              <Brand />
            </div>
          </div>
          <hgroup className="text-center mb-16">
            <h1 className="mb-4 md:mb-0 leading-none font-acuminpro text-2xl lg:text-5xl xl:text-7xl uppercase">
              Skins for everything
            </h1>
            <h2 className="mb-4 text-sm md:text-2xl">
              What would you like to wrap or protect with our custom vinyl skins?
            </h2>
          </hgroup>
          <div className="mx-auto max-w-5xl flex justify-between">
            <Link href="/visual-graphics/">
              <Button> Vinyl graphics & films </Button>
            </Link>
            <Link href="/vehicle-customization/">
              <Button> Vehicle customization </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
