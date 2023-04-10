import React from "react";

import Header from "components/Header";
import { Text, List, Button } from "components";
import PendantsC from "components/PendantsC";
import PendantsC1 from "components/PendantsC1";
import PendantsC2 from "components/PendantsC2";
import PendantsC3 from "components/PendantsC3";
import PendantsC4 from "components/PendantsC4";
import Footer1 from "components/Footer1";

const PendantsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-auto w-full">
        <Header className="bg-white_A700 flex flex-col font-abrilfatface items-center justify-center md:px-5 w-full" />
        <Text
          className="font-cormorantgaramond mt-[81px] text-black_900 text-center w-auto"
          as="h1"
          variant="h1"
        >
          Pendants
        </Text>
        <Text
          className="font-extrabold font-karla mt-[85px] text-black_900 text-center w-auto"
          variant="body1"
        >
          From delicate to chunky, we have the perfect pendant for you.
        </Text>
        <List
          className="sm:flex-col flex-row font-karla gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-[67px] p-[29px] sm:px-5 w-full"
          orientation="horizontal"
        >
          <PendantsC
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[5px] md:px-5 w-full"
            keycharm="KEY CHARM"
            price="₹8000"
          />
          <PendantsC1
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[7px] md:px-5 w-full"
            cornicellocharmOne="CORNICELLO CHARM"
            price="₹9000"
          />
          <PendantsC2
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[5px] md:px-5 w-full"
            price="MEDALLION CHARM"
            priceOne="₹6000"
          />
          <PendantsC3
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[5px] md:px-5 w-full"
            globecharm="GLOBE CHARM"
            price="₹9000"
          />
          <PendantsC4
            className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-1 md:px-5 w-full"
            heartcharm="HEART CHARM"
            price="₹8000"
          />
        </List>
        <Button className="bg-gray_900_e5 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[348px] mt-[121px] py-[9px] rounded-md text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto">
          See More Products
        </Button>
        <Footer1 className="flex font-dosis items-center justify-center mt-[162px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default PendantsPage;
