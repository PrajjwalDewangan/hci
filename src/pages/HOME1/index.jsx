import React from "react";

import Header from "components/Header";
import { Button, List, Img, Text } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const HOME1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <Header className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-center md:px-5 w-full" />
          <Button className="border-2 border-gray_900_e5 border-solid cursor-pointer font-black font-lato min-w-[570px] sm:min-w-full mt-[863px] pb-[17.19px] pl-[57px] pr-[57.8px] pt-4 md:px-10 sm:px-5 md:text-3xl sm:text-[28px] text-[32px] text-center text-gray_900_e5 tracking-[9.60px] uppercase w-auto">
            Shop By Category
          </Button>
          <List
            className="sm:flex-col flex-row font-librebodoni gap-[43px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1366px] mt-[100px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[532px] relative w-full">
              <Img
                src="images/img_pexelsjasminchew5411883.png"
                className="h-[532px] m-auto object-cover w-full"
                alt="pexelsjasminche"
              />
              <Text
                className="common-pointer absolute bottom-[2%] font-normal inset-x-[0] mx-auto not-italic text-center text-white_A700 tracking-[9.60px] uppercase w-max"
                variant="body3"
                onClick={() => navigate("/necklaces")}
              >
                NECKLACES
              </Text>
            </div>
            <div className="h-[532px] relative w-full">
              <Img
                src="images/img_pexelsrodnaep_532x426.png"
                className="h-[532px] m-auto object-cover w-full"
                alt="pexelsrodnaep"
              />
              <Text
                className="common-pointer absolute bottom-[2%] font-normal left-[16%] not-italic text-center text-white_A700 tracking-[9.60px] uppercase w-auto"
                variant="body3"
                onClick={() => navigate("/bracelets")}
              >
                BRACELETS
              </Text>
            </div>
            <div className="h-[532px] relative w-full">
              <Img
                src="images/img_pexelspixabay265856.png"
                className="h-[532px] m-auto object-cover w-full"
                alt="pexelspixabayTwentySix"
              />
              <Text
                className="absolute bottom-[2%] font-normal inset-x-[0] mx-auto not-italic text-center text-white_A700 tracking-[9.60px] uppercase w-max"
                variant="body3"
              >
                RINGs
              </Text>
            </div>
          </List>
          <div className="font-librebodoni h-[532px] md:h-[574px] mt-[42px] md:px-5 relative w-[63%] md:w-full">
            <div className="absolute flex inset-x-[0] items-center justify-start mx-auto top-[0] w-[28%]">
              <div className="flex flex-col md:gap-10 gap-[61px] justify-start w-full">
                <div className="bg-bluegray_100_6c h-11 mr-12 rounded-[10px] w-[81%]"></div>
                <div className="bg-bluegray_100_6c h-11 ml-12 md:ml-[0] rounded-[10px] w-[81%]"></div>
              </div>
            </div>
            <div className="absolute h-[532px] inset-y-[0] left-[0] my-auto w-[48%] sm:w-full">
              <Img
                src="images/img_pexelskarolina.png"
                className="common-pointer h-[532px] m-auto object-cover w-full"
                onClick={() => navigate("/pendants")}
                alt="pexelskarolina"
              />
              <Text
                className="absolute bottom-[2%] font-normal inset-x-[0] mx-auto not-italic text-center text-white_A700 tracking-[9.60px] uppercase w-max"
                variant="body3"
              >
                PENDANTs
              </Text>
            </div>
            <div className="absolute h-[532px] inset-y-[0] my-auto right-[0] w-[48%] sm:w-full">
              <Img
                src="images/img_pexelsronlach8274716.png"
                className="h-[532px] m-auto object-cover w-full"
                alt="pexelsronlachEightyTwo"
              />
              <Text
                className="common-pointer absolute bottom-[2%] font-normal inset-x-[0] mx-auto not-italic text-center text-white_A700 tracking-[9.60px] uppercase w-max"
                variant="body3"
                onClick={() => navigate("/earrings")}
              >
                Earrings
              </Text>
            </div>
          </div>
          <div className="font-librebodoni h-[829px] md:h-[877px] max-w-[1414px] mt-[70px] mx-auto md:px-5 relative w-full">
            <Text
              className="absolute font-normal inset-x-[0] mx-auto not-italic text-center text-white_A700 top-[0] tracking-[9.60px] uppercase w-max"
              variant="body3"
            >
              SILVER
            </Text>
            <div className="absolute flex h-max inset-[0] items-center justify-center m-auto pb-9 sm:px-5 px-9 w-full">
              <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between mb-[35px] w-[99%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-[71px] w-auto md:w-full">
                  <Text
                    className="font-cormorantgaramond md:ml-[0] ml-[183px] text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Gifts of the season
                  </Text>
                  <Text
                    className="font-cabin font-normal mt-[37px] not-italic text-black_900 text-left w-full"
                    variant="body3"
                  >
                    Jewelry is one of the most thoughtful and meaningful gifts
                    you can give to someone special in your life. It is a symbol
                    of love, friendship, and affection that will be cherished
                    for years to come. Whether you are looking for a gift for a
                    significant other, a family member, or a friend, our
                    collection of jewelry is the perfect choice. From delicate
                    and dainty pieces to bold and statement-making designs, we
                    have something to suit every taste and occasion.
                  </Text>
                  <Button
                    className="common-pointer bg-gray_900_e5 cursor-pointer font-inter font-semibold leading-[normal] min-w-[222px] md:ml-[0] ml-[246px] mr-64 mt-[75px] py-[22px] rounded-md sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-auto"
                    onClick={() => navigate("/gifting")}
                  >
                    Shop Gifts
                  </Button>
                </div>
                <Img
                  src="images/img_rectangle37.png"
                  className="h-[736px] sm:h-auto object-cover w-auto md:w-full"
                  alt="rectangleThirtySeven"
                />
              </div>
            </div>
          </div>
          <Footer1 className="flex font-dosis items-center justify-center mt-[81px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HOME1Page;
