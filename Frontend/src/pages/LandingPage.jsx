import searchImg from "../assets/images/search-removebg-preview.png";
import bookImg from "../assets/images/book.png";
import deliveryImg from "../assets/images/delivery.png";
import {
  auto,
  child,
  cleaning,
  education,
  events,
  health,
  home,
  homemain,
  legal,
  misc,
  moving,
  personal,
  real,
  tech,
} from "../utils/images";

const LandingPage = () => {
  return (
    <div className="landing-page min-h-screen  text-[#ECDFCC] font-sans">
      <div
        id="landingBG"
        className=" h-svh w-full absolute overflow-x-hidden"
      ></div>
      {/* Hero Section */}
      <section className="hero-section text-center py-20 h-svh flex flex-col items-center justify-center z-10 relative">
        <h1 className="text-[200px] font-bold leading-none shadoww ">
          Urban Aid
        </h1>
        <h1 className="text-[200px] font-bold absolute pb-[6.5rem] pl-2 text-white">
          Urban Aid
        </h1>
        <p className="mt-4 text-xl font-bold text-white shadoww">
          Your Go-To Solution for Local Services
        </p>
        <div className="z-10">
          <button className="mt-8 bg-[#ffffff] font-bold text-[#181C14] py-2 px-6  rounded-full hover:bg-transparent hover:text-white border-2 border-white shadow-lg">
            Register Now
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="h-svh bg-[#060c1f] flex px-24 pt-10">
        <div className=" border-red-600 pt-24 pr-4  ">
          <h2 className="text-9xl font-extrabold text-white">
            How it <span className="italic ">works</span>
            <span className="text-gray-400 italic font-extrabold">?</span>
          </h2>
          <p className=" my-10 text-xl text-gray-400 pr-10">
            Urban Aid connects you with trusted local service providers at the
            tap of a button. Discover how simple it is to find and book quality
            services right to your door.
          </p>

          <div className="border-t  py-10 flex h-[56%] gap-5 text-white">
            <div className="border w-1/2 h-1/2 rounded-lg px-6 py-5 flex flex-col justify-between">
              <div>
                <p className="text-gray-400">Services Completed: </p>
                <p className="italic">
                  10,000+ services successfully delivered
                </p>
              </div>
              <div>
                <p className="text-gray-400">Registered Providers: </p>
                <p className="italic">5,000+ trusted professionals</p>
              </div>
              <div>
                <p className="text-gray-400">Happy Customers:</p>
                <p className="italic">98% satisfaction rate</p>
              </div>
            </div>
            <div className="border w-1/2 h-1/2 rounded-lg px-6 py-5 flex flex-col justify-between self-end mb-10">
              <div>
                <p className="text-gray-400">Wide Selection: </p>
                <p className="italic">Find trusted local services nearby.</p>
              </div>
              <div>
                <p className="text-gray-400">Easy Booking: </p>
                <p className="italic">Simple booking & quick responses.</p>
              </div>
              <div>
                <p className="text-gray-400">Quality Assurance: </p>
                <p className="italic">Select top-rated providers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-24 grid grid-cols-3 text-black">
          <div className="p-3 flex items-center">
            <div className="bg-card1 h-1/2 w-full  rounded-lg bg-opacity-90 p-5 flex flex-col gap-5">
              <img
                src={searchImg}
                alt=""
                className="flex-grow mb-5 rounded-md object-cover"
              />
              <h3 className="text-2xl font-bold">1. Search</h3>
              <p className="mt-2">Find local service providers near you.</p>
            </div>
          </div>
          <div className="p-3">
            <div className="h-50 w-full"></div>
            <div className="bg-card1 h-1/2 w-full  rounded-lg p-5">
              <img src={bookImg} alt="" />
              <h3 className="text-2xl font-bold">2. Book</h3>
              <p className="mt-2">Choose your service and book a call.</p>
            </div>
          </div>
          <div className="p-3 flex flex-col justify-end">
            <div className="bg-card1 h-1/2 w-full  rounded-lg p-5">
              <img src={deliveryImg} alt="" />
              <h3 className="text-2xl font-bold">3. Get Service</h3>
              <p className="mt-2">Service is delivered to your location.</p>
            </div>
            <div className="h-20 w-full"></div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="services-offered text-center pt-24 p-10 h-svh bg-white grid grid-cols-4 grid-rows-4 gap-5 text-[#ffffff]">
        {/* Service Category 1 */}
        <div className="service-item relative rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={auto}
            alt="Auto Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Auto Services
          </p>
        </div>

        {/* Service Category 2 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold ">
          <img
            src={child}
            alt="Child & Elderly Care"
            className="h-full w-full object-cover rounded-lg "
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Child & Elderly Care
          </p>
        </div>

        {/* Title Area */}
        <div className="text-[#080f27] py-6 text-end col-span-2 flex items-center justify-end">
          <h2 className="text-9xl leading-3 italic">
            Our <span className="font-bold">Services</span>
          </h2>
        </div>

        {/* Service Category 3 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={cleaning}
            alt="Cleaning & Sanitization"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Cleaning & Sanitization
          </p>
        </div>

        {/* Service Category 4 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={education}
            alt="Education & Coaching"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Education & Coaching
          </p>
        </div>

        {/* Service Category 5 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={events}
            alt="Event & Party Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Event & Party Services
          </p>
        </div>

        {/* Service Category 6 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={health}
            alt="Health & Medical Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Health & Medical Services
          </p>
        </div>

        {/* Service Category 7 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={home}
            alt="Home Improvement"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Home Improvement
          </p>
        </div>

        {/* Service Category 8 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={homemain}
            alt="Home Maintenance & Repair"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Home Maintenance & Repair
          </p>
        </div>

        {/* Service Category 9 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={legal}
            alt="Legal & Financial Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Legal & Financial Services
          </p>
        </div>

        {/* Service Category 10 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={misc}
            alt="Household Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Household Services
          </p>
        </div>

        {/* Service Category 11 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={moving}
            alt="Moving & Delivery Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Moving & Delivery Services
          </p>
        </div>

        {/* Service Category 12 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={personal}
            alt="Personal Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Personal Services
          </p>
        </div>

        {/* Service Category 13 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={real}
            alt="Real Estate & Property Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Real Estate & Property Services
          </p>
        </div>

        {/* Service Category 14 */}
        <div className="service-item relative  rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold">
          <img
            src={tech}
            alt="Technology Services"
            className="h-full w-full object-cover   rounded-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-center bg-black  bg-opacity-30">
            Technology Services
          </p>
        </div>
      </section>

      {/* Benefits Section - Testimonials Section */}
      <section className="h-screen  flex flex-col ">
        <div className="benefits text-center  bg-card2 h-1/2 pt-24 pb-10 px-40 flex flex-col justify-between">
          <h2 className="text-7xl font-semibold text-white italic text-left">
            Why Choose <span className="">Us</span>
          </h2>
          <p className=" text-lg text-gray-400 text-left">
            We make it easy to find reliable local services, brso you get the
            help <br />
            you need, when you need it.
          </p>
          <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#697565]">
            <li className="p-6 bg-white rounded-lg shadow-md">
              <span className="block text-2xl mb-2">🌟</span>
              <h3 className="font-semibold text-lg">Vetted Professionals</h3>
              <p className="text-sm mt-2">
                Our experts are carefully selected and background-checked for
                your peace of mind.
              </p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-md">
              <span className="block text-2xl mb-2">📅</span>
              <h3 className="font-semibold text-lg">Easy Booking</h3>
              <p className="text-sm mt-2">
                Book a service effortlessly in just a few clicks, with immediate
                confirmation.
              </p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-md">
              <span className="block text-2xl mb-2">✔️</span>
              <h3 className="font-semibold text-lg">Quality Service</h3>
              <p className="text-sm mt-2">
                We hold ourselves to high standards to ensure you get top-notch
                service every time.
              </p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-md">
              <span className="block text-2xl mb-2">📞</span>
              <h3 className="font-semibold text-lg">Customer Support</h3>
              <p className="text-sm mt-2">
                Our support team is here to assist with any questions or issues
                along the way.
              </p>
            </li>
          </ul>
        </div>

        <div className="px-40 bg-card2 h-1/2 py-10">
          <div className="testimonials text-center  bg-white px-10  py-10  flex flex-col justify-between rounded-lg">
            <h2 className="text-7xl font-semibold text-[#080f27] italic text-right">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-500 text-right">
              Hear from our satisfied customers who trust us for all their local
              service needs.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="testimonial bg-card2 p-6 rounded-lg shadow-lg text-[#ECDFCC] h-44">
                <div className="flex items-center gap-3">
                  <img
                    src="/path-to-avatar1.jpg"
                    alt="Jane Doe"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <div className="flex text-yellow-400">★★★★☆</div>
                  </div>
                </div>
                <p className="mt-4">
                  &ldquo;Urban Aid made it so easy to find reliable help! The
                  booking was quick, and the service was outstanding.&rdquo;
                </p>
              </div>

              <div className="testimonial bg-card2 p-6 rounded-lg shadow-lg text-[#ECDFCC]">
                <div className="flex items-center gap-3">
                  <img
                    src="/path-to-avatar2.jpg"
                    alt="John Smith"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="mt-4">
                  &ldquo;Fantastic service providers at my fingertips. Highly
                  recommend for busy folks needing trusted services!&rdquo;
                </p>
              </div>

              <div className="testimonial bg-card2 p-6 rounded-lg shadow-lg text-[#ECDFCC]">
                <div className="flex items-center gap-3">
                  <img
                    src="/path-to-avatar3.jpg"
                    alt="Mary Ann"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Mary Ann</p>
                    <div className="flex text-yellow-400">★★★★☆</div>
                  </div>
                </div>
                <p className="mt-4">
                  &ldquo;The whole process was seamless and stress-free. I’ll
                  definitely be using Urban Aid again!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section text-center pt-16 pb-10  bg-card2 text-white h-[600px] flex items-center flex-col justify-center gap-10">
        <h2 className="text-7xl font-semibold mt-10">Get Started Today</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg tracking-wider italic">
          Join Urban Aid to easily find trusted, local services or start
          offering your expertise to a growing community.
        </p>
        <div className="mt-8 flex justify-center gap-14">
          <button className="bg-white text-black py-3 px-8 rounded-lg font-bold hover:bg-[#1d406c] hover:text-white transition-all duration-200 ">
            Sign Up as a User
          </button>
          <button className="bg-white text-black py-3 px-8 rounded-lg font-bold hover:bg-[#1d406c] hover:text-white transition-all duration-200">
            Become a Service Provider
          </button>
        </div>
        <p className="mt-6 text-md text-white">
          Already have an account?{" "}
          <a
            href="/login"
            className="underline text-[#a8a8a8] hover:text-[#3a73b8]"
          >
            Log in
          </a>
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
