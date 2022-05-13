const apiCalls = {

  getMovies: (id = "") => {
  return  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .catch(error => console.log(error))
  }

}

export default apiCalls;
