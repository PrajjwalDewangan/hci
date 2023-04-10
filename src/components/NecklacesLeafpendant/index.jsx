import React from "react";

import { Img, Text } from "components";

const NecklacesLeafpendant = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17_238x210.png"
          className="h-[238px] md:h-auto ml-3 md:ml-[0] mt-1.5 object-cover w-[95%]"
          alt="frameSeventeen_Three"
        />
        <div className="flex items-center justify-start mb-[9px] ml-3 md:ml-[0] w-[85%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.priceFour}
            </Text>
            <Text
              className="font-karla font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.priceFive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NecklacesLeafpendant.defaultProps = {
  priceFour: "LEAF PENDANT",
  priceFive: "₹9000",
};

export default NecklacesLeafpendant;
