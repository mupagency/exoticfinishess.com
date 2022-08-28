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
    <h1 className="uppercase font-acuminpro text-current font-black text-3xl lg:text-5xl xl:text-6xl mb-2 md:mb-0 pr-0 lg:pr-8">
      {children}
    </h1>
  );
};

Product.Title = Title;

const Description = ({ children }) => {
  return <div className="lg:border-l-2 lg:border-black lg:pl-12 py-4 lg:py-8 text-lg">{children}</div>;
};

Product.Description = Description;

const Grid = ({ children }) => {
  return <div className="grid md:grid-cols-2 gap-8 items-center mb-16">{children}</div>;
};

Product.Grid = Grid;

const GridItem = ({ children }) => {
  return <div className="order-1">{children}</div>;
};

Product.GridItem = GridItem;

const GridItemImg = ({ children }) => {
  return <div className="order-2 md:order-1">{children}</div>;
};

Product.GridItemImg = GridItemImg;

const Subtitle = ({ children }) => {
  return <h2 className="text-lg font-bold uppercase mb-6">{children}</h2>;
};

Product.Subtitle = Subtitle;

const Parragraph = ({ children }) => {
  return <p className="text-base md:text-lg max-w-[60ch]">{children}</p>;
};

Product.Parragraph = Parragraph;
