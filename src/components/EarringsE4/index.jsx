import React from "react";

import { Img, Text } from "components";

const EarringsE4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_51 flex items-center justify-start ml-1.5 md:ml-[0] w-[88%] md:w-full">
          <Img
            src="images/img_image13.png"
            className="h-[238px] md:h-auto object-cover w-full"
            alt="imageThirteen"
          />
        </div>
        <div className="flex items-center justify-start mb-[3px] ml-1.5 md:ml-[0] w-[79%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.starbundlestudsOne}
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

EarringsE4.defaultProps = {
  starbundlestudsOne: "STAR BUNDLE STUDS",
  price: "₹10000",
};

export default EarringsE4;
