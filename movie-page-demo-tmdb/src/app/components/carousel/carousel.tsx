'use client'
import React, { useEffect, useRef, useState  } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie, MoviesRequest } from '@/app/interfaces/movie';
import CarouselPosterItem from '../carousel-poster-item/carousel-poster-item';
import CarouselHeaderToggle from '../carousel-header-toggle/carousel-header-toggle'


// interface MoviesProps {
//   movies: Movie[] | null | undefined;
// }

interface carouselDataI {
  category: string;
  links: {[key: string]: string},
  toggleTitles: string[];
  type: string;
  title: string;
  bg: string;
}

export default function Carousel({ carouselData }: { carouselData: carouselDataI }) {
  const [selectedToggle, setSelectedToggle] = useState('today');
  const [selectedLink, setSelectedLink] = useState('https://api.themoviedb.org/3/trending/all/day');

  const [moviesData, setmoviesData] = useState<MoviesRequest | null>(null);  

  useEffect(() => {
    async function fetchData() {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNThiNDEwNjYyZjA2YmJjZWVlNDk5ZGViZGY3OTA5NyIsInN1YiI6IjYyM2Q5M2MzZDM5OWU2MDA1Y2E5ZDBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YMDhMvdb8i5SoqGx39AIZJUT_sQTdb03cmmRKBsBVEc'
          }
        };
        const response = await fetch(selectedLink, options);
        const data: MoviesRequest = await response.json();

        console.log(data);
        setmoviesData(data);
        // setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setIsLoading(false);
      }
    }

    fetchData();
  }, [selectedLink]); // Run the effect whenever selectedLink changes

  const handleToggle = (value: string) => {
    setSelectedToggle(value);
    setSelectedLink(carouselData.links[value]);
    // Additional logic if needed
    console.log("handleToggle")
  };

  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
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
        <CarouselHeaderToggle onToggle={handleToggle} selectedToggle={selectedToggle} toggleTitles={carouselData.toggleTitles}  />
        <Slider ref={sliderRef} {...settings}>
            {moviesData?.results?.map((movie) => (
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
