import React from "react";

import { Img, Text } from "components";

const EarringsE7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17_9.png"
          className="h-[238px] md:h-auto ml-1.5 md:ml-[0] object-cover w-[88%]"
          alt="frameSeventeen"
        />
        <div className="flex items-center justify-start mb-[3px] ml-1.5 md:ml-[0] w-[79%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.chaindrops}
            </Text>
            <Text
              className="font-karla font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.price}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

EarringsE7.defaultProps = { chaindrops: "CHAIN DROPS", price: "₹4000" };

export default EarringsE7;
