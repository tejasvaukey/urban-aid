import { useState } from "react";

function UserTerms({ userData, setUserData }) {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
    setUserData({ ...userData, readTerms: true });
  };

  return (
    <div className="pr-10">
      <div className="">
        <p className="text-gray-700 mb-4">
          By registering on Urban Aid, you agree to these Terms and Conditions.
          Please read them carefully.
        </p>

        <ul className="list-decimal list-inside text-gray-700 space-y-3">
          <li>
            <strong>Acceptance of Terms</strong> - By registering on Urban Aid,
            you agree to these Terms and Conditions. If you do not agree, please
            refrain from creating an account.
          </li>
          <li>
            <strong>User Account Responsibility</strong> - You are responsible
            for all activity on your account. Ensure your information is
            accurate and keep your password secure. Report any unauthorized
            access immediately.
          </li>
          <li>
            <strong>Eligibility</strong> - You must be at least 18 years old to
            create an account.
          </li>
          <li>
            <strong>Service Provider Requirements</strong> - Service providers
            must adhere to all applicable laws and maintain professional
            conduct.
          </li>
          <li>
            <strong>Usage Limitations</strong> - You agree not to misuse Urban
            Aid’s platform or services.
          </li>
          <li>
            <strong>Privacy and Data Usage</strong> - Urban Aid respects your
            privacy and handles your information according to our Privacy
            Policy.
          </li>
          <li>
            <strong>Modifications to Terms</strong> - Urban Aid reserves the
            right to update these terms at any time.
          </li>
          <li>
            <strong>Account Suspension and Termination</strong> - Urban Aid
            reserves the right to suspend or terminate accounts that violate
            these terms.
          </li>
        </ul>

        <div className="mt-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={accepted}
              onChange={() => handleCheckboxChange()}
            />
            <span className="ml-2 text-gray-700">
              I have read and agree to the Terms and Conditions
            </span>
          </label>
        </div>

        {/* <button
          className={`mt-6 w-full px-4 py-2 text-white rounded ${
            accepted
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!accepted}
        >
          Register
        </button> */}
      </div>
    </div>
  );
}

export default UserTerms;
