import React from "react";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="border border-dashed border-blue-700 relative flex flex-wrap items-center justify-between px-16 py-3 bg-blue-100 text-blue-700">
                <div className="container flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="no-underline text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap"
                            href="#pablo"
                        >
                            PHDI Logo
                        </a>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="my-0 flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="no-underline py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">What is a Building Block</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="no-underline px-9 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Our product offerings</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="no-underline py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Partner with us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
