import { SubNavbar } from "./index";

export default function Navbar() {
    return (
        <>
            <nav className="bg-black py-3 px-48">
                <header className="flex justify-between items-center  ">
                    <div className="flex items-center justify-start w-1/5">
                        <img
                            src="../assets/images/logo2.jpg"
                            alt="Logo"
                            className="w-10 h-10 bg-color2 mr-2"
                        />
                        <h4 className="font-bold tracking-widest color2">
                            Urban <br />
                            Aid
                        </h4>
                    </div>
                    <div className="bg-slate-700 px-3 rounded-xl w-2/5 flex items-center ">
                        <input
                            type="text"
                            className="flex-grow outline-none h-10 bg-transparent"
                            placeholder="Search for service..."
                        />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e8eaed"
                            >
                                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-between items-center w-1/5">
                        <div>
                            <a href="/">Provide Services</a>
                        </div>
                        <div>
                            <a href="/">Orders</a>
                        </div>
                        <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
                    </div>
                </header>
            </nav>
            <SubNavbar />
        </>
    );
}
