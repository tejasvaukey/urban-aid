const Footer = () => {
  return (
    <footer className="bg-white text-[#000000] py-10 h-[380px]">
      <div className="px-28 h-5/6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-2">
          {/* Company Info */}
          <div className=" ">
            <div>
              <h3 className="font-bold text-7xl mb-4">Urban Aid</h3>

              <p className="text-[#697565] mt-5 mb-10">
                Your all-in-one platform for local services. Discover and book
                trusted professionals with ease.
              </p>
            </div>
            <div className="w-1/2 flex items-center">
              <button className="bg-card2 text-white px-4 py-2 rounded-lg">
                Download App
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-4">
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#697565] ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0b0f09]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#697565]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#697565]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col space-y-2">
                <h4 className="mb-4 text-xl font-bold">Socials</h4>
                <a href="#" className="hover:text-[#697565]">
                  Facebook
                </a>
                <a href="#" className="hover:text-[#697565]">
                  Twitter
                </a>
                <a href="#" className="hover:text-[#697565]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#697565]">
                  LinkdIn
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="mb-4 text-xl font-bold">Get in Touch</h4>
              <p className="mr-7 mb-2">
                Feel free to reach out to us in case of any business related
                queries or support
              </p>
              <p>info@urbanaid.com</p>
              <p className="mt-2">+123 456 7890</p>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold">Our address:</h4>
              <p>
                Urban Aid <br />
                Street: Rruga B #99
              </p>
              <p className="mt-2">ZIP: 495009</p>
            </div>
          </div>

          {/* Quick Links */}
        </div>

        {/* Footer Bottom Section */}
      </div>
      <div className="border-t border-[#3C3D37] m-8 py-6 text-center text-xs text-[#697565] mx-28 flex justify-between items-start">
        <p>&copy; 2023 Urban Aid. All rights reserved.</p>
        <div className="">
          <a href="#" className="hover:text-[#ECDFCC] mr-2">
            Privacy Policy{" "}
          </a>{" "}
          |
          <a href="#" className="hover:text-[#ECDFCC] ml-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
