import React from "react";

import { Text, Input, Button, Img } from "components";

const SignupnextPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-poppins items-center justify-start mx-auto md:pl-10 sm:pl-5 pl-[50px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[58px] items-center justify-between max-w-[1386px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-auto md:w-full">
            <Text
              className="font-semibold text-black_900 text-center w-auto"
              variant="body1"
            >
              Setup Username & Password
            </Text>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <Input
                wrapClassName="bg-bluegray_100 pl-6 pr-[35px] py-[18px] rounded-[12px] w-full"
                className="font-medium leading-[normal] p-0 placeholder:text-black_900 sm:px-5 text-black_900 text-left text-xl w-full"
                type="text"
                name="groupFortyFour"
                placeholder="Username"
              ></Input>
              <Input
                wrapClassName="bg-bluegray_100 mt-[49px] pb-5 pl-6 pr-[35px] pt-4 rounded-[12px] w-full"
                className="font-medium leading-[normal] p-0 placeholder:text-black_900 sm:px-5 text-black_900 text-left text-xl w-full"
                type="password"
                name="groupFortySeven"
                placeholder="Password"
              ></Input>
              <Input
                wrapClassName="bg-bluegray_100 mt-[50px] pb-[21px] pl-6 pr-[35px] pt-4 rounded-[12px] w-full"
                className="font-medium leading-[normal] p-0 placeholder:text-black_900 sm:px-5 text-black_900 text-left text-xl w-full"
                type="password"
                name="groupFortyEight"
                placeholder="Confirm Password"
              ></Input>
              <Button className="bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[222px] mt-[45px] py-[18px] rounded-md sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-auto">
                Submit
              </Button>
            </div>
          </div>
          <Img
            src="images/img_pexelscastorlystock3641056.png"
            className="md:flex-1 h-[575px] sm:h-auto object-cover w-auto md:w-full"
            alt="pexelscastorlys"
          />
        </div>
      </div>
    </>
  );
};

export default SignupnextPage;
