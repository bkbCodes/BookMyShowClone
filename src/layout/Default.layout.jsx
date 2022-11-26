import React from 'react'
import { Footer } from '../component/Footer/Footer.Component';
import Navbar from '../component/Navbar/Navbar.Component';

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 overflow-hidden">
                <Component {...props}/>
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayoutHoc