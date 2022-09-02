import React from "react";

const Product = ({ children }) => {
  return <div>{children}</div>;
};

export default Product;

const Head = ({ children }) => {
  return (
    <div className="pt-8 lg:py-16 mb-4 lg:mb-0">
      <div className="grid lg:grid-cols-2 items-center">{children}</div>
    </div>
  );
};

Product.Head = Head;

const Title = ({ children }) => {
  return (
    <h1 className="break-words uppercase font-acuminpro text-current font-black text-3xl lg:text-5xl xl:text-7xl mb-2 md:mb-0 pr-0 lg:pr-8">
      {children}
    </h1>
  );
};

Product.Title = Title;

const Subtitle = ({ children }) => {
  return <h2 className="text-lg font-bold uppercase mb-4">{children}</h2>;
};

Product.Subtitle = Subtitle;

const Description = ({ children }) => {
  return <div className="lg:border-l-2 lg:border-black lg:pl-12 py-4 lg:py-8 text-lg space-y-4">{children}</div>;
};

Product.Description = Description;

const Parragraph = ({ children }) => {
  return <p className="text-base md:text-lg max-w-[60ch] mb-4">{children}</p>;
};

Product.Parragraph = Parragraph;

const Grid = ({ children }) => {
  return (
    <div className="relative product-grid grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-28 items-center mb-12 lg:mb-16">
      {children}
    </div>
  );
};

Product.Grid = Grid;

const GridItem = ({ children }) => {
  return <div className="product-item order-1">{children}</div>;
};

Product.GridItem = GridItem;

const GridItemImg = ({ children }) => {
  return <div className="product-item order-2 md:order-1">{children}</div>;
};

Product.GridItemImg = GridItemImg;
