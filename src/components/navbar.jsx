import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";

export default function Navbarr() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar className="slide absolute z-40 w-full" color="blueGray" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>Navbar</NavbarBrand>
                    <NavbarToggler
                        color="white"
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                    <NavLink href="/" ripple="light">
                            Home
                        </NavLink>
                        <NavLink href="/profile" ripple="light">
                            Profile
                        </NavLink>
                        <NavLink href="/gallery" ripple="light">
                            Gallery
                        </NavLink>
                        <NavLink href="/services" ripple="light">
                            Services
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}