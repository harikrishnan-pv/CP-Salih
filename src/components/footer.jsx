import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer class="footer-1 py-60 font-bold bg-gray-700 text-gray-700  sm:py-12">
                <div class="container my-16 max-w-7xl mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className=" mx-24 text-white text-5xl">
                        A rich man is nothing <br /> but a poor man with money
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            
                            <ul class="list-none text-white footer-links">
                                <li class="mb-2">
                                    <Link className="border-b border-solid border-transparent hover:border-gray-200 hover:text-gray-200" to="/about">
                                       HOME
                                    </Link>

                                </li>
                                <li class="mb-2">
                                    <Link className="border-b border-solid border-transparent hover:border-gray-200 hover:text-gray-200" to="/story">
                                       OUR VISION
                                    </Link>

                                </li>
                                <li class="mb-2">
                                    <Link className="border-b border-solid border-transparent hover:border-gray-200 hover:text-gray-200" to="/clientele">
                                       GALLERY
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link className="border-b border-solid border-transparent hover:border-gray-200 hover:text-gray-200" to="/privacypolicy">
                                        OUR FOUNDER
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 text-white md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <Link className="border-b border-solid border-transparent hover:border-gray-200 hover:text-gray-200" to="/maas">
                                       SUPPORT
                                    </Link>

                                </li>
                                <li class="mb-2">
                                    <Link className="border-b border-solid border-transparent hover:border-gray-200 hover:text-gray-200" to="/baas">
                                      CONTACT US
                                    </Link>

                                </li>
                               
                            </ul>
                        </div>
                        

                    </div>
                </div>
            </footer>
        </div>
    )
}
