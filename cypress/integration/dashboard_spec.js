import movieData from "../fixtures/movieData";

describe("Dashboard spec testing", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/")

    
  });

  it("Should display 5 movies", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      body: movieData
    })

    cy.get(".movie-card")
      .should("have.length", 5)
      .first()
        .contains("67%")

    cy.get(".movie-card")
      .first()
        .contains("2020")

    cy.get(".movie-card")
      .first()
        .contains("Money Plane")

    cy.get(".movie-card .poster-image")
      .first()
        .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
      
    cy.get(".movie-card .backdrop-image")
      .first()
        .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
      
  });

  it("should display an error message on a 500 server error", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 500,
      body: {
        message: "Error test"
      }
    })

    cy.get("h2").contains("An error has occured, please try your request again later.")
  });

});