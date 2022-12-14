import React from 'react'
import { Link } from 'react-router-dom';

const MoviePoster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-center gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
            className='w-full h-full rounded-md object-cover object-center'  
          />
        </div>
        <h3 className={`text-lg font-bold ${ props.isDark ? 'text-white' : 'text-black'}`}>
          {props.title}
        </h3>
      </div>
    </Link>
  )
}

const PlayPoster = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="flex flex-col items-center gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={props.src}
            alt="poster"
            className='w-full h-full rounded-md object-cover'  
          />
        </div>
        <h3 className={`text-lg font-bold ${ props.isDark ? 'text-white' : 'text-black'}`}>
          {props.title}
        </h3>
      </div>
    </a>
  )
}

const Poster = (props) => {
  return <>
  {props.isPlay && <PlayPoster {...props} />}
  {!props.isPlay && <MoviePoster {...props} />}
  </>
}

export default Poster;