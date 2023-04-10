import React from "react";

import { Img, Text } from "components";

const NecklacesHeartdrop = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17_238x196.png"
          className="h-[238px] md:h-auto ml-1.5 md:ml-[0] object-cover w-[98%]"
          alt="frameSeventeen_One"
        />
        <div className="flex items-center justify-start mb-[3px] ml-1.5 md:ml-[0] w-[94%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.heartdrop}
            </Text>
            <Text
              className="font-karla font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.priceTwo}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NecklacesHeartdrop.defaultProps = {
  heartdrop: "HEART DROP",
  priceTwo: "₹20000",
};

export default NecklacesHeartdrop;
