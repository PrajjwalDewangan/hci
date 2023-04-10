import React from "react";

import { Img, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const TheHazeExperiencePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-start justify-start mx-auto w-full">
        <div className="flex flex-col font-abrilfatface items-center w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="flex flex-col gap-[18px] items-center justify-center mt-[18px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                <Img
                  src="images/img_menu.svg"
                  className="h-[33px] md:mt-0 mt-3 w-[33px]"
                  alt="menu"
                />
                <Text
                  className="common-pointer font-normal md:ml-[0] ml-[610px] not-italic text-black_900 text-left w-auto"
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
          <div className="flex font-cabin h-[938px] justify-end md:px-5 relative w-full">
            <Line className="bg-black_900 h-px mb-[108px] mt-auto mx-auto w-[5%]" />
            <div className="absolute h-[938px] inset-[0] justify-center m-auto w-full">
              <div className="h-[938px] m-auto w-full">
                <Img
                  src="images/img_pexelscottonbr_938x1436.png"
                  className="h-[938px] m-auto object-cover w-full"
                  alt="pexelscottonbr"
                />
                <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[4%] w-[86%]">
                  <Text
                    className="font-dosis font-extrabold md:ml-[0] ml-[475px] text-left text-white_A700 w-auto"
                    variant="body1"
                  >
                    Welcome Rohi!
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[151px] mt-[11px] w-[74%] md:w-full">
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
                        <Button className="bg-white_A700 cursor-pointer font-bold leading-[normal] mb-auto min-w-[165px] ml-auto mr-[75px] mt-[-0.5px] py-[9px] text-[13px] text-black_900 text-center w-auto z-[1]">
                          The Haze Experience
                        </Button>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center mb-auto ml-[214px] mt-[-NaNpx] w-[45%] z-[1]">
                          <Text
                            className="common-pointer text-left text-white_A700 w-auto"
                            variant="body12"
                            onClick={() => navigate("/orderdetails")}
                          >
                            Order Details
                          </Text>
                          <Text
                            className="common-pointer sm:ml-[0] ml-[37px] text-left text-white_A700 w-auto"
                            variant="body12"
                            onClick={() => navigate("/wishlist")}
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
                            className="common-pointer sm:ml-[0] ml-[50px] text-left text-white_A700 w-auto"
                            variant="body12"
                            onClick={() => navigate("/help")}
                          >
                            Help
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-black_900 h-px shadow-bs w-full" />
                  </div>
                  <Text
                    className="font-cormorantgaramond font-normal md:ml-[0] ml-[341px] mt-[43px] not-italic text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    The Haze Experience
                  </Text>
                  <div className="bg-bluegray_100_c9 border border-black_900 border-solid h-[419px] mt-[33px] rounded-[33px] w-full"></div>
                </div>
              </div>
              <Text
                className="absolute bottom-[21%] font-normal inset-x-[0] mx-auto not-italic text-black_900 text-center w-[83%] sm:w-full"
                as="h6"
                variant="h6"
              >
                HAZE was an idea that we created in 2021 to make an efficient
                and user-friendly jewellery website. It started with simplifying
                the display and providing an enthralling and happy experience to
                the user. Soon our planning gave way to the website and we kept
                on going improving the layout which led to the present one.{" "}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex font-dosis items-end mt-[196px] md:px-10 sm:px-5 px-[58px] w-full">
          <Text
            className="font-normal not-italic text-black_900 text-center"
            variant="body4"
          ></Text>
        </div>
        <Text
          className="font-dosis font-normal md:ml-[0] ml-[102px] mt-[306px] not-italic text-black_900 text-center"
          variant="body4"
        ></Text>
        <div className="flex font-dosis items-center mt-[114px] w-full">
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-gray_100 flex items-end justify-start p-7 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-center justify-start mb-[22px] mr-28 w-[79%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                    <Text
                      className="mb-[3px] not-italic text-black_900 text-left underline w-auto"
                      variant="body2"
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
                      className="common-pointer md:ml-[0] ml-[347px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                      variant="body2"
                      onClick={() => navigate("/")}
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
                className="bg-black_900 h-[53px] justify-center max-w-[1436px] md:max-w-full not-italic pb-[9px] pt-[15px] sm:px-5 px-[35px] text-center text-white_A700 w-full"
                variant="body7"
              ></Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TheHazeExperiencePage;
