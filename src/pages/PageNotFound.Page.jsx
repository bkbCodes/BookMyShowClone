import React from 'react'
import { Link } from 'react-router-dom';
import DefaultLayoutHoc from '../layout/Default.layout'

const PageNotFound = () => {
  return (
    <>
        <div className=" bg-yellow-100 my-0 flex justify-center align-middle flex-col" style={{'height':'69vh','position': 'relative'}}>
            <h1 className='mx-auto text-red-700 font-extrabold text-5xl'>404</h1>
            <div className='mx-auto'>Page Not Found</div>
            <p className='mx-auto my-5'>Go to <Link to={'/'} className=' text-blue-900'>Home</Link></p>
            <img src="n.png" alt="Lost" className=' h-72' style={{'position': 'absolute', 'bottom':'0px', 'right':'1rem'}}/>
        </div>
    </>
  )
}

export default DefaultLayoutHoc(PageNotFound);