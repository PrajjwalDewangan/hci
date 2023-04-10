import React from "react";

import Header from "components/Header";
import { Text, List, Button } from "components";
import BraceletsB from "components/BraceletsB";
import BraceletsB1 from "components/BraceletsB1";
import BraceletsB2 from "components/BraceletsB2";
import BraceletsB3 from "components/BraceletsB3";
import BraceletsB4 from "components/BraceletsB4";
import Footer from "components/Footer";

const BraceletsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-end mx-auto w-full">
        <Header className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-center md:px-5 w-full" />
        <Text
          className="font-cormorantgaramond mt-[66px] text-black_900 text-center w-auto"
          as="h1"
          variant="h1"
        >
          Bracelets
        </Text>
        <Text
          className="font-extrabold font-karla mt-[93px] text-black_900 text-center w-auto"
          variant="body1"
        >
          Arm candy never looked so good.
        </Text>
        <List
          className="sm:flex-col flex-row font-karla gap-[17px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-[66px] p-[86px] md:px-10 sm:px-5 w-full"
          orientation="horizontal"
        >
          <BraceletsB
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[5px] w-full"
            chainedcuff="CHAINED CUFF"
            price="₹20000"
          />
          <BraceletsB1
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start pl-[9px] py-[9px] w-full"
            thinchain="THIN CHAIN"
            price="₹9000"
          />
          <BraceletsB2
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start w-full"
            leafychain="LEAFY CHAIN"
            price="₹6000"
          />
          <BraceletsB3
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[3px] w-full"
            florachain="FLORA CHAIN"
            price="₹4000"
          />
          <BraceletsB4
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[3px] w-full"
            arrowcuff="ARROW CUFF"
            price="₹5000"
          />
        </List>
        <Button className="bg-gray_900_e5 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[348px] mt-[85px] py-[9px] rounded-md text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto">
          See More Products
        </Button>
        <Footer className="flex font-dosis items-center justify-center mt-[161px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BraceletsPage;
