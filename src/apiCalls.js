const apiCalls = {

  getMovies: (id = "") => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(!response.ok) {
        throw Error(response.status)
      }
      return response.json()
    })
  }

}

export default apiCalls;
