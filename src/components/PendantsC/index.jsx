import React from "react";

import { Img, Text } from "components";

const PendantsC = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat h-[238px] md:h-[242px] ml-2.5 md:ml-[0] mt-1 relative w-[96%]"
          style={{ backgroundImage: "url('images/img_frame17_10.png')" }}
        >
          <Img
            src="images/img_image15.png"
            className="h-[238px] m-auto object-cover w-full"
            alt="imageFifteen"
          />
          <Img
            src="images/img_image21.png"
            className="absolute h-[238px] inset-[0] justify-center m-auto object-cover w-full"
            alt="imageTwentyOne"
          />
        </div>
        <div className="flex items-center justify-start mb-[7px] ml-2.5 md:ml-[0] w-[86%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.keycharm}
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

PendantsC.defaultProps = { keycharm: "KEY CHARM", price: "₹8000" };

export default PendantsC;
