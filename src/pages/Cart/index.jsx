import React from "react";

import Header from "components/Header";
import { Text, Img, Button, Line } from "components";

const CartPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-auto pb-[349px] w-full">
        <Header className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-center md:px-5 w-full" />
        <Text
          className="font-cormorantgaramond mt-[81px] text-black_900 text-center w-auto"
          as="h1"
          variant="h1"
        >
          Checkout
        </Text>
        <div className="flex font-poppins items-center justify-start max-w-[1305px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-start w-[47%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex h-[287px] items-center justify-start p-12 md:px-10 sm:px-5 rounded-[12px] w-full"
                  style={{ backgroundImage: "url('images/img_group34.svg')" }}
                >
                  <div className="flex flex-col justify-start mb-[39px] mt-[18px] w-full">
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body6"
                    >
                      Delivery Address
                    </Text>
                    <div className="flex items-center justify-start md:ml-[0] ml-[87px] mt-8 w-[52%] md:w-full">
                      <div className="flex items-center justify-start w-full">
                        <Text
                          className="font-semibold text-black_901 text-left w-auto"
                          variant="body9"
                        >
                          PD A2 - 201 , Thaksen nagar Vedant Residency,Sus road
                          PUNE, MAHARASHTRA 411021
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[297px] items-start justify-end ml-auto w-[97%] md:w-full">
                      <Img
                        src="images/img_computer.svg"
                        className="h-9 rounded-[50%] w-9"
                        alt="computer"
                      />
                      <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[151px] mt-[3px] py-3 rounded-md text-base text-center text-white_A700 w-auto">
                        Change
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex h-[411px] items-center justify-start p-[67px] md:px-10 sm:px-5 rounded-[12px] w-full"
                  style={{ backgroundImage: "url('images/img_group34.svg')" }}
                >
                  <div className="flex flex-col gap-[47px] items-start justify-start mb-[81px] w-[90%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body6"
                    >
                      Payment Options
                    </Text>
                    <div className="h-[111px] relative w-full">
                      <div className="h-[111px] m-auto w-full">
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-7 right-[0] top-[0] w-auto"
                          alt="arrowdown"
                        />
                        <div className="absolute flex h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-[98px] items-start justify-start w-[67%] md:w-full">
                              <Img
                                src="images/img_iconsaxlinearcards.svg"
                                className="h-9 w-auto"
                                alt="iconsaxlinearca"
                              />
                              <Text
                                className="font-semibold text-black_901 text-left w-auto"
                                variant="body9"
                              >
                                Debit/Credit Card
                              </Text>
                            </div>
                            <Line className="bg-bluegray_200 h-px mt-3.5 w-full" />
                            <div className="flex flex-row gap-[98px] items-start justify-start mt-[22px] w-[38%] md:w-full">
                              <Img
                                src="images/img_globe.svg"
                                className="h-9 w-auto"
                                alt="globe"
                              />
                              <Text
                                className="font-semibold text-black_901 text-left w-auto"
                                variant="body9"
                              >
                                UPI
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="absolute bottom-[6%] h-7 right-[0] w-auto"
                        alt="arrowdown_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 h-[722px] items-center justify-start p-11 md:px-10 sm:px-5 rounded-[12px] w-1/2 md:w-full"
                style={{ backgroundImage: "url('images/img_group34.svg')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start mb-[52px] mt-[38px] w-full">
                  <div className="flex flex-col gap-[41px] items-center justify-start w-[94%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-full">
                      <Img
                        src="images/img_rectangle53_145x136.png"
                        className="sm:flex-1 h-[145px] md:h-auto object-cover rounded-[30px] w-[27%] sm:w-full"
                        alt="rectangleFiftyThree"
                      />
                      <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start sm:ml-[0] ml-[27px] sm:mt-0 mt-[27px] w-auto sm:w-full">
                        <Text
                          className="font-medium text-black_900 text-left w-auto"
                          variant="body9"
                        >
                          Platinum 950 Chain
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-auto"
                          variant="body14"
                        >
                          QTY: 1
                        </Text>
                      </div>
                      <Text
                        className="font-semibold sm:ml-[0] ml-[123px] sm:mt-0 mt-[68px] text-gray_900_e5 text-left w-auto"
                        variant="body9"
                      >
                        ₹ 49,296
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-full">
                      <Img
                        src="images/img_502118hbeaba091_145x136.png"
                        className="sm:flex-1 h-[145px] md:h-auto object-cover rounded-[30px] w-[27%] sm:w-full"
                        alt="502118hbeaba091"
                      />
                      <div className="flex sm:flex-1 flex-col gap-[22px] items-start justify-start sm:ml-[0] ml-[27px] sm:mt-0 mt-[31px] w-auto sm:w-full">
                        <Text
                          className="font-medium text-black_900 text-left w-auto"
                          variant="body9"
                        >
                          Dainty Leaf Loop Earrings
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-auto"
                          variant="body14"
                        >
                          QTY: 1
                        </Text>
                      </div>
                      <Text
                        className="font-semibold sm:ml-[0] ml-[81px] sm:mt-0 mt-[69px] text-gray_900_e5 text-left w-auto"
                        variant="body9"
                      >
                        ₹ 99,296
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-bluegray_200 h-px w-full" />
                    <div className="flex flex-row sm:gap-10 gap-[431px] items-center justify-start mt-[45px] w-[96%] md:w-full">
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-auto"
                        variant="body14"
                      >
                        GST 3%
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-auto"
                        variant="body14"
                      >
                        ₹4457.76
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-8 w-[96%] md:w-full">
                      <Text
                        className="font-semibold mb-[3px] text-black_900 text-left w-auto"
                        variant="body9"
                      >
                        Total
                      </Text>
                      <Text
                        className="font-semibold mt-[3px] text-black_901 text-left w-auto"
                        variant="body9"
                      >
                        ₹ 153,059.76
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
