const LandingPage = () => {
  return (
    <div className="landing-page min-h-screen  text-[#ECDFCC] font-sans">
      <div id="landingBG" className=" h-svh w-full absolute overflow-x-hidden"></div>
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
      <section className="how-it-works  py-16">
        <h2 className="text-3xl font-semibold text-black">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-10">
          <div className="step bg-[#3C3D37] p-6 rounded shadow-md text-[#ECDFCC]">
            <h3 className="text-xl font-semibold">1. Search</h3>
            <p className="mt-2">Find local service providers near you.</p>
          </div>
          <div className="step bg-[#3C3D37] p-6 rounded shadow-md text-[#ECDFCC]">
            <h3 className="text-xl font-semibold">2. Book</h3>
            <p className="mt-2">Choose your service and book a call.</p>
          </div>
          <div className="step bg-[#3C3D37] p-6 rounded shadow-md text-[#ECDFCC]">
            <h3 className="text-xl font-semibold">3. Get Service</h3>
            <p className="mt-2">Service is delivered to your location.</p>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      {/* <section className="services-offered text-center py-16">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          <div className="service-item bg-[#3C3D37] py-6 rounded shadow-md text-[#ECDFCC]">
            Cleaning
          </div>
          <div className="service-item bg-[#3C3D37] py-6 rounded shadow-md text-[#ECDFCC]">
            Plumbing
          </div>
          <div className="service-item bg-[#3C3D37] py-6 rounded shadow-md text-[#ECDFCC]">
            Electricians
          </div>
          <div className="service-item bg-[#3C3D37] py-6 rounded shadow-md text-[#ECDFCC]">
            Pet Care
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      {/* <section className="benefits text-center py-16">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <ul className="mt-6 space-y-4 text-[#697565]">
          <li>Vetted Professionals</li>
          <li>Easy Booking</li>
          <li>Quality Service</li>
          <li>Customer Support</li>
        </ul>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="testimonials text-center py-16 bg-[#3C3D37]">
        <h2 className="text-3xl font-semibold">What Our Users Say</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="testimonial bg-[#181C14] p-6 rounded shadow-md text-[#ECDFCC]">
            <p>
              &ldquo; Urban Aid made it so easy to find reliable help! &ldquo;
            </p>
            <p className="mt-2 text-sm text-[#697565]">- Jane Doe</p>
          </div>
          <div className="testimonial bg-[#181C14] p-6 rounded shadow-md text-[#ECDFCC]">
            <p>&ldquo; Fantastic service providers at my fingertips. &ldquo;</p>
            <p className="mt-2 text-sm text-[#697565]">- John Smith</p>
          </div>
        </div>
      </section> */}

      {/* Call-to-Action Section */}
      {/* <section className="cta-section text-center py-16 bg-[#ECDFCC] text-[#181C14]">
        <h2 className="text-3xl font-semibold">Get Started Today</h2>
        <button className="mt-6 bg-[#3C3D37] text-[#ECDFCC] py-2 px-6 rounded hover:bg-[#697565] hover:text-[#181C14]">
          Sign Up Now
        </button>
      </section> */}
    </div>
  );
};

export default LandingPage;
