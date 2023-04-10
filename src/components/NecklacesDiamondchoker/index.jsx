import React from "react";

import { Img, Text } from "components";

const NecklacesDiamondchoker = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17_238x209.png"
          className="h-[238px] md:h-auto ml-1.5 md:ml-[0] object-cover w-[98%]"
          alt="frameSeventeen_Two"
        />
        <div className="flex items-center justify-start mb-[3px] ml-1.5 md:ml-[0] w-[88%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.diamondchoker}
            </Text>
            <Text
              className="font-karla font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.priceThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NecklacesDiamondchoker.defaultProps = {
  diamondchoker: "DIAMOND CHOKER",
  priceThree: "₹30000",
};

export default NecklacesDiamondchoker;
