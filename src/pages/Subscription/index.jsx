import React from "react";

import { Img, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const SubscriptionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-abrilfatface items-center justify-end mx-auto pt-[21px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1388px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_menu.svg"
              className="h-[33px] md:mt-0 mt-[9px] w-[33px]"
              alt="menu"
            />
            <Text
              className="common-pointer font-normal md:ml-[0] ml-[603px] not-italic text-black_900 text-left w-auto"
              variant="body1"
              onClick={() => navigate("/home1")}
            >
              HAZE
            </Text>
            <Img
              src="images/img_search.svg"
              className="h-[33px] md:ml-[0] ml-[475px] md:mt-0 mt-[11px] w-[33px]"
              alt="search"
            />
            <Img
              src="images/img_favorite.svg"
              className="h-[33px] ml-4 md:ml-[0] md:mt-0 mt-2.5 w-[33px]"
              alt="favorite"
            />
            <Img
              src="images/img_cart.svg"
              className="h-[33px] ml-4 md:ml-[0] md:mt-0 mt-[11px] w-[33px]"
              alt="cart"
            />
            <Img
              src="images/img_user.svg"
              className="common-pointer h-[33px] ml-4 md:ml-[0] md:mt-0 mt-2 w-[33px]"
              onClick={() => navigate("/login")}
              alt="user"
            />
          </div>
          <div className="flex flex-col font-hahmlet items-center justify-start w-full">
            <div className="h-[938px] md:px-5 relative w-full">
              <Line className="bg-black_900 h-px mx-auto w-full" />
              <div className="absolute h-[938px] inset-[0] justify-center m-auto w-full">
                <Img
                  src="images/img_pexelscottonbr.png"
                  className="h-[938px] m-auto object-cover w-full"
                  alt="pexelscottonbr"
                />
                <div className="absolute flex flex-col gap-12 inset-x-[0] items-center justify-start mx-auto top-[5%] w-[63%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="font-dosis font-extrabold text-left text-white_A700 w-auto"
                      variant="body1"
                    >
                      Welcome Rohi!
                    </Text>
                    <div className="flex flex-col font-inter items-center justify-start mt-[45px] w-full">
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
                          <Button className="bg-white_A700 border border-black_900 border-solid cursor-pointer font-bold leading-[normal] mb-auto min-w-[116px] ml-auto mr-[355px] mt-[-0.5px] py-[9px] text-[13px] text-black_900 text-center w-auto z-[1]">
                            Subscription
                          </Button>
                          <div className="flex flex-row gap-[38px] items-start justify-center mb-auto ml-[214px] mt-[-NaNpx] w-[22%] z-[1]">
                            <Text
                              className="common-pointer text-left text-white_A700 w-auto"
                              variant="body12"
                              onClick={() => navigate("/orderdetails")}
                            >
                              Order Details
                            </Text>
                            <Text
                              className="common-pointer text-black_900 text-left w-auto"
                              variant="body12"
                              onClick={() => navigate("/wishlist")}
                            >
                              My Wishlist
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-center justify-center mb-auto ml-auto mr-[89px] mt-[-NaNpx] w-[26%] z-[1]">
                            <Text
                              className="common-pointer text-left text-white_A700 w-auto"
                              variant="body12"
                              onClick={() => navigate("/help")}
                            >
                              Help
                            </Text>
                            <Text
                              className="common-pointer text-left text-white_A700 w-auto"
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
                      className="font-cormorantgaramond font-normal mt-[52px] not-italic text-left text-white_A700 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Subscription
                    </Text>
                  </div>
                  <div className="bg-bluegray_100_c9 flex flex-col gap-[34px] items-center justify-end w-[32%] md:w-full">
                    <Text
                      className="mt-[68px] not-italic text-black_900 text-center"
                      variant="body10"
                    >
                      <>
                        Enjoy Jewellery as accessory,
                        <br />A New jewellery everytime, at a substantial lower
                        cost{" "}
                      </>
                    </Text>
                    <div className="bg-gray_900_ce h-[52px] w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3 items-start justify-between max-w-[1430px] mx-auto md:px-5 w-full">
              <div className="h-[731px] md:mt-0 mt-[22px] relative w-1/2 md:w-full">
                <Text
                  className="font-normal m-auto not-italic text-black_900 text-center"
                  variant="body1"
                >
                  <>
                    Haze Subscription is an annual subscription to enjoy
                    jewellery as an accessory throughout the year.
                    <br />
                    Want to have HAZE Subscription?
                    <br />
                    Know More
                    <br />
                    Haze gives you an opportunity to have a large closet of the
                    most exquisite and internationally certified jewellery
                    through a smart and cost effective solution.
                  </>
                </Text>
                <div className="absolute border-8 border-pink_50 border-solid bottom-[18%] h-[97px] inset-x-[0] mx-auto w-1/2"></div>
              </div>
              <Img
                src="images/img_pexelsviestudio6167403.png"
                className="md:flex-1 h-[973px] sm:h-auto object-cover w-auto md:w-full"
                alt="pexelsviestudio"
              />
            </div>
            <div className="flex overflow-auto md:px-5 relative w-full">
              <div className="bg-bluegray_100_c9 border border-black_900 border-solid flex flex-col justify-end my-auto w-1/2">
                <Text
                  className="font-normal md:ml-[0] ml-[203px] mr-[188px] mt-12 not-italic text-black_900 text-center w-auto"
                  as="h6"
                  variant="h6"
                >
                  GET IN TOUCH
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[149px] mr-[97px] mt-[17px] not-italic text-black_900 text-center"
                  variant="body6"
                >
                  <>
                    Reach us on
                    <br />
                    +91 8888999777
                    <br />
                    sales@haze.com
                  </>
                </Text>
                <div className="bg-gray_900_ce h-[52px] mt-[45px] w-full"></div>
              </div>
              <div className="bg-bluegray_100_c9 border border-black_900 border-solid flex flex-col items-center justify-end ml-[-1px] my-auto w-[51%] z-[1]">
                <Text
                  className="font-normal mt-[49px] not-italic text-black_900 text-center w-auto"
                  as="h6"
                  variant="h6"
                >
                  REQUEST A CALLBACK
                </Text>
                <Text
                  className="border-4 border-black_900 border-solid font-normal mt-[39px] not-italic pb-2 sm:px-5 px-[35px] text-black_900 text-center w-auto"
                  variant="body3"
                >
                  CLICK HERE
                </Text>
                <div className="bg-gray_900_ce h-[52px] mt-[49px] w-full"></div>
              </div>
            </div>
            <div className="font-dosis h-[307px] overflow-auto md:px-5 relative w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-gray_100 flex items-end justify-start p-7 sm:px-5 w-full">
                  <div className="flex flex-col gap-4 items-center justify-start mb-[22px] mr-[116px] w-[79%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="mb-[3px] not-italic text-black_900 text-left underline w-auto"
                        variant="body2"
                      >
                        About us
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[370px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                        variant="body2"
                      >
                        Help
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[347px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                        variant="body2"
                      >
                        Subscriptions
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="text-black_900_99 text-left"
                        variant="body5"
                      >
                        <>
                          Our story
                          <br />
                          Our goal
                          <br />
                          Our vision
                        </>
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[238px] text-black_900_99 text-left"
                        variant="body5"
                      >
                        <>
                          Contact Us: +91 - 9877452326.
                          <br />
                          020-25667820 (toll free)
                          <br />
                          Mail Us: customercare@haze.com
                        </>
                      </Text>
                      <div className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[156px] md:mt-0 mt-[3px] w-auto md:w-full">
                        <Text
                          className="text-black_900_99 text-left w-auto"
                          variant="body5"
                        >
                          Premium Subscription
                        </Text>
                        <Text
                          className="not-italic text-black_900 text-center underline w-auto"
                          variant="body2"
                        >
                          Gifting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black_900 flex items-center justify-end p-[9px] w-full">
                  <Text
                    className="mt-1.5 not-italic text-center text-white_A700 w-auto"
                    variant="body7"
                  ></Text>
                </div>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-gray_100 flex items-end justify-start p-7 sm:px-5 w-full">
                  <div className="flex flex-col gap-4 items-center justify-start mb-[22px] mr-[116px] w-[79%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="common-pointer mb-[3px] not-italic text-black_900 text-left underline w-auto"
                        variant="body2"
                        onClick={() => navigate("/thehazeexperience")}
                      >
                        About us
                      </Text>
                      <Text
                        className="common-pointer md:ml-[0] ml-[370px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                        variant="body2"
                        onClick={() => navigate("/help")}
                      >
                        Help
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[347px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                        variant="body2"
                      >
                        Subscriptions
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="common-pointer text-black_900_99 text-left"
                        variant="body5"
                        onClick={() => navigate("/thehazeexperience")}
                      >
                        <>
                          Our story
                          <br />
                          Our goal
                          <br />
                          Our vision
                        </>
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[238px] text-black_900_99 text-left"
                        variant="body5"
                      >
                        <>
                          Contact Us: +91 - 9877452326.
                          <br />
                          020-25667820 (toll free)
                          <br />
                          Mail Us: customercare@haze.com
                        </>
                      </Text>
                      <div className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[156px] md:mt-0 mt-[3px] w-auto md:w-full">
                        <Text
                          className="text-black_900_99 text-left w-auto"
                          variant="body5"
                        >
                          Premium Subscription
                        </Text>
                        <Text
                          className="common-pointer not-italic text-black_900 text-center underline w-auto"
                          variant="body2"
                          onClick={() => navigate("/gifting")}
                        >
                          Gifting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="bg-black_900 h-[53px] justify-center max-w-[1440px] md:max-w-full not-italic pb-[9px] pt-[15px] sm:px-5 px-[35px] text-center text-white_A700 w-full"
                  variant="body7"
                ></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
