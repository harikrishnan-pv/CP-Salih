
import Icon from '@material-tailwind/react/Icon';

export default function DefaultFooter() {
    return (
        <div>
            <footer className="relative text-white  pt-8 ">
                <div className="container py-20 max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <p className="text-4xl">
                            A rich man is nothing but a poor man with money
                            </p>
                           
                            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <a
                                    href="https://www.facebook.com/"
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-instagram"
                                    />
                                </a>
                                <a
                                    href="https://www.dribbble.com"
                                    className="grid place-items-center bg-white text-pink-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-dribbble"
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-youtube"
                                    />
                                </a>
                                <a
                                    href="https://github.com/"
                                    className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                   
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
