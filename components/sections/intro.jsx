import Button from "components/shared/button";
import Link from "next/link";

const IntroSection = () => {
  return (
    <div className="bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <img src="/images/intro-background.jpg" alt="" className="w-full h-full object-cover object-center" />
      </div>

      <div className="absolute top-1/2 md:top-3/4 left-6 md:left-48 floating z-0 pointer-events-none">
        <img src="/images/icons/icon-ring-gold.png" alt="floating ring" width={49} height={49} />
      </div>
      <div className="absolute top-1/4 right-6 md:right-48 floating delay-200 z-0 pointer-events-none">
        <img src="/images/icons/icon-ring-gold.png" alt="floating ring" width={49} height={49} />
      </div>

      <div className="relative min-h-[64vh] md:min-h-[calc(100vh-60px)] grid place-content-center px-4 z-0">
        <div className="relative mx-auto max-w-6xl z-10">
          <div className="mx-auto max-w-5xl flex flex-col gap-4 items-center pointer-events-auto mb-16">
            <Link href="/wall-graphics/">
              <a>
                <Button> Wall Graphics </Button>
              </a>
            </Link>
            <Link href="/window-graphics/">
              <a>
                <Button> Window Graphics </Button>
              </a>
            </Link>
            <Link href="/decals-stickers/">
              <a>
                <Button> Decals / Stickers </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
