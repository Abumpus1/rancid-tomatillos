const utilities = {

  cleanMovieCard: (fetchedData) =>{
   const {id, title, backdrop_path:backdrop, release_date:date, average_rating:rating} = fetchedData
   return {id,title,backdrop,date,rating}
  },

 cleanMovieDetail: (fetchedData) =>{
  const { title,  overview, genres, budget, revenue, runtime, tagline } = fetchedData
  return {title,  overview, genres, budget, revenue, runtime, tagline}
  },

  cleanAllMovies: (fetchedMovies) =>{
    const cleanedMovies = fetchedMovies.map(movie => {
      let {id, title, poster_path:poster, backdrop_path:backdrop, release_date:date, overview, genres, budget, revenue, runtime, tagline, average_rating:rating} = movie
      return {id, title, poster, backdrop, date, overview, genres, budget, revenue, runtime, tagline, rating}
    })
   return cleanedMovies
  },

  cleanVideos: (fetchedVideos) =>{
    const cleanedVideos = fetchedVideos.map(video=> {
     let {key, site, type} = video
     return {key, site, type}
    })

   return cleanedVideos
  }

}

export default utilities
