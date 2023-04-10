import React from "react";

import Header from "components/Header";
import { Text, Button } from "components";
import EarringsE from "components/EarringsE";
import EarringsE1 from "components/EarringsE1";
import EarringsE2 from "components/EarringsE2";
import EarringsE3 from "components/EarringsE3";
import EarringsE4 from "components/EarringsE4";
import EarringsE5 from "components/EarringsE5";
import EarringsE6 from "components/EarringsE6";
import EarringsE7 from "components/EarringsE7";

const EarringsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-abrilfatface justify-start mx-auto pb-[356px] w-full">
        <div className="flex items-center w-full">
          <Header className="bg-white_A700 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex font-cormorantgaramond items-end mt-[99px] md:px-10 sm:px-5 px-[510px] w-full">
          <Text
            className="text-black_900 text-center w-auto"
            as="h1"
            variant="h1"
          >
            Earrings
          </Text>
        </div>
        <div className="flex flex-col font-karla gap-[11px] items-center mt-[18px] w-full">
          <Text
            className="font-extrabold text-black_900 text-center w-auto"
            variant="body1"
          >
            From simple studs to statement hoops, we have it all.
          </Text>
          <div className="flex items-center justify-end p-[39px] sm:px-5 w-full">
            <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1105px] min-h-[auto] mt-11 mx-auto md:px-5 w-full">
              <EarringsE
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                diamondstuds="DIAMOND STUDS"
                price="₹20000"
              />
              <EarringsE1
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                minihoops="MINI HOOPS"
                price="₹9000"
              />
              <EarringsE2
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                price="DANGLING LEAVES"
                priceOne="₹6000"
              />
              <EarringsE3
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                leafstuds="LEAF STUDS"
                price="₹4000"
              />
              <EarringsE4
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                starbundlestudsOne="STAR BUNDLE STUDS"
                price="₹10000"
              />
              <EarringsE5
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                sphericaldrops="SPHERICAL DROPS"
                price="₹15000"
              />
              <EarringsE6
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                chainedstuds="CHAINED STUDS"
                price="₹10000"
              />
              <EarringsE7
                className="border border-gray_900_e5 border-solid flex flex-1 flex-col items-start justify-start p-[9px] w-full"
                chaindrops="CHAIN DROPS"
                price="₹4000"
              />
            </div>
          </div>
        </div>
        <div className="flex font-poppins items-end md:px-10 sm:px-5 px-[514px] w-full">
          <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[348px] py-[9px] rounded-md text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto">
            See More Products
          </Button>
        </div>
      </div>
    </>
  );
};

export default EarringsPage;
