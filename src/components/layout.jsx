import React from 'react'
import Navbar from './navbar'
import Footer from '../components/footer'




export default function Layout({ children }) {

    return (
        <div >
            <Navbar />
            <div>
                {children}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
