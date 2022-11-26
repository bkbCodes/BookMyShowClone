import React from 'react'
import { Footer } from '../component/Footer/Footer.Component';
import MovieNavbar from '../component/Navbar/MovieNavbar.Component';

const MovieLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
            <Footer />
        </div>
    )
}

export default MovieLayoutHoc