import React from 'react'

export const Footer = () => {
  return (
    <div className="text-white bg-slate-800 flex flex-col gap-1 pt-8 pb-4">
      <h2 className='font-bold mx-auto'> BookMyShow Clone</h2>
      <p className='mx-auto'>For React Practice Project</p>
      <hr className='my-4 text-gray-400 border-gray-300' />
      <p className='mx-auto'><a href='https://github.com/bkbCodes/BookMyShowClone' className='no-underline text-white font-bold' target="_blank" rel="noreferrer" >GitHub</a></p>
    </div>
  )
}

export default Footer