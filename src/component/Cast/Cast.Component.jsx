import React from 'react'

const Cast = ({ image, castName, role }) => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="w-32 h-32">
					<img
						src={`https://image.tmdb.org/t/p/original${image}`}
						alt="Actor Image"
						className='rounded-full w-full h-full object-center object-cover'	
				/>
				</div>
				<h1 className='text-lg text-gray-800'>{castName}</h1>
				<h5 className='text-sm text-gray-500'>as {role}</h5>
			</div>
		</>
	)
}

export default Cast