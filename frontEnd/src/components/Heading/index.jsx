import React from "react";

const sizes = {
  xl: "text-7xl font-bold leading-[100%]",
  s: "text-2xl font-bold",
  md: "text-4xl font-bold",
  xs: "text-lg font-bold",
  lg: "text-[56px] font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
