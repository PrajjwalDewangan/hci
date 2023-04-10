import React from "react";

import { Img, Text, Line, Button, Input } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const OrderDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-abrilfatface items-center justify-end mx-auto pt-[18px] w-full">
        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1388px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_menu.svg"
              className="h-[33px] md:mt-0 mt-3 w-[33px]"
              alt="menu"
            />
            <Text
              className="font-normal md:ml-[0] ml-[610px] not-italic text-black_900 text-left w-auto"
              variant="body1"
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
          <div className="flex flex-col font-dosis items-center justify-start w-full">
            <div className="h-[938px] md:px-5 relative w-full">
              <Line className="bg-black_900 h-px mx-auto w-full" />
              <div className="absolute h-[938px] inset-[0] justify-center m-auto w-full">
                <Img
                  src="images/img_pexelscottonbr.png"
                  className="h-[938px] m-auto object-cover w-full"
                  alt="pexelscottonbr"
                />
                <div className="absolute flex flex-col justify-start left-[15%] top-[5%] w-[63%]">
                  <Text
                    className="font-dosis font-extrabold md:ml-[0] ml-[358px] text-left text-white_A700 w-auto"
                    variant="body1"
                  >
                    Welcome Rohi!
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start mt-7 w-full">
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
                        <Button className="bg-white_A700 cursor-pointer font-bold leading-[normal] mb-auto min-w-[116px] ml-[199px] mt-[-0.5px] py-[9px] text-[13px] text-black_900 text-center w-auto z-[1]">
                          Order Details
                        </Button>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-auto ml-auto mr-[89px] mt-[-NaNpx] w-[53%] z-[1]">
                          <Text
                            className="text-left text-white_A700 w-auto"
                            variant="body12"
                          >
                            My Wishlist
                          </Text>
                          <Text
                            className="common-pointer ml-10 sm:ml-[0] text-left text-white_A700 w-auto"
                            variant="body12"
                            onClick={() => navigate("/")}
                          >
                            Subscription
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[50px] text-left text-white_A700 w-auto"
                            variant="body12"
                          >
                            Help
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[65px] text-left text-white_A700 w-auto"
                            variant="body12"
                          >
                            The Haze Experience
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-black_900 h-px shadow-bs w-full" />
                  </div>
                  <Text
                    className="font-cormorantgaramond font-normal md:ml-[0] ml-[272px] mt-[41px] not-italic text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Track Your Order
                  </Text>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[183px] mt-[60px] w-[76%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex font-inter h-[49px] items-start justify-start p-2 w-full"
                      style={{
                        backgroundImage: "url('images/img_group30.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-0.5 md:ml-[0] ml-[15px] not-italic text-black_900 text-left w-auto"
                        variant="body6"
                      >
                        Email
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex font-inter h-[49px] items-start justify-start mt-[61px] p-[9px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group30.svg')",
                      }}
                    >
                      <Text
                        className="font-normal ml-3.5 md:ml-[0] not-italic text-black_900 text-left w-auto"
                        variant="body6"
                      >
                        Order Number
                      </Text>
                    </div>
                    <Input
                      wrapClassName="bg-gray_900_e5 mt-[81px] px-[35px] py-2 rounded-[26px] w-[42%]"
                      className="font-hahmlet font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-white_A700 sm:px-5 sm:text-xl text-2xl text-left text-white_A700 w-full"
                      name="groupTwentySix"
                      placeholder="TRACK ORDER"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <Footer1 className="flex items-center justify-center mt-[3px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
