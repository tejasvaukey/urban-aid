import { useState } from "react";

function ProviderTerms({ providerData, setProviderData, pageTitle, page }) {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
    setProviderData({ ...providerData, readTerms: true });
  };

  return (
    <div className="pr-10">
      <h2 className="text-blue-900 text-3xl italic font-bold ">
        Register as a Service Provider
      </h2>
      <h3 className="font-semibold mb-2 mt-10 text-lg">{pageTitle[page]}</h3>
      <div className="">
        <p className="text-gray-700 mb-4">
          By registering as a Service Provider on Urban Aid, you agree to these
          Terms and Conditions. Please read them carefully.
        </p>

        <ul className="list-decimal list-inside text-gray-700 space-y-3">
          <li>
            <strong>Acceptance of Terms</strong> - By registering on Urban Aid,
            you accept these Terms and Conditions. If you do not agree, please
            refrain from creating an account.
          </li>
          <li>
            <strong>Service Quality</strong> - You agree to provide services
            with professionalism, reliability, and in compliance with industry
            standards.
          </li>
          <li>
            <strong>Licensing and Certification</strong> - Where required, you
            must hold valid licenses or certifications to offer the services
            listed on Urban Aid.
          </li>
          <li>
            <strong>Adherence to Laws</strong> - All services must comply with
            local, state, and federal regulations.
          </li>
          <li>
            <strong>Insurance Coverage</strong> - It is recommended to have
            appropriate insurance to cover liabilities related to your services.
          </li>
          <li>
            <strong>Account Responsibility</strong> - You are responsible for
            the information on your account, ensuring it is accurate and up to
            date. Keep your account credentials secure.
          </li>
          <li>
            <strong>Privacy and Data Usage</strong> - Urban Aid respects your
            privacy and handles your data according to our Privacy Policy. By
            registering, you consent to necessary data usage for service
            facilitation.
          </li>
          <li>
            <strong>Customer Interaction</strong> - Maintain courteous and
            respectful communication with customers. Misconduct or disputes may
            lead to account suspension.
          </li>
          <li>
            <strong>Availability Updates</strong> - You must keep your
            availability information accurate and promptly update it to reflect
            changes.
          </li>
          <li>
            <strong>Prohibited Activities</strong> - You agree not to engage in
            fraudulent activities, misuse Urban Aid`&#39;`s platform, or offer
            services outside the agreed terms with customers.
          </li>
          <li>
            <strong>Payment Terms</strong> - Urban Aid facilitates secure
            payments. Misuse or fraudulent claims may lead to account
            termination.
          </li>
          <li>
            <strong>Modifications to Terms</strong> - Urban Aid reserves the
            right to update these terms. Continued use of the platform implies
            acceptance of the updated terms.
          </li>
          <li>
            <strong>Account Suspension and Termination</strong> - Urban Aid
            reserves the right to suspend or terminate accounts that violate
            these terms or fail to meet service quality standards.
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
      </div>
    </div>
  );
}

export default ProviderTerms;
