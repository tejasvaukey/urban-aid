import providers from "../utils/data.jsx";

export default function HomePage() {
    return (
        <main className="bg-color1 px-64 py-8">
            <section className="flex w-full  tracking-wider">
                <div className=" w-1/4 p-2 pl-0 mr-5">
                    <img
                        className="border-2 border-[#A99985] w-[300px] h-[300px] rounded-xl"
                        src="../assets/images/logo2.jpg"
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
                            <button className="bg-color2 px-5 py-2 flex font-semibold items-center rounded-lg">
                                Book a call
                                <svg
                                    className=" ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#e8eaed"
                                >
                                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-20">
                <h2 className="color2 text-xl">Services Provided:</h2>
                <ul className="mt-6">
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Clothing Alterations
                        <ul>
                            <li className="list-disc ml-8 italic">
                                Hemming, resizing, and adjusting clothing for
                                the perfect fit.
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="mt-20 mx-14 flex justify-around items-center h-[200px]">
                    <div className="color2">Availability:</div>
                    <div className="h-full border border1"></div>
                    <div className="color2">Average response time:</div>
                    <div className="h-full border border1"></div>
                    <div className="color2">Average work time:</div>
                </div>
            </section>
            <section></section>
        </main>
    );
}
