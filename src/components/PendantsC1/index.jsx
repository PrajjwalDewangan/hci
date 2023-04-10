import React from "react";

import { Img, Text } from "components";

const PendantsC1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_101 md:h-60 h-[238px] ml-2 md:ml-[0] mt-0.5 relative w-[97%]">
          <Img
            src="images/img_image16.png"
            className="h-[238px] m-auto object-cover w-full"
            alt="imageSixteen"
          />
          <Img
            src="images/img_image22.png"
            className="absolute h-[238px] inset-[0] justify-center m-auto object-cover w-full"
            alt="imageTwentyTwo"
          />
        </div>
        <div className="flex items-center justify-start mb-[5px] ml-2 md:ml-[0] w-[87%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.cornicellocharmOne}
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

PendantsC1.defaultProps = {
  cornicellocharmOne: "CORNICELLO CHARM",
  price: "₹9000",
};

export default PendantsC1;
