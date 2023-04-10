import React from "react";

import Header from "components/Header";
import { Img, Text, Button, List } from "components";
import Footer from "components/Footer";

const GiftingPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-start mx-auto w-full">
        <Header className="bg-white_A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="font-poppins h-[1189px] md:px-5 relative w-full">
          <Img
            src="images/img_pexelsrodnaep.png"
            className="h-[1189px] m-auto object-cover w-full"
            alt="pexelsrodnaep"
          />
          <div className="absolute bg-gray_900_54 flex h-max inset-[0] items-center justify-center m-auto p-[136px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mb-[81px] w-[85%] md:w-full">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[-2.16px] w-auto"
                as="h4"
                variant="h4"
              >
                Creating Happiness For Your Loved Ones
              </Text>
              <div className="flex items-start justify-start mt-16 self-stretch w-auto md:w-full">
                <div className="bg-white_A700_f2 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[51px] md:px-10 sm:px-5 w-full">
                  <Img
                    src="images/img_location.svg"
                    className="h-9 md:ml-[0] ml-[9px] w-9"
                    alt="location"
                  />
                  <Text
                    className="font-semibold ml-3 md:ml-[0] text-black_900 text-left w-auto"
                    variant="body6"
                  >
                    Need A Gift Now?
                  </Text>
                  <div className="flex md:flex-1 items-center justify-start ml-3 md:ml-[0] md:mt-0 mt-5 w-[49%] md:w-full">
                    <div className="flex h-[59px] justify-end relative w-full">
                      <div className="border border-gray_900_e5 border-solid h-7 mt-auto rounded-md w-[46%]"></div>
                      <div className="absolute flex h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                            <Text
                              className="text-black_900 text-left w-auto"
                              variant="body11"
                            >
                              Where is it Going?
                            </Text>
                            <Text
                              className="text-black_900 text-left w-auto"
                              variant="body11"
                            >
                              When should it get there?
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                            <Text
                              className="font-semibold mt-1 text-gray_500 text-left w-auto"
                              variant="body14"
                            >
                              Select Destination
                            </Text>
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[22px] mt-[3px] w-[22px]"
                              alt="checkmark"
                            />
                            <div className="flex h-7 justify-end relative w-[47%]">
                              <Text
                                className="font-semibold mb-1 ml-[13px] mt-auto text-gray_500 text-left w-auto"
                                variant="body14"
                              >
                                Select Delivery Date
                              </Text>
                              <div className="absolute border border-gray_900_e5 border-solid flex h-full inset-[0] items-end justify-center m-auto p-[3px] rounded-md w-full">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[22px] mr-[5px] w-[22px]"
                                  alt="checkmark_One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[105px] md:ml-[0] ml-[63px] md:mt-0 my-[25px] py-1.5 rounded-md text-center text-white_A700 text-xs w-auto">
                    Choose Gift
                  </Button>
                </div>
              </div>
              <Text
                className="font-semibold mt-[75px] text-left text-white_A700 tracking-[-2.16px] w-auto"
                as="h4"
                variant="h4"
              >
                Top Gifting Items
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[107px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[67px] w-[99%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[38px] sm:px-5 w-full">
                  <Img
                    src="images/img_rectangle53.png"
                    className="h-[133px] md:h-auto object-cover rounded-[15px] w-[84%] sm:w-full"
                    alt="rectangleFiftyThree"
                  />
                  <Text
                    className="font-semibold mt-[19px] text-black_900 text-left w-auto"
                    variant="body9"
                  >
                    Necklaces
                  </Text>
                  <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[105px] mt-[17px] py-1.5 rounded-md text-center text-white_A700 text-xs w-auto">
                    Gift
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[38px] sm:px-5 w-full">
                  <Img
                    src="images/img_502118hbeaba091.png"
                    className="h-[133px] md:h-auto object-cover rounded-[15px] w-[84%] sm:w-full"
                    alt="502118hbeaba091"
                  />
                  <Text
                    className="font-semibold mt-[21px] text-black_900 text-left w-auto"
                    variant="body9"
                  >
                    Earrings
                  </Text>
                  <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[105px] mt-[15px] py-1.5 rounded-md text-center text-white_A700 text-xs w-auto">
                    Gift
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[38px] sm:px-5 w-full">
                  <Img
                    src="images/img_rectangle52.png"
                    className="h-[133px] md:h-auto mt-5 object-cover rounded-[15px] w-[84%] sm:w-full"
                    alt="rectangleFiftyTwo"
                  />
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    variant="body9"
                  >
                    Rings
                  </Text>
                  <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[105px] mt-[15px] py-1.5 rounded-md text-center text-white_A700 text-xs w-auto">
                    Gift
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Footer className="flex font-dosis items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default GiftingPage;
