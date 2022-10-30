import React, { useState } from 'react'
import HeroSlider from "react-slick"
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 760161,
      "original_language": "en",
      "original_title": "Orphan: First Kill",
      "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      "popularity": 3876.772,
      "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
      "release_date": "2022-07-27",
      "title": "Orphan: First Kill",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1024
    },
    {
      "adult": false,
      "backdrop_path": "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 960704,
      "original_language": "ja",
      "original_title": "鋼の錬金術師 完結編 最後の錬成",
      "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
      "popularity": 2839.269,
      "poster_path": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
      "release_date": "2022-06-24",
      "title": "Fullmetal Alchemist: The Final Alchemy",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 82
    }
  ]);

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 1000,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
  }

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 1000,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
  }

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {
            images.map((image, index) => (
              <div className='w-full h-56 md:h-80 py-3' key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero Banner"
                  className='w-full h-full rounded-md object-cover'
                />
              </div>
            ))
          }
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {
            images.map((image, index) => (
              <div className='w-full h-96 px-2 py-3' key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero Banner"
                  className='w-full h-full rounded-md object-cover'
                />
              </div>
            ))
          }
        </HeroSlider>
      </div>
    </>
  )
}

export default HeroCarousel