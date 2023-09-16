

export default function DefaultFooter() {
    return (
        <div>
            <footer className="relative text-white  pt-8 ">
                <div className="container py-20 max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="text-4xl pb-4 ">
                                <b>CP Mohammed Memorial Charitable Trust (CPMCT)</b>
                                <p className="text-sm">
                                    
                                    <br />
                                </p>
                                (Founded by CP Salih, Chairman and Managing Director of AASA Group of Companies)
                                
                            </div>

                        
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 ">

                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                HOME
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="http://aasa.ae/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                ABOUT AASA
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                OUR VISION
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                GALLERY
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                OUR FOUNDER
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                SUPPORT
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-300 font-bold hover:text-white block pb-2 text-sm"
                                            >
                                                CONTACT US
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-100 font-medium py-1">
                                Copyright © {new Date().getFullYear()} CP Trust Designed and developed by {' '}
                                <a
                                    href="/"
                                    className="text-gray-300 hover:text-white transition-all"
                                >
                                    Circle.
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
