import React from "react";

import { Img, Text } from "components";

const PendantsC4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat h-[238px] md:h-[243px] md:ml-[0] ml-[11px] mt-[5px] relative w-[96%]"
          style={{ backgroundImage: "url('images/img_frame17_13.png')" }}
        >
          <Img
            src="images/img_image19.png"
            className="h-[238px] m-auto object-cover w-full"
            alt="imageNineteen"
          />
          <Img
            src="images/img_image24.png"
            className="absolute h-[238px] inset-[0] justify-center m-auto object-cover w-full"
            alt="imageTwentyFour"
          />
        </div>
        <div className="flex items-center justify-start mb-2 md:ml-[0] ml-[11px] w-[86%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.heartcharm}
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

PendantsC4.defaultProps = { heartcharm: "HEART CHARM", price: "₹8000" };

export default PendantsC4;
