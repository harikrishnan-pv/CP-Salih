import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbarr() {
   
    return (
        <div>
            <nav className='navbarr absolute w-full bg-gray-500  z-40 shadow-xl' >
                <div className="bg-white lg:bg-transparent stickerr w-100  text-gray-300">
                    <div className="max-w-7xl px-5 py-2 mx-auto">
                        <div className="flex justify-around">
                            <Link to="/">
                                <div className="flex items-center">
                                    <img width="70" src="imgs/logo.png" alt="" />
                                   
                                </div>
                            </Link>
                            <div className="flex hidden lg:flex items-center space-x-7">
                                <Link className="hover:text-white" to="/about">
                                    Profile
                                </Link>

                                <Link className="hover:text-white" to="/clientele">
Gallery
                                </Link>

                                <Link className="hover:text-white" to="/contact">
Services
                                </Link>
                            </div>
                            <div className="lg:hidden ham flex items-center">
                                <button>
                                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden hidden menu items-center justify-right px-4 space-y-5 py-5">
                        <Link className="hover:text-black block" to="/about">
                            Our Services
                        </Link>

                        <Link className="hover:text-black block" to="/clientele">
                            Our Clientele
                        </Link>

                        <Link className="hover:text-black block" to="/contact">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

