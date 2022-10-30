import React from 'react'
import Navbar from '../component/Navbar/Navbar.Component';

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 overflow-hidden">
                <Component {...props}/>
            </div>
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayoutHoc