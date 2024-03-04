'use client';
import WelcomeBanner from "./components/welcome-banner/welcome-banner";
import Carousel from "./components/carousel/carousel";
import { useEffect, useState } from "react";
import { Movie, MoviesRequest } from "./interfaces/movie";
import { carouselConst } from "./components/carousel/carouselConst";

export default function Home() {
  const carouselData = carouselConst;
  const [peoplePageData, setPeoplePageData] = useState<MoviesRequest | null>(null);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNThiNDEwNjYyZjA2YmJjZWVlNDk5ZGViZGY3OTA5NyIsInN1YiI6IjYyM2Q5M2MzZDM5OWU2MDA1Y2E5ZDBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YMDhMvdb8i5SoqGx39AIZJUT_sQTdb03cmmRKBsBVEc'
          }
        };
        //link for trending this week
        // const link = `https://api.themoviedb.org/3/trending/all/week`;
        //link for trending this day
        const link = `https://api.themoviedb.org/3/trending/all/day`;
        const response = await fetch(link, options);
        const data: MoviesRequest = await response.json();

        console.log(data);
        setPeoplePageData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (<>
    {isLoading ? (
      <div>
        Loading...
      </div>
      ) : (
        <div>
      <WelcomeBanner />
      <Carousel movies={peoplePageData?.results} />
      {/* <>
        {carouselData.map((carousel) => (
          <Carousel key={carousel.category} pageTitle={carousel.title} />
        ))}
      </> */}
    </div>
      )}
    </>);
}