import React from "react";

import { Img, Text, Input, TextArea, Button } from "components";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex font-poppins items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] items-center justify-start md:px-5 w-[94%] md:w-full">
          <Img
            src="images/img_pexelscottonbr_1026x633.png"
            className="h-[1026px] sm:h-auto object-cover w-[47%] md:w-full"
            alt="pexelscottonbr"
          />
          <div className="flex flex-col gap-[43px] items-center justify-start w-[48%] md:w-full">
            <Text
              className="font-semibold text-black_900 text-center w-auto"
              as="h4"
              variant="h4"
            >
              Welcome to HAZE sign up!{" "}
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="font-normal not-italic text-black_900 text-justify"
                variant="body6"
              >
                <>
                  We are thrilled to see you start your journey with HAZE!
                  <br />
                  Just a few essential details and we will enable heaven within
                  the reach of your fingers
                </>
              </Text>
              <div className="md:gap-5 gap-[49px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[77px] w-full">
                <div className="flex md:h-[53px] h-[57px] justify-end pl-1 pt-1 relative rounded-[12px] w-full">
                  <div className="bg-bluegray_100 h-[53px] mt-auto mx-auto rounded-[12px] w-[99%]"></div>
                  <Text
                    className="absolute font-medium h-max inset-y-[0] left-[8%] my-auto text-black_900 text-left w-auto"
                    variant="body8"
                  >
                    First name
                  </Text>
                </div>
                <div className="flex md:h-[53px] h-[57px] justify-end pl-1 pt-1 relative rounded-[12px] w-full">
                  <div className="bg-bluegray_100 h-[53px] mt-auto mx-auto rounded-[12px] w-[99%]"></div>
                  <Text
                    className="absolute font-medium h-max inset-y-[0] left-[8%] my-auto text-black_900 text-left w-auto"
                    variant="body8"
                  >
                    Last name
                  </Text>
                </div>
                <div className="flex md:h-[53px] h-[57px] justify-end pl-1 pt-1 relative rounded-[12px] w-full">
                  <div className="bg-bluegray_100 h-[53px] mt-auto mx-auto rounded-[12px] w-[99%]"></div>
                  <Text
                    className="absolute font-medium h-max inset-y-[0] left-[8%] my-auto text-black_900 text-left w-auto"
                    variant="body8"
                  >
                    Gender
                  </Text>
                </div>
                <div className="flex md:h-[53px] h-[57px] justify-end pl-1 pt-1 relative rounded-[12px] w-full">
                  <div className="bg-bluegray_100 h-[53px] mt-auto mx-auto rounded-[12px] w-[99%]"></div>
                  <Text
                    className="absolute font-medium h-max inset-y-[0] left-[8%] my-auto text-black_900 text-left w-auto"
                    variant="body8"
                  >
                    DD/MM/YY
                  </Text>
                </div>
              </div>
              <Input
                wrapClassName="bg-bluegray_100 mt-4 pb-[13px] pl-[18px] pr-[35px] pt-[9px] rounded-[12px] w-[99%]"
                className="font-medium leading-[normal] p-0 placeholder:text-black_900 sm:pr-5 text-black_900 text-left text-xl w-full"
                type="number"
                name="groupFortyOne"
                placeholder="Phone no"
              ></Input>
              <Input
                wrapClassName="bg-bluegray_100 mt-4 pb-[13px] pl-[18px] pr-[35px] pt-[9px] rounded-[12px] w-[99%]"
                className="font-medium leading-[normal] p-0 placeholder:text-black_900 sm:pr-5 text-black_900 text-left text-xl w-full"
                type="email"
                name="groupFortyTwo"
                placeholder="E-mail"
              ></Input>
              <TextArea
                className="bg-bluegray_100 border-0 font-medium leading-[normal] mt-4 pb-[35px] pl-[18px] sm:pr-5 pr-[35px] pt-3.5 rounded-[12px] placeholder:text-black_900 text-black_900 text-left text-xl w-[99%] sm:w-full"
                name="groupFortyThree"
                placeholder="Address with pin code"
              ></TextArea>
              <Button
                className="common-pointer bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[222px] mt-[85px] py-[18px] rounded-md sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-auto"
                onClick={() => navigate("/signupnext")}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
