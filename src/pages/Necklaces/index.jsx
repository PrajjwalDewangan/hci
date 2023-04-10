import React from "react";

import Header from "components/Header";
import { Text, List, Button } from "components";
import NecklacesInitialpendant from "components/NecklacesInitialpendant";
import NecklacesHeartdrop from "components/NecklacesHeartdrop";
import NecklacesDiamondchoker from "components/NecklacesDiamondchoker";
import NecklacesLeafpendant from "components/NecklacesLeafpendant";
import NecklacesRubypendant from "components/NecklacesRubypendant";
import NecklacesN5 from "components/NecklacesN5";
import NecklacesN6 from "components/NecklacesN6";
import NecklacesN7 from "components/NecklacesN7";
import NecklacesN8 from "components/NecklacesN8";
import NecklacesN9 from "components/NecklacesN9";
import Footer from "components/Footer";

const NecklacesPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-center md:px-5 w-full" />
          <Text
            className="font-cormorantgaramond mt-[81px] text-black_900 text-center w-auto"
            as="h1"
            variant="h1"
          >
            Necklaces
          </Text>
          <Text
            className="font-extrabold font-karla mt-9 text-black_900 text-center w-auto"
            variant="body1"
          >
            <>
              From simple to sophisticated, we&#39;ve got the perfect necklace
              for you.
            </>
          </Text>
          <div className="flex font-karla items-center justify-start mt-[68px] p-[25px] sm:px-5 w-full">
            <List
              className="flex-col gap-[15px] grid items-center max-w-[1250px] mb-[7px] mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <NecklacesInitialpendant
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-start p-1.5 w-auto md:w-full"
                  price="INITIAL PENDANT"
                  priceOne="₹10000"
                />
                <NecklacesHeartdrop
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-start pl-[9px] py-[9px] w-auto md:w-full"
                  heartdrop="HEART DROP"
                  priceTwo="₹20000"
                />
                <NecklacesDiamondchoker
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-start pl-[9px] py-[9px] w-auto md:w-full"
                  diamondchoker="DIAMOND CHOKER"
                  priceThree="₹30000"
                />
                <NecklacesLeafpendant
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-start p-[3px] w-auto md:w-full"
                  priceFour="LEAF PENDANT"
                  priceFive="₹9000"
                />
                <NecklacesRubypendant
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-start p-1 w-auto md:w-full"
                  priceSix="RUBY PENDANT"
                  priceSeven="$250.00"
                />
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <NecklacesN5
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-end pl-[9px] pt-[9px] w-auto md:w-full"
                  opalheart="OPAL HEART"
                  price="₹10000"
                />
                <NecklacesN6
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-end pl-[9px] pt-[9px] w-auto md:w-full"
                  interlockinggolOne="INTERLOCKING GOLD"
                  priceOne="₹20000"
                />
                <NecklacesN7
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-end pl-[9px] pt-[9px] w-auto md:w-full"
                  lariat="LARIAT"
                  priceTwo="₹15000"
                />
                <NecklacesN8
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-end pt-[3px] px-[3px] w-auto md:w-full"
                  priceThree="TAG PENDANT"
                  priceFour="₹10000"
                />
                <NecklacesN9
                  className="border border-gray_900_e5 border-solid flex md:flex-1 flex-col items-start justify-end pl-[9px] pt-[9px] w-auto md:w-full"
                  priceFive="FLORA PENDANT"
                  priceSix="$300.00"
                />
              </div>
            </List>
          </div>
        </div>
        <div className="flex items-end mt-12 md:px-10 sm:px-5 px-[515px] w-full">
          <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[348px] py-[9px] rounded-md text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto">
            See More Products
          </Button>
        </div>
        <div className="flex font-dosis items-center mt-[47px] w-full">
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default NecklacesPage;
