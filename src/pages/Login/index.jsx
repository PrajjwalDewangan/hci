import React from "react";

import { Img, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between max-w-[1407px] mx-auto md:px-5 w-full">
          <div className="h-[890px] relative w-[49%] md:w-full">
            <Img
              src="images/img_pexelsmariamantadze6431174.png"
              className="h-[890px] m-auto object-cover w-full"
              alt="pexelsmariamant"
            />
            <div className="absolute bottom-[28%] flex flex-col items-center justify-start left-[9%] w-[78%]">
              <Text
                className="font-semibold text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                New Here ?
              </Text>
              <Text
                className="font-normal mt-1.5 not-italic text-left text-white_A700 w-full"
                variant="body1"
              >
                Sign up and discover a great amount of new opportunities.
              </Text>
              <Line className="bg-white_A700 h-[5px] mt-[27px] w-2/5" />
              <div className="flex sm:flex-col flex-row gap-2 items-end justify-center mt-[67px] w-[74%] md:w-full">
                <Text
                  className="font-poppins font-semibold text-left text-white_A700 w-auto"
                  variant="body6"
                >
                  Don’t have an account?
                </Text>
                <Text
                  className="common-pointer font-bold font-inter sm:mt-0 mt-[5px] text-indigo_900 text-left w-auto"
                  variant="body6"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[145px] w-[49%] md:w-full">
            <Text
              className="font-bold md:ml-[0] ml-[65px] text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Login to Your Account
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[206px] mt-1.5 not-italic text-black_900 text-left w-auto"
              variant="body8"
            >
              Login using social networks
            </Text>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[244px] mt-8 w-[30%] md:w-full">
              <Img
                src="images/img_google.svg"
                className="common-pointer h-12 w-[49px]"
                onClick={() => googleSignIn()}
                alt="google"
              />
              <div
                className="bg-cover bg-no-repeat flex h-[47px] items-center justify-start ml-[26px] w-12"
                style={{ backgroundImage: "url('images/img_google.svg')" }}
              >
                <div className="flex items-center justify-start w-12 md:w-full">
                  <Img
                    src="images/img_facebook.svg"
                    className="h-[47px] w-12"
                    alt="facebook"
                  />
                </div>
              </div>
              <Img
                src="images/img_fire.svg"
                className="h-12 ml-[26px] w-12"
                alt="fire"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-6 h-9 md:h-auto items-center justify-start ml-12 md:ml-[0] mt-9 w-[590px] sm:w-full">
              <Line className="bg-black_900 h-0.5 w-[43%]" />
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                variant="body6"
              >
                Or
              </Text>
              <Line className="bg-black_900 h-0.5 w-[43%]" />
            </div>
            <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mt-[29px] w-full">
              <Input
                wrapClassName="bg-gray_300_7f pl-[30px] pr-[35px] py-[9px] rounded-[12px] w-full"
                className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 sm:px-5 text-black_900 text-left text-xl w-full"
                type="email"
                name="groupTwelve"
                placeholder="Email"
              ></Input>
              <Input
                wrapClassName="bg-bluegray_100_7f flex pl-[30px] pr-[23px] py-[3px] rounded-[12px] w-full"
                className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 sm:px-5 text-black_900 text-left text-xl w-full"
                type="password"
                name="groupEleven"
                placeholder="Password"
                suffix={
                  <Img
                    src="images/img_lock.svg"
                    className="ml-[35px] my-auto"
                    alt="lock"
                  />
                }
              ></Input>
            </div>
            <div
              className="common-pointer bg-white_A700 flex h-[30px] md:h-auto items-center justify-start md:ml-[0] ml-[494px] mt-[27px] w-[184px]"
              onClick={() => navigate("/forgotpassword")}
            >
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                variant="body8"
              >
                Forgot password?
              </Text>
            </div>
            <Button
              className="common-pointer bg-gray_900_e5 cursor-pointer font-semibold leading-[normal] min-w-[222px] mt-20 mx-auto py-2.5 rounded-md text-center text-white_A700 text-xl w-auto"
              onClick={() => navigate("/signupnext")}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
