import { Movie } from '@/app/interfaces/movie'
import React from 'react'
import Image from 'next/image'

export default function CarouselPosterItem(movie: Movie) {
  const img_300 = "https://image.tmdb.org/t/p/w300"
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg"
  return (
      <div className="absolute h-[150px] w-[100px]">
        <Image fill={true} src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable} alt={movie.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw (max-height: 1024px) 100vw, (max-height: 980px) 50vw, 33vw" className="object-cover" />
      </div>
  )
}
