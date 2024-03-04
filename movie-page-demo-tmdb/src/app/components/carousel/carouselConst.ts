export const carouselConst = [
    {
      category: "trending",
      links: {
        today: "https://api.themoviedb.org/3/trending/all/day",
        thisWeek: "https://api.themoviedb.org/3/trending/all/week"
      },
      toggleTitles: ["today", "thisWeek"],
      type: "poster",
      title: "Trending",
      bg: "lines",
    },
    {
      category: "streaming",
      links: {
        "popular": "https://api.themoviedb.org/3/movie/popular",
        "streaming": "https://api.themoviedb.org/3/movie/popular",
        "on-tv": "https://api.themoviedb.org/3/movie/popular",
        "for-rent": "https://api.themoviedb.org/3/movie/popular",
        "in-theaters": "https://api.themoviedb.org/3/movie/popular",
      },
      toggleTitles: ["popular", "streaming", "on-tv", "for-rent", "in-theaters"],
      type: "trailer",
      title: "Latest Trailers",
      bg: "hover-change",
    },
    {
      category: "popular",
      links: {
        "popular": "https://api.themoviedb.org/3/movie/popular",
        "streaming": "https://api.themoviedb.org/3/movie/popular",
        "on-tv": "https://api.themoviedb.org/3/movie/popular",
        "for-rent": "https://api.themoviedb.org/3/movie/popular",
        "in-theaters": "https://api.themoviedb.org/3/movie/popular",
      },
      toggleTitles: ["streaming", "on-tv", "for-rent", "in-theaters"],
      type: "poster",
      title: "What's Popular",
      bg: "none",
    },
    {
      category: "freeToWatch",
      links: {
        "movies": "https://api.themoviedb.org/3/movie/popular",
        "tv": "https://api.themoviedb.org/3/movie/popular",
      },
      toggleTitles: ["movies", "tv"],
      type: "poster",
      title: "Free To Watch",
      bg: "none",
    },
  ];