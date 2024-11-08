import logo2 from "../assets/images/logo2.jpg";

const Footer = () => {
  return (
    <footer className="m bg-black py-10 px-60 h-72">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-28">
            <div className="h-28 flex items-center">
              <img src={logo2} alt="" className="object-cover h-full" />
              <h1 className="font-bold tracking-widest color2 text-2xl leading-normal">
                Urban <br />
                Aid
              </h1>
            </div>
            <div>
              <button className="bg-color2 px-5 py-2 flex font-semibold items-center rounded-lg text-black">
                Download App
              </button>
            </div>
          </div>
          <div className=" flex gap-16">
            <i className="ri-instagram-line text-4xl color2"></i>
            <i className="ri-facebook-line text-4xl color2"></i>
            <i className="ri-twitter-x-line text-4xl color2"></i>
            <i className="ri-linkedin-line text-4xl color2"></i>
          </div>
        </div>
        <div className="flex justify-between mt-20 font-thin ">
          <p>© 2024 Urban Aid. All rights reserved.</p>
          <div className="flex gap-16">
            <p className=" cursor-pointer">About Us</p>
            <p className=" cursor-pointer">Terms and Conditions</p>
            <p className=" cursor-pointer">Help/FAQ</p>
            <p className=" cursor-pointer">Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
