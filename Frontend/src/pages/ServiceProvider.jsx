import providers from "../utils/data.jsx";
import tailorPFP from "../assets/images/tailor.png";
import { img1, img2, img3, img4, img5 } from "../utils/images.js";

export default function ServiceProvider() {
  return (
    <main className=" px-72 py-28 text-white bg-card2 ">
      <section
        id="info"
        className="flex w-full  tracking-wider border-white border p-10 rounded-lg"
      >
        <div className=" w-1/4 p-2 pl-0 mr-5">
          <img
            className="border-2 border-[#A99985] w-[300px] h-[300px] rounded-xl object-cover"
            src={tailorPFP}
            alt="photo"
          />
        </div>
        <div className="w-3/4 h-[300px] flex flex-col gap-5">
          <h2 className="text-5xl font-semibold color2">
            {providers[0].shopname}
          </h2>
          <h3>
            <span className="color2">Name: </span>
            {providers[0].name}
          </h3>
          <p>
            <span className="color2">Discription: </span>
            {providers[0].discription}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5">
              <p>
                <span className="color2">Average Rating: </span>
                ★★★★☆ {providers[0].rating}
              </p>
              <p>
                <span className="color2">Address: </span>
                {providers[0].address}
              </p>
              <p>
                <span className="color2">Distance: </span>
                {providers[0].distance} km(s) away
              </p>
            </div>
            <div>
              <button className="bg-color2 px-5 py-2 flex font-semibold items-center rounded-lg text-black">
                Book a call
                <svg
                  className=" ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="servicesProvided" className="mt-20 flex justify-between ">
        <div>
          <h2 className="color2 text-xl semibold">Services Provided:</h2>
          <ul className="mt-6">
            {providers[0].services.map((service, index) => (
              <li className="mb-2" key={index}>
                {service.category}
                <ul>
                  <li className="list-disc ml-8 italic">
                    {service.description}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="  flex flex-col justify-between items-center h-full  gap-10">
          <div className=" text-center ">
            <span className="color2">
              Availability: <br />
            </span>
            Monday to Friday: 9 AM – 6 PM <br />
            Saturday: 10 AM – 4 PM <br />
            Sunday: Closed
          </div>
          <div className="w-full border border1"></div>
          <div className="text-center">
            <span className="color2">Average response time:</span> <br />
            4-5 hrs
          </div>
          <div className="w-full border border1"></div>
          <div className="text-center">
            <span className="color2">Average work time:</span> <br />
            1-2 weeks
          </div>
        </div>
      </section>

      {/* gallery */}
      <section id="previousWork" className="mt-20 mb-20 ">
        <h2 className="color2 text-xl font-semibold mb-10">Previous Works:</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-28 w-full">
          <div className="bg-black h-96 w-96 ">
            <img src={img1} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="bg-black h-96 w-96 ">
            <img src={img2} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="bg-black h-96 w-96 ">
            <img src={img3} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="bg-black h-96 w-96 ">
            <img src={img4} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="bg-black h-96 w-96 ">
            <img src={img5} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="bg-black h-96 w-96 relative">
            <img
              src={img1}
              alt=""
              className="object-cover h-full w-full opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg cursor-pointer">
              More photos
            </div>
          </div>
        </div>
      </section>

      {/* reviews  */}
      <section id="customerReviews">
        <h2 className="color2 text-xl font-semibold mb-8">Customer Reviews:</h2>
        <div>
          <ol className="pl-5 list-decimal">
            <li className="mb-4">
              <h3>Emily W.</h3>
              <p>★★★★★</p>
              <p className="">
                &ldquo; John worked magic on my wedding dress! The fit was
                perfect, and he made the alterations in just a week. So
                professional and kind. Highly recommend! &rdquo;
              </p>
            </li>
            <li className="mb-4">
              <h3>Michael S.</h3>
              <p>★★★★☆</p>
              <p className="">
                &ldquo; Had my suit tailored here, and the fit is fantastic. The
                only reason I’m not giving 5 stars is that it took a day longer
                than expected, but overall, great service! &rdquo;
              </p>
            </li>
            <li className="mb-4">
              <h3>Sophia L.</h3>
              <p>★★★★★</p>
              <p className="">
                &ldquo; Amazing experience! I brought in a vintage coat that
                needed some serious repair, and John made it look brand new.
                Excellent craftsmanship and attention to detail. &rdquo;
              </p>
            </li>
            <li className="mb-4">
              <h3>David R.</h3>
              <p>★★★★☆</p>
              <p className="">
                &ldquo; Great quality work. My trousers were altered perfectly.
                The price was a bit higher than I expected, but the results were
                worth it. &rdquo;
              </p>
            </li>
          </ol>
          <button className="bg-color2 px-5 py-2 flex font-semibold items-center rounded-lg text-black mt-6">
            See all
          </button>
        </div>
        <div className="flex justify-center items-center mt-16  px-52 w-full h-40">
          <div className="bg-[#0e0f0f] h-full w-full p-4">
            <h4>Leave a Review:</h4>
            <textarea
              name=""
              id=""
              placeholder="Help others by sharing your experience. How was your service with John Doe Custom Tailoring?"
              className=" bg-transparent w-full mt-5 h-full pl-2 resize-none outline-none"
            ></textarea>
          </div>
        </div>
      </section>
    </main>
  );
}
