import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const Footer1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-gray_100 flex items-end justify-start p-7 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start mb-[22px] mr-[116px] w-[79%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                <Text
                  className="common-pointer font-dosis mb-[3px] not-italic text-black_900 text-left underline w-auto"
                  variant="body2"
                  onClick={() => navigate("/thehazeexperience")}
                >
                  About us
                </Text>
                <Text
                  className="common-pointer font-dosis md:ml-[0] ml-[370px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                  variant="body2"
                  onClick={() => navigate("/help")}
                >
                  Help
                </Text>
                <Text
                  className="font-dosis md:ml-[0] ml-[347px] md:mt-0 mt-[3px] not-italic text-black_900 text-center underline w-auto"
                  variant="body2"
                >
                  Subscriptions
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                <Text
                  className="common-pointer font-dosis text-black_900_99 text-left"
                  variant="body5"
                  onClick={() => navigate("/thehazeexperience")}
                >
                  <>
                    Our story
                    <br />
                    Our goal
                    <br />
                    Our vision
                  </>
                </Text>
                <Text
                  className="font-dosis md:ml-[0] ml-[238px] text-black_900_99 text-left"
                  variant="body5"
                >
                  <>
                    Contact Us: +91 - 9877452326.
                    <br />
                    020-25667820 (toll free)
                    <br />
                    Mail Us: customercare@haze.com
                  </>
                </Text>
                <div className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[156px] md:mt-0 mt-[3px] w-auto md:w-full">
                  <Text
                    className="font-dosis text-black_900_99 text-left w-auto"
                    variant="body5"
                  >
                    Premium Subscription
                  </Text>
                  <Text
                    className="common-pointer font-dosis not-italic text-black_900 text-center underline w-auto"
                    variant="body2"
                    onClick={() => navigate("/gifting")}
                  >
                    Gifting
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="bg-black_900 font-dosis h-[53px] justify-center max-w-[1440px] md:max-w-full not-italic pb-[9px] pt-[15px] sm:px-5 px-[35px] text-center text-white_A700 w-full"
            variant="body7"
          ></Text>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
