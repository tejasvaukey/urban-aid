import { useState } from "react";

import { UserOption, UserForm, UserOTP, UserAddress, UserTerms } from "./index";

const UserSide = () => {
  const [page, setPage] = useState(0);
  const pageTitle = [
    "",
    "1. Enter credentials",
    "2. OTP",
    "3. Address",
    "Terms and Conditions",
  ];
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    verified: false,

    addressHolderName: "",
    addressPhoneNo: "",
    addressName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    readTerms: false,
  });

  const UserPageDisplay = () => {
    if (page === 0) {
      return <UserOption pageTitle={pageTitle} page={page} setPage={setPage} />;
    } else if (page === 1) {
      return (
        <UserForm
          userData={userData}
          setUserData={setUserData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else if (page === 2) {
      return (
        <UserOTP
          userData={userData}
          setUserData={setUserData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else if (page === 3) {
      return (
        <UserAddress
          userData={userData}
          setUserData={setUserData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else {
      return (
        <UserTerms
          userData={userData}
          setUserData={setUserData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    }
  };
  return (
    <div className="flex flex-col gap-2 h-full transform ">
      <div>{UserPageDisplay()}</div>

      <div
        style={{
          display: page === 0 ? "none" : "inline",
        }}
        className="flex gap-2"
      >
        <button
          className="px-4 py-2 bg-blue-950 text-white rounded-lg  mr-2"
          onClick={() => setPage((currentPage) => currentPage - 1)}
          disabled={page == 0}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-blue-950 text-white rounded-lg ml-2"
          onClick={() => {
            if (page === 2 && userData.verified === false) {
              alert("Not verified");
            } else if (page === 4 && userData.readTerms === false) {
              alert("Agree to the terms & conditions");
            } else {
              setPage((currentPage) => currentPage + 1);
            }
          }}
        >
          {page === pageTitle.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      {/* Progress Bar  */}
      {/* <div className="p-10 flex gap-5 w-1/2 absolute bottom-0 ">
        <div className="border border-t-2 bg-blue-300 w-full h-[7px]">
          <div
            className="border border-t-2 border-blue-800 transition-all"
            style={{
              width:
                page === 0
                  ? "25%"
                  : page == 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
      </div> */}
    </div>
  );
};

export default UserSide;
