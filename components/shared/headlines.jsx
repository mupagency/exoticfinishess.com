export const Headline = ({ title = "" }) => {
  return (
    <h2 className="uppercase text-center text-current font-acuminpro text-4xl md:text-[clamp(36px,_5vw,_90px)] leading-tight">
      {title}
    </h2>
  );
};

export const HeadlineGroup = ({ category = "", title = "" }) => {
  return (
    <hgroup className="mx-auto max-w-3xl">
      <h3 className="mb-4 uppercase text-center text-current font-acuminpro font-black text-2xl md:text-[clamp(24px,_5vw,_64px)] leading-none">
        {title}
      </h3>
      <h4 className="uppercase text-center text-current font-light text-sm md:text-base tracking-extrawide md:tracking-[1.2rem] leading-none">
        {category}
      </h4>
    </hgroup>
  );
};
