import { useState } from "react";
import {
  ProviderOption,
  ProviderForm,
  ProviderOTP,
  ProviderAddress,
  ProviderTerms,
  ServiceDetails,
} from "./index";

const UserSide = () => {
  const [page, setPage] = useState(0);
  const pageTitle = [
    "",
    "1. Enter credentials",
    "2. OTP",
    "3. Service details",
    "4. Address",
    "Terms and Conditions",
  ];
  const [providerData, setProviderData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    verified: false,

    // Business or Service Details
    serviceType: "", // Type of service (electrician, plumber, etc.)
    businessName: "",
    businessDescription: "",
    yearsOfExperience: "",
    availability: {
      // Options could include full-time, part-time, or specific hours
      Monday: { open: "09:00 AM", close: "05:00 PM" },
      Tuesday: { open: "09:00 AM", close: "05:00 PM" },
      Wednesday: { open: "09:00 AM", close: "05:00 PM" },
      Thursday: { open: "09:00 AM", close: "05:00 PM" },
      Friday: { open: "09:00 AM", close: "05:00 PM" },
      Saturday: { open: "10:00 AM", close: "04:00 PM" },
      Sunday: { open: "Closed", close: "Closed" },
    },
    professionalLicense: "", // License or certification details (if required)
    aadharCard: "",
    profilePicture: "",
    previousWorks: "",

    // Address and Contact Information
    addressHolderName: "",
    addressPhoneNo: "",
    addressName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",

    // Compliance
    insurance: false, // Whether they have insurance coverage
    backgroundCheck: false, // Whether they've undergone a background check
    readTerms: false, // Confirm they've read and accepted provider-specific terms
  });

  const UserPageDisplay = () => {
    if (page === 0) {
      return (
        <ProviderOption pageTitle={pageTitle} page={page} setPage={setPage} />
      );
    } else if (page === 1) {
      return (
        <ProviderForm
          providerData={providerData}
          setProviderData={setProviderData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else if (page === 2) {
      return (
        <ProviderOTP
          providerData={providerData}
          setProviderData={setProviderData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else if (page === 3) {
      return (
        <ServiceDetails
          providerData={providerData}
          setProviderData={setProviderData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else if (page === 4) {
      return (
        <ProviderAddress
          providerData={providerData}
          setProviderData={setProviderData}
          pageTitle={pageTitle}
          page={page}
        />
      );
    } else {
      return (
        <ProviderTerms
          providerData={providerData}
          setProviderData={setProviderData}
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
            if (page === 2 && providerData.verified === false) {
              alert("Not verified");
            } else if (page === 4 && providerData.readTerms === false) {
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
