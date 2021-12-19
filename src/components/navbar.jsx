


import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbarr() {
    window.onload = function () {
        const btn = document.querySelector(".ham");
        const menu = document.querySelector(".menu");

        btn.addEventListener('click', () => {
            menu.classList.toggle("hidden")
        })
    }
    const [navbar, setNavbar] = useState(false)


    return (
        <div>
            <nav className='absolute navbarr bg-gray-200 w-full z-40 shadow-xl'>
                <div className="bg-white lg:bg-transparent stickerr w-100 text-xl text-gray-600">
                    <div className="max-w-7xl px-5 py-1 mx-auto">
                        <div className="flex justify-around items-center">
                            <div className="flex items-center ">
                               <Link to = "/">
                               <p className="text-lg md:text-2xl hidden md:block">CP Mohammed Memorial Charitable Trust</p>
                                <p className="text-lg md:hidden ">CP Mohammed Memorial  Charitable Trust</p>
                               </Link>

                            </div>
                            <Link to="/">
                                <div className="flex items-center md:pr-4 transform scale-75 md:scale-100">
                                    <img width="80" src="imgs/logo.png" alt="" />

                                </div>
                            </Link>
                            <div className="flex hidden lg:flex items-center space-x-7">
                                <Link className="hover:text-gray-600" to="/">
                                    Home
                                </Link>

                                <Link className="hover:text-gray-600" to="/profile">
                                    Profile
                                </Link>

                                <Link className="hover:text-gray-600" to="/gallery">
                                    Gallery
                                </Link>

                                <Link className="hover:text-gray-600" to="/activities">
                                    Activities
                                </Link>
                            </div>
                            <div className="lg:hidden ham flex items-center transform scale-75 md:scale-100">
                                <button>
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden hidden menu flex items-center justify-right px-4 space-y-5 py-5">
                        <div>
                            <Link className="hover:text-gray-600" to="/profile">
                                Profile
                            </Link>
                            <br />
                            <Link className="hover:text-gray-600" to="/gallery">
                                Gallery
                            </Link>
                            <br />
                            <Link className="hover:text-gray-600" to="/activities">
                                Services
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

