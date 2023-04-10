import React from "react";

import { Img, Text } from "components";

const BraceletsB = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start ml-2.5 md:ml-[0] mt-1 w-[96%] md:w-full"
          style={{ backgroundImage: "url('images/img_frame17_10.png')" }}
        >
          <Img
            src="images/img_image15.png"
            className="h-[238px] md:h-auto object-cover w-full"
            alt="imageFifteen"
          />
        </div>
        <div className="flex items-center justify-start mb-[7px] ml-2.5 md:ml-[0] w-[86%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.chainedcuff}
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

BraceletsB.defaultProps = { chainedcuff: "CHAINED CUFF", price: "₹20000" };

export default BraceletsB;
