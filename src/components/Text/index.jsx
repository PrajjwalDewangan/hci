import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "font-bold sm:text-5xl md:text-5xl text-[70px]",
  h3: "sm:text-5xl md:text-5xl text-[64px]",
  h4: "text-5xl sm:text-[38px] md:text-[44px]",
  h5: "font-bold sm:text-[35px] md:text-[41px] text-[45px]",
  h6: "sm:text-4xl md:text-[38px] text-[40px]",
  body1: "text-4xl sm:text-[32px] md:text-[34px]",
  body2: "font-normal sm:text-3xl md:text-[32px] text-[34px]",
  body3: "md:text-3xl sm:text-[28px] text-[32px]",
  body4: "text-3xl sm:text-[26px] md:text-[28px]",
  body5: "font-light sm:text-[21px] md:text-[23px] text-[25px]",
  body6: "text-2xl md:text-[22px] sm:text-xl",
  body7: "font-normal text-[22px] sm:text-lg md:text-xl",
  body8: "text-xl",
  body9: "text-base",
  body10: "font-normal text-[15px]",
  body11: "font-semibold text-sm",
  body12: "font-bold text-[13px]",
  body13: "font-normal sm:text-5xl md:text-5xl text-9xl",
  body14: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
