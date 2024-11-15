import UserSide from "../components/user_registration/UserSide";
import ProviderSide from "../components/provider_registration/ProviderSide";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* header  */}
      <div className="absolute p-10 w-1/2 h-40  ">
        <h4 className="text-blue-900 font-extrabold  text-4xl ">Urban Aid</h4>
        <p className="my-4 text-blue-900 ">
          Your Go-To Solution for Local Services
        </p>
        <div className="border-b-2 border-blue-900 w-full"></div>
      </div>

      {/* mainbox  */}
      <div className="h-svh w-full flex top-0">
        {/* Left Side  */}
        <div className="h-full w-1/2 p-10  bg-gradient-to-br from-white to-blue-200 py-40">
          <UserSide />
        </div>

        <div className="h-full w-1/2 p-10  bg-gradient-to-br from-blue-950 to-black py-40 text-white">
          <ProviderSide />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
