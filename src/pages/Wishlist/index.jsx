import React from "react";

import Header from "components/Header";
import { Img, Text, Line, Button, List } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="h-[938px] md:px-5 relative w-full">
          <Img
            src="images/img_pexelscottonbr.png"
            className="h-[938px] m-auto object-cover w-full"
            alt="pexelscottonbr"
          />
          <div className="absolute flex flex-col justify-start left-[15%] top-[5%] w-[63%]">
            <Text
              className="font-dosis font-extrabold md:ml-[0] ml-[361px] text-left text-white_A700 w-auto"
              variant="body1"
            >
              Welcome Rohi!
            </Text>
            <div className="flex flex-col font-inter items-center justify-start mt-6 w-full">
              <div className="h-[34px] relative w-full">
                <Text
                  className="common-pointer ml-[92px] my-auto text-gray_300 text-left w-auto"
                  variant="body12"
                  onClick={() => navigate("/accountdetails")}
                >
                  Account Details
                </Text>
                <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                  <Line className="bg-black_900 h-px mx-auto shadow-bs w-full" />
                  <Button className="bg-white_A700 cursor-pointer font-bold leading-[normal] mb-auto min-w-[116px] ml-[315px] mt-[-0.5px] py-[9px] text-[13px] text-black_900 text-center w-auto z-[1]">
                    My Wishlist
                  </Button>
                  <Text
                    className="common-pointer mb-auto ml-[214px] mt-[-NaNpx] text-left text-white_A700 w-auto z-[1]"
                    variant="body12"
                    onClick={() => navigate("/orderdetails")}
                  >
                    Order Details
                  </Text>
                  <div className="flex flex-row items-center justify-center mb-auto ml-auto mr-[89px] mt-[-NaNpx] w-[41%] z-[1]">
                    <Text
                      className="common-pointer text-left text-white_A700 w-auto"
                      variant="body12"
                      onClick={() => navigate("/")}
                    >
                      Subscription
                    </Text>
                    <Text
                      className="common-pointer ml-[50px] text-left text-white_A700 w-auto"
                      variant="body12"
                      onClick={() => navigate("/help")}
                    >
                      Help
                    </Text>
                    <Text
                      className="common-pointer ml-[65px] text-left text-white_A700 w-auto"
                      variant="body12"
                      onClick={() => navigate("/thehazeexperience")}
                    >
                      The Haze Experience
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-black_900 h-px shadow-bs w-full" />
            </div>
            <Text
              className="font-cormorantgaramond font-normal md:ml-[0] ml-[342px] mt-[51px] not-italic text-left text-white_A700 w-auto"
              as="h3"
              variant="h3"
            >
              My Wishlist
            </Text>
            <List
              className="sm:flex-col flex-row font-hahmlet md:gap-10 gap-[93px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[187px] mt-[89px] w-[73%]"
              orientation="horizontal"
            >
              <div className="bg-bluegray_100_c9 flex flex-col md:gap-10 gap-[95px] items-center justify-end w-full">
                <Text
                  className="font-normal mt-[104px] not-italic text-black_900 text-left w-auto"
                  variant="body1"
                >
                  HAZE
                </Text>
                <div className="bg-gray_900_e5 flex flex-row gap-[15px] items-center justify-start p-[9px] w-full">
                  <Img
                    src="images/img_eye.svg"
                    className="h-[33px] ml-[3px] w-[33px]"
                    alt="eye"
                  />
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body9"
                  >
                    Wishlist 1
                  </Text>
                </div>
              </div>
              <div className="bg-bluegray_100_c9 flex flex-col md:gap-10 gap-[95px] items-center justify-end w-full">
                <Text
                  className="font-normal mt-[104px] not-italic text-black_900 text-left w-auto"
                  variant="body1"
                >
                  HAZE
                </Text>
                <div className="bg-gray_900_e5 flex flex-row gap-5 items-start justify-start p-[5px] w-full">
                  <Img
                    src="images/img_grid.svg"
                    className="h-[33px] ml-[9px] mt-[9px] w-[33px]"
                    alt="grid"
                  />
                  <Text
                    className="font-normal mt-[11px] not-italic text-left text-white_A700 w-auto"
                    variant="body9"
                  >
                    Create Wishlist{" "}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <Footer1 className="flex font-dosis items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default WishlistPage;
