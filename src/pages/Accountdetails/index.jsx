import React from "react";

import { Img, Text, Line } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const AccountdetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-abrilfatface items-center justify-end mx-auto pt-[18px] w-full">
        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1388px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_menu.svg"
              className="h-[33px] md:mt-0 mt-3 w-[33px]"
              alt="menu"
            />
            <Text
              className="common-pointer font-normal md:ml-[0] ml-[610px] not-italic text-black_900 text-left w-auto"
              variant="body1"
              onClick={() => navigate("/home1")}
            >
              HAZE
            </Text>
            <Img
              src="images/img_search.svg"
              className="h-[33px] md:ml-[0] ml-[468px] md:mt-0 mt-3.5 w-[33px]"
              alt="search"
            />
            <Img
              src="images/img_favorite.svg"
              className="common-pointer h-[33px] ml-4 md:ml-[0] md:mt-0 mt-[13px] w-[33px]"
              onClick={() => navigate("/wishlist")}
              alt="favorite"
            />
            <Img
              src="images/img_cart.svg"
              className="h-[33px] ml-4 md:ml-[0] md:mt-0 mt-3.5 w-[33px]"
              alt="cart"
            />
            <Img
              src="images/img_user.svg"
              className="common-pointer h-[33px] ml-4 md:ml-[0] md:mt-0 mt-[11px] w-[33px]"
              onClick={() => navigate("/login")}
              alt="user"
            />
          </div>
          <div className="flex flex-col font-dosis items-center justify-start w-full">
            <div className="md:h-[1171px] h-[938px] sm:h-[971px] md:px-5 relative w-full">
              <Line className="bg-black_900 h-px mx-auto w-full" />
              <div className="absolute md:h-[1171px] h-[938px] sm:h-[971px] inset-[0] justify-center m-auto w-full">
                <Img
                  src="images/img_pexelscottonbr.png"
                  className="h-[938px] m-auto object-cover w-full"
                  alt="pexelscottonbr"
                />
                <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[91%]">
                  <Text
                    className="font-dosis font-extrabold md:ml-[0] ml-[528px] text-left text-white_A700 w-auto"
                    variant="body1"
                  >
                    Welcome Rohi!
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[239px] mt-[39px] w-[69%] md:w-full">
                    <div className="sm:h-40 h-[34px] relative w-full">
                      <div className="absolute bg-white_A700 flex h-full inset-y-[0] items-center justify-start left-[9%] my-auto p-[5px] w-auto">
                        <Text
                          className="my-[3px] text-black_900 text-left w-auto"
                          variant="body12"
                        >
                          Account Details
                        </Text>
                      </div>
                      <Line className="absolute bg-black_900 h-px inset-x-[0] mx-auto shadow-bs top-[0] w-full" />
                      <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-y-[0] items-start justify-start my-auto right-[10%] w-[67%]">
                        <Text
                          className="common-pointer text-left text-white_A700 w-auto"
                          variant="body12"
                          onClick={() => navigate("/orderdetails")}
                        >
                          Order Details
                        </Text>
                        <Text
                          className="common-pointer sm:ml-[0] ml-[37px] text-left text-white_A700 w-auto"
                          variant="body12"
                          onClick={() => navigate("/wishlist")}
                        >
                          My Wishlist
                        </Text>
                        <Text
                          className="common-pointer ml-10 sm:ml-[0] text-left text-white_A700 w-auto"
                          variant="body12"
                          onClick={() => navigate("/")}
                        >
                          Subscription
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[50px] text-left text-white_A700 w-auto"
                          variant="body12"
                        >
                          Help
                        </Text>
                        <Text
                          className="common-pointer sm:ml-[0] ml-[65px] text-left text-white_A700 w-auto"
                          variant="body12"
                          onClick={() => navigate("/thehazeexperience")}
                        >
                          The Haze Experience
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-black_900 h-px shadow-bs w-full" />
                  </div>
                  <Text
                    className="font-bold font-cormorantgaramond md:ml-[0] ml-[390px] mt-[63px] text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    My Account Details
                  </Text>
                  <Text
                    className="font-hahmlet font-normal mr-14 mt-6 not-italic text-left text-white_A700 w-auto"
                    variant="body6"
                  >
                    Welcome Rohi Bindal, this is your account summary. You can
                    access & manage your personal information.
                  </Text>
                  <Text
                    className="font-bold font-hahmlet md:ml-[0] ml-[1135px] mt-[71px] text-left text-shadow-ts text-white_A700 underline w-[14%] sm:w-full"
                    variant="body6"
                  >
                    Edit Details
                  </Text>
                  <div className="flex md:flex-col flex-row font-dosis md:gap-10 items-start justify-between ml-auto mt-[74px] w-[62%] md:w-full">
                    <Text
                      className="font-extrabold text-left text-white_A700"
                      variant="body3"
                    >
                      <>
                        Name
                        <br />
                        Phone number
                        <br />
                        Email address
                      </>
                    </Text>
                    <Text
                      className="font-extrabold text-left text-white_A700"
                      variant="body3"
                    >
                      <>
                        Ms. Rohi Bindal
                        <br />
                        +91 7506268475
                        <br />
                        rohibindal@gmail.com
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Footer1 className="flex items-center justify-center md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountdetailsPage;
