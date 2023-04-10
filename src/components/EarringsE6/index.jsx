import React from "react";

import { Img, Text } from "components";

const EarringsE6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start ml-1.5 md:ml-[0] w-[88%] md:w-full"
          style={{ backgroundImage: "url('images/img_frame17_14.png')" }}
        >
          <Img
            src="images/img_image14.png"
            className="h-[238px] md:h-auto object-cover w-full"
            alt="imageFourteen"
          />
        </div>
        <div className="flex items-center justify-start mb-[3px] ml-1.5 md:ml-[0] w-[79%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-3 pr-3 w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.chainedstuds}
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

EarringsE6.defaultProps = { chainedstuds: "CHAINED STUDS", price: "₹10000" };

export default EarringsE6;
