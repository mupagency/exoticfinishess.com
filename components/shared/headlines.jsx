export const Headline = ({ title = "" }) => {
  return (
    <h2 className="uppercase text-center text-current font-acuminpro font-black text-4xl md:text-[clamp(36px,_5vw,_90px)] leading-tight">
      {title}
    </h2>
  );
};

export const HeadlineGroup = ({ category = "", title = "" }) => {
  return (
    <hgroup>
      <h4 className="uppercase text-center text-black font-light text-sm md:text-base tracking-extrawide md:tracking-[1.2rem] leading-none">
        {category}
      </h4>
      <h3 className="uppercase text-center text-black font-acuminpro font-black text-4xl md:text-[clamp(36px,_5vw,_72px)] leading-none">
        {title}
      </h3>
    </hgroup>
  );
};
