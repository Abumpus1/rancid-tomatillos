const utilities = {

  cleanMovieCard: (fetchedData) =>{
   const {id, title, backdrop_path:backdrop, release_date:date, average_rating:rating} = fetchedData
   console.log({id,title,backdrop,date,rating})
   return {id,title,backdrop,date,rating}
 },

 cleanMovieDetail: (fetchedData) =>{
  const { title,  overview, genres, budget, revenue, runtime, tagline } = fetchedData
  console.log({title,  overview, genres, budget, revenue, runtime, tagline})
  return {title,  overview, genres, budget, revenue, runtime, tagline}
},

cleanAllMovies: (fetchedMovies) =>{
  const cleanedMovies = fetchedMovies.map(movie => {
    let {id, title, poster_path:poster, backdrop_path:backdrop, release_date:date, overview, genres, budget, revenue, runtime, tagline, average_rating:rating} = movie
    return {id, title, poster, backdrop, date, overview, genres, budget, revenue, runtime, tagline, rating}
   })
  console.log(cleanedMovies)
  return cleanedMovies

   // return {id, title, poster_path:poster, backdrop_path:backdrop, release_date:date, overview, genres, budget, revenue, runtime, tagline, average_rating:rating} = fetchedData
 },

cleanVideos: (fetchedVideos) =>{
  const cleanedVideos = fetchedVideos.map(video=> {
     let {key, site, type} = video
     return {key, site, type}
   })
  console.log(cleanedVideos)
  return cleanedVideos
}

}

export default utilities
