import React from "react";

import { Img, Text } from "components";

const NecklacesN6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17_3.png"
          className="h-[238px] md:h-auto ml-1.5 md:ml-[0] object-cover w-[98%]"
          alt="frameSeventeen_One"
        />
        <div className="flex items-center justify-start ml-1.5 md:ml-[0] w-[94%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.interlockinggolOne}
            </Text>
            <Text
              className="font-karla font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.priceOne}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NecklacesN6.defaultProps = {
  interlockinggolOne: "INTERLOCKING GOLD",
  priceOne: "₹20000",
};

export default NecklacesN6;
