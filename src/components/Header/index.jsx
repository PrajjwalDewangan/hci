import React from "react";

import { Img, Text, Line } from "components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-[18px] items-center justify-center mt-[18px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
            <Img
              src="images/img_menu.svg"
              className="h-[33px] md:mt-0 mt-3 w-[33px]"
              alt="menu"
            />
            <Text
              className="common-pointer font-abrilfatface font-normal md:ml-[0] ml-[610px] not-italic text-black_900 text-left w-auto"
              variant="body1"
              onClick={() => navigate("/home1")}
            >
              HAZE
            </Text>
            <Img
              src="images/img_search.svg"
              className="h-[33px] md:ml-[0] ml-[468px] md:mt-0 mt-3.5 w-[33px]"
              alt="search"
            />
            <Img
              src="images/img_favorite.svg"
              className="common-pointer h-[33px] ml-4 md:ml-[0] md:mt-0 mt-[13px] w-[33px]"
              onClick={() => navigate("/wishlist")}
              alt="favorite"
            />
            <Img
              src="images/img_cart.svg"
              className="h-[33px] ml-4 md:ml-[0] md:mt-0 mt-3.5 w-[33px]"
              alt="cart"
            />
            <Img
              src="images/img_user.svg"
              className="common-pointer h-[33px] ml-4 md:ml-[0] md:mt-0 mt-[11px] w-[33px]"
              onClick={() => navigate("/login")}
              alt="user"
            />
          </div>
          <Line className="bg-black_900 h-px w-full" />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
