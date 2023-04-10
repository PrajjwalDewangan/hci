import React from "react";

import { Img, Text } from "components";

const BraceletsB2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start ml-3.5 md:ml-[0] mt-2 w-[93%] md:w-full"
          style={{ backgroundImage: "url('images/img_frame17_11.png')" }}
        >
          <Img
            src="images/img_image17_238x210.png"
            className="h-[238px] md:h-auto object-cover w-full"
            alt="imageSeventeen"
          />
        </div>
        <div className="flex items-center justify-start mb-[11px] ml-3.5 md:ml-[0] w-[84%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.leafychain}
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

BraceletsB2.defaultProps = { leafychain: "LEAFY CHAIN", price: "₹6000" };

export default BraceletsB2;
