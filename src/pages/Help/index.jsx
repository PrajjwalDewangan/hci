import React from "react";

import Header from "components/Header";
import { Img, Text, Line } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const HelpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-abrilfatface items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="h-[459px] md:px-5 relative w-full">
            <Img
              src="images/img_pexelscottonbr.png"
              className="h-[459px] m-auto object-cover w-full"
              alt="pexelscottonbr"
            />
            <div className="absolute flex flex-col items-center justify-start left-[16%] top-[9%] w-[63%]">
              <Text
                className="font-dosis font-extrabold text-left text-white_A700 w-auto"
                variant="body1"
              >
                Welcome Rohi!
              </Text>
              <div className="flex flex-col font-inter items-center justify-start mt-7 w-full">
                <div className="h-[34px] relative w-full">
                  <Text
                    className="common-pointer ml-[92px] my-auto text-left text-white_A700 w-auto"
                    variant="body12"
                    onClick={() => navigate("/accountdetails")}
                  >
                    Account Details
                  </Text>
                  <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                    <Line className="bg-black_900 h-px mx-auto shadow-bs w-full" />
                    <Text
                      className="bg-white_A700 h-[34px] justify-center mb-auto ml-auto mr-[239px] mt-[-0.5px] sm:px-5 px-[35px] py-2 text-black_900 text-left w-[116px] z-[1]"
                      variant="body12"
                    >
                      Help
                    </Text>
                    <div className="flex flex-row items-start justify-center mb-auto ml-[214px] mt-[-NaNpx] w-[36%] z-[1]">
                      <Text
                        className="common-pointer text-left text-white_A700 w-auto"
                        variant="body12"
                        onClick={() => navigate("/orderdetails")}
                      >
                        Order Details
                      </Text>
                      <Text
                        className="common-pointer ml-[37px] text-left text-white_A700 w-auto"
                        variant="body12"
                        onClick={() => navigate("/wishlist")}
                      >
                        My Wishlist
                      </Text>
                      <Text
                        className="common-pointer ml-10 text-left text-white_A700 w-auto"
                        variant="body12"
                        onClick={() => navigate("/")}
                      >
                        Subscription
                      </Text>
                    </div>
                    <Text
                      className="common-pointer mb-auto ml-auto mr-[89px] mt-[-NaNpx] text-left text-white_A700 w-auto z-[1]"
                      variant="body12"
                      onClick={() => navigate("/thehazeexperience")}
                    >
                      The Haze Experience
                    </Text>
                  </div>
                </div>
                <Line className="bg-black_900 h-px shadow-bs w-full" />
              </div>
              <Text
                className="font-cormorantgaramond mt-[46px] text-left text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                Have a question
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-dosis gap-2 items-start justify-start md:ml-[0] ml-[114px] mt-[37px] md:px-5 w-[79%] md:w-full">
          <Text
            className="font-medium ml-0.5 md:ml-[0] text-left text-pink_500 w-auto"
            as="h6"
            variant="h6"
          >
            FAQs
          </Text>
          <Line className="bg-orange_A700 h-1 w-full" />
        </div>
        <div className="font-dosis h-[778px] md:h-[789px] md:ml-[0] ml-[113px] mt-[11px] md:px-5 relative w-[79%] md:w-full">
          <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
            <Text
              className="font-medium text-black_900 text-left w-auto"
              variant="body4"
            >
              What materials are used in your jewelry?
            </Text>
            <Text
              className="font-medium mt-[46px] text-black_900 text-left w-auto"
              variant="body4"
            >
              How do I know what size ring to order?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              Can I customize or personalize my jewelry?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              How do I care for my jewelry?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              Do you offer any warranties or guarantees on your products?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              What is your return policy?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              How long does shipping take?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              Do you offer international shipping?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              What forms of payment do you accept?
            </Text>
            <Text
              className="font-medium mt-11 text-black_900 text-left w-auto"
              variant="body4"
            >
              How do I track my order?
            </Text>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[3%] w-full">
            <Img
              src="images/img_arrow8.svg"
              className="h-px md:ml-[0] ml-[1096px] w-auto"
              alt="arrowEight"
            />
            <Line className="bg-black_900 h-px mt-7 w-full" />
            <Img
              src="images/img_arrow8.svg"
              className="h-px md:ml-[0] ml-[1096px] mt-[59px] w-auto"
              alt="arrowNine"
            />
          </div>
          <Line className="absolute bg-black_900 h-px inset-x-[0] mx-auto top-[18%] w-full" />
          <div className="absolute flex flex-col gap-7 inset-x-[0] justify-start mx-auto top-[26%] w-full">
            <Img
              src="images/img_arrow8.svg"
              className="h-px md:ml-[0] ml-[1097px] w-auto"
              alt="arrowTen"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <Line className="bg-black_900 h-px w-full" />
              <Img
                src="images/img_arrow8.svg"
                className="h-px md:ml-[0] ml-[1097px] mt-[45px] w-auto"
                alt="arrowEleven"
              />
              <Line className="bg-black_900 h-px mt-[29px] w-full" />
              <Img
                src="images/img_arrow8.svg"
                className="h-px md:ml-[0] ml-[1097px] mt-[57px] w-auto"
                alt="arrowTwelve"
              />
              <Line className="bg-black_900 h-px mt-7 w-full" />
              <Img
                src="images/img_arrow8.svg"
                className="h-px md:ml-[0] ml-[1097px] mt-[46px] w-auto"
                alt="arrowThirteen"
              />
              <Line className="bg-black_900 h-px mt-7 w-full" />
              <Img
                src="images/img_arrow8.svg"
                className="h-px md:ml-[0] ml-[1097px] mt-[52px] w-auto"
                alt="arrowFourteen"
              />
            </div>
          </div>
          <Line className="absolute bg-black_900 bottom-[29%] h-px inset-x-[0] mx-auto w-full" />
          <div className="absolute bottom-[1%] flex flex-col gap-8 inset-x-[0] justify-start mx-auto w-full">
            <Img
              src="images/img_arrow8.svg"
              className="h-px md:ml-[0] ml-[1097px] w-auto"
              alt="arrowFifteen"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <Line className="bg-black_900 h-px w-full" />
              <Img
                src="images/img_arrow8.svg"
                className="h-px md:ml-[0] ml-[1097px] mt-[54px] w-auto"
                alt="arrowSixteen"
              />
              <Line className="bg-black_900 h-px mt-[25px] w-full" />
              <Img
                src="images/img_arrow8.svg"
                className="h-px md:ml-[0] ml-[1097px] mt-[55px] w-auto"
                alt="arrowSeventeen"
              />
            </div>
          </div>
        </div>
        <Line className="bg-black_900 h-px md:ml-[0] ml-[116px] mt-[17px] w-[79%]" />
        <div className="flex font-dosis items-center mt-[70px] w-full">
          <Footer1 className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HelpPage;
