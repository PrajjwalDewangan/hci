import React from "react";

import { Img, Text } from "components";

const NecklacesInitialpendant = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17.png"
          className="h-[238px] md:h-auto md:ml-[0] ml-[9px] mt-[3px] object-cover w-[96%]"
          alt="frameSeventeen"
        />
        <div className="flex items-center justify-start mb-1.5 md:ml-[0] ml-[9px] w-[86%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.price}
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

NecklacesInitialpendant.defaultProps = {
  price: "INITIAL PENDANT",
  priceOne: "₹10000",
};

export default NecklacesInitialpendant;
