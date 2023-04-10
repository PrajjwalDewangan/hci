import React from "react";

import { Img, Text } from "components";

const BraceletsB4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start ml-3 md:ml-[0] mt-1.5 w-[95%] md:w-full"
          style={{ backgroundImage: "url('images/img_frame17_13.png')" }}
        >
          <Img
            src="images/img_image19.png"
            className="h-[238px] md:h-auto object-cover w-full"
            alt="imageNineteen"
          />
        </div>
        <div className="flex items-center justify-start mb-[9px] ml-3 md:ml-[0] w-[85%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.arrowcuff}
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

BraceletsB4.defaultProps = { arrowcuff: "ARROW CUFF", price: "₹5000" };

export default BraceletsB4;
