import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'

// Components
import Posters from "../component/Poster/Poster.Component"
import PlayFilters from "../component/PlayFilter/PlayFilters.Component"

const PlayPage = () => {
  return (<>
    <div className="container mx-auto px-4 my-10">
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
        <div className="lg:w-3/4 p-4 bg-white rounded">
          <h2 className='text-2xl font-bold mb-4'>Plays in NCR Delhi</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:3/12 my-3 flex items-center">
              <Posters
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-julius-caesar-0-2022-6-24-t-10-17-56.jpg"
                title="Julius Caesar "
                subtitle="Theatre | Hindi | 8yrs + | 1hr 30mins"
                link = "https://in.bookmyshow.com/plays/julius-caesar/ET00332331"
                isPlay={true}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:3/12 my-3 flex items-center">
              <Posters
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-julius-caesar-0-2022-6-24-t-10-17-56.jpg"
                title="Julius Caesar "
                subtitle="Theatre | Hindi | 8yrs + | 1hr 30mins"
                link = "https://in.bookmyshow.com/plays/julius-caesar/ET00332331"
                isPlay={true}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:3/12 my-3 flex items-center">
              <Posters
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-julius-caesar-0-2022-6-24-t-10-17-56.jpg"
                title="Julius Caesar "
                subtitle="Theatre | Hindi | 8yrs + | 1hr 30mins"
                link = "https://in.bookmyshow.com/plays/julius-caesar/ET00332331"
                isPlay={true}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:3/12 my-3 flex items-center">
              <Posters
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-julius-caesar-0-2022-6-24-t-10-17-56.jpg"
                title="Julius Caesar "
                subtitle="Theatre | Hindi | 8yrs + | 1hr 30mins"
                link = "https://in.bookmyshow.com/plays/julius-caesar/ET00332331"
                isPlay={true}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:3/12 my-3 flex items-center">
              <Posters
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-julius-caesar-0-2022-6-24-t-10-17-56.jpg"
                title="Julius Caesar "
                subtitle="Theatre | Hindi | 8yrs + | 1hr 30mins"
                link = "https://in.bookmyshow.com/plays/julius-caesar/ET00332331"
                isPlay={true}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:3/12 my-3 flex items-center">
              <Posters
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-julius-caesar-0-2022-6-24-t-10-17-56.jpg"
                title="Julius Caesar "
                subtitle="Theatre | Hindi | 8yrs + | 1hr 30mins"
                link = "https://in.bookmyshow.com/plays/julius-caesar/ET00332331"
                isPlay={true}
              />
            </div>
          </div>
        </div>

        <div className=" lg:w-1/4 p-4 bg-white rounded">
          <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Hindi", "Tamil"]}
            />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DefaultLayoutHoc(PlayPage);