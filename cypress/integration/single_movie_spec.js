describe("Single movie spec testing", () => {
  
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", { fixture: "movieData.json" })

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", { fixture: "movieDetail.json" })
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos", { fixture: "videos.json" })

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392", { fixture: "movie2Detail.json" })
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392/videos", { fixture: "videos2.json" })
    
    cy.visit("http://localhost:3000")

    cy.wait(1000)

  })

  it("Should take user to Single Movie page", () => {
    cy.get(".movie-card")
    .first().click()

    cy.get(".trailer-details").should("exist")
  })

  it("Should have a home button that takes user home when clicked", () => {
    cy.get(".movie-card")
      .first().click()

      cy.get(".movie-card")
      .should("have.length", 1)
      cy.wait(1000)
      cy.get(".nav").click()
    
      cy.get(".movie-card")
      .should("have.length", 5)
  })

  it("Peninsula should have a movie card without a poster image", () => {

    cy.get(".movie-card")
      .eq(4).click()

      cy.wait(1000)

    cy.get(".movie-card")
        .contains("72%")

    cy.get(".movie-card")
        .contains("2020")

    cy.get(".movie-card")
        .contains("Peninsula")

    cy.get(".movie-card .poster-image")
        .should("not.exist")
      
    cy.get(".movie-card .backdrop-image")
        .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg")
      
  })

  it("Peninsula should have movie details", () => {

    cy.get(".movie-card")
      .eq(4).click()

    cy.get(".movie-detail-container")
    .contains("Peninsula")
    .get(".movie-detail-container")
    .contains("A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.")
    .get(".movie-detail-container")
    .contains("Genres:")
    .get(".movie-detail-container")
    .contains("Action")
    .get(".movie-detail-container")
    .contains("Horror")
    .get(".movie-detail-container")
    .contains("Thriller")
    .get(".movie-detail-container")
    .contains("Budget: $17,000,000")
    .get(".movie-detail-container")
    .contains("Revenue: $35,878,266")
    .get(".movie-detail-container")
    .contains("Runtime: 114 minutes")
    .get(".movie-detail-container")
    .contains("Escape The Apocalypse")
  })

  it("Money Plane should have a movie card without a poster image", () => {

    cy.get(".movie-card")
      .first().click()

    cy.get(".movie-card")
        .contains("67%")

    cy.get(".movie-card")
        .contains("2020")

    cy.get(".movie-card")
        .contains("Money Plane")

    cy.get(".movie-card .poster-image")
        .should("not.exist")
      
    cy.get(".movie-card .backdrop-image")
        .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
      
  })

  it("Money Plane should have less movie details", () => {
    cy.get(".movie-card")
    .first().click()

    /*
    "title": "Money Plane",
    "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    "genres": [
      "Action"
    ],
    "budget": 0,
    "revenue": 0,
    "runtime": 82,
    "tagline": "",
    "average_rating": 6.7
    */
  })

  it("Money Plane should not have a movie trailer", () => {
    cy.get(".movie-card")
      .first().click()
  })

})