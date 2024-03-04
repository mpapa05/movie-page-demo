'use client'
import React, { useRef, useState  } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from '@/app/interfaces/movie';
import CarouselPosterItem from '../carousel-poster-item/carousel-poster-item';
import CarouselHeaderToggle from '../carousel-header-toggle/carousel-header-toggle'


interface MoviesProps {
  movies: Movie[] | null | undefined;
}

export default function Carousel({ movies }: MoviesProps) {
  const [isToday, setIsTodayOrWeek] = useState(true);
  const moviesTodayOrWeekLink  = isToday ? `https://api.themoviedb.org/3/trending/all/day` : `https://api.themoviedb.org/3/trending/all/week`;
  const handleTodayOrWeekChange = () => {
    setIsTodayOrWeek((prev) => !prev);
    console.log(moviesTodayOrWeekLink);
  }

  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  console.log(movies);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    
      <div className="slider-container">
        <CarouselHeaderToggle onToggle={handleTodayOrWeekChange} todayToggleValue={isToday} />
        <Slider ref={sliderRef} {...settings}>
            {movies?.map((movie) => (
              <div key={movie.id} className="h-[150px]">
                  <CarouselPosterItem {...movie} />
              </div>
            ))}
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
  );
}
