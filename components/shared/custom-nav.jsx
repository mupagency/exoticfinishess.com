export const NavWrap = ({ children }) => {
  return (
    <nav className="flex justify-center py-12 px-4">
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">{children}</div>
    </nav>
  );
};

export const NavItem = ({ children, title = "", type = "" }) => {
  return (
    <div className="relative max-h-[180px] lg:max-h-full">
      <div className="relative z-0">{children}</div>
      <div className="absolute inset-0 bg-stone-900 bg-opacity-60 hover:bg-opacity-0 transition-colors z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
        <h2 className="mb-2 text-white uppercase text-sm md:text-xl lg:text-2xl font-bold text-center px-4">{title}</h2>
        <div className="flex justify-center text-white">
          {type == "xpel" && (
            <img src="/images/navigation/xpel.png" alt="Exotic Finishess Xpel" width="85" height="22" />
          )}
          {type == "3m" && <img src="/images/navigation/3m.png" alt="Exotic Finishess 3M" width="51" height="27" />}
        </div>
      </div>
    </div>
  );
};
