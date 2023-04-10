import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ForgotpasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-abrilfatface items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1332px] mx-auto md:px-5 w-full">
          <div className="h-[653px] relative w-[52%] md:w-full">
            <Img
              src="images/img_pexelssolodsha7662841.png"
              className="h-[653px] m-auto object-cover w-full"
              alt="pexelssolodshaSeven"
            />
            <Text
              className="common-pointer absolute bottom-[13%] inset-x-[0] mx-auto not-italic text-left text-white_A700 w-max"
              variant="body13"
              onClick={() => navigate("/home1")}
            >
              HAZE
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[203px] w-[39%] md:w-full">
            <Text
              className="font-poppins font-semibold text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Forgotten password?
            </Text>
            <Text
              className="font-normal font-poppins mt-2 not-italic text-black_900 text-left w-auto"
              variant="body8"
            >
              Enter your email address to reset your password.
            </Text>
            <Input
              wrapClassName="bg-gray_300_7f mt-[50px] px-[34px] py-[9px] rounded-[12px] w-[81%]"
              className="font-normal font-poppins leading-[normal] not-italic p-0 placeholder:text-black_900 sm:px-5 text-black_900 text-left text-xl w-full"
              type="email"
              name="groupFiftyTwo"
              placeholder="Email"
            ></Input>
            <Button
              className="common-pointer bg-gray_900_e5 cursor-pointer font-inter font-semibold leading-[normal] min-w-[152px] mt-[29px] py-3 rounded-md text-center text-white_A700 text-xl w-auto"
              onClick={() => navigate("/signupnext")}
            >
              Reset{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordPage;
