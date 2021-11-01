import React from 'react'
import Navbar from './navbar'




export default function Layout({ children }) {

    return (
        <div >
            <div >
                <Navbar/>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
