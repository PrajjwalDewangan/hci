import React from "react";

import { Img, Text } from "components";

const NecklacesN9 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_50 flex items-center justify-start ml-1.5 md:ml-[0] pb-5 w-[98%] md:w-full">
          <Img
            src="images/img_image12.png"
            className="h-[218px] md:h-auto object-cover w-full"
            alt="imageTwelve"
          />
        </div>
        <div className="flex items-center justify-start ml-1.5 md:ml-[0] w-[88%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-[11px] pr-[11px] w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.priceFive}
            </Text>
            <Text
              className="font-karla font-normal mt-0.5 not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.priceSix}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NecklacesN9.defaultProps = { priceFive: "FLORA PENDANT", priceSix: "$300.00" };

export default NecklacesN9;
