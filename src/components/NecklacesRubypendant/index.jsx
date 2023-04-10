import React from "react";

import { Img, Text } from "components";

const NecklacesRubypendant = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame17_1.png"
          className="h-[238px] md:h-auto md:ml-[0] ml-[11px] mt-[5px] object-cover w-[96%]"
          alt="frameSeventeen_Four"
        />
        <div className="flex items-center justify-start mb-2 md:ml-[0] ml-[11px] w-[86%] md:w-full">
          <div className="flex flex-col items-start justify-start pb-[11px] pr-[11px] w-full">
            <Text
              className="font-karla font-normal not-italic text-bluegray_900 text-left w-auto"
              variant="body9"
            >
              {props?.priceSix}
            </Text>
            <Text
              className="font-karla font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body9"
            >
              {props?.priceSeven}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NecklacesRubypendant.defaultProps = {
  priceSix: "RUBY PENDANT",
  priceSeven: "$250.00",
};

export default NecklacesRubypendant;
