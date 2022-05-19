describe("Dashboard spec testing", () => {

  beforeEach(() => {

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", { fixture: "movieData.json" })

    cy.visit("http://localhost:3000/")

    cy.wait(1000)

  });

  it("Should display 5 movies", () => {
    cy.get(".movie-card")
      .should("have.length", 5)
  });
  
  it("Should display correct movie card details", () => {

    cy.get(".movie-card")
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

  it("Should display an error message on a 500 server error", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 500
    })

    cy.visit("http://localhost:3000/")

    cy.wait(1000)

    cy.get("h2").contains("An error has occured, please try your request again later.")
  });

  it("Should have a title and logo", () => {
    
    cy.get("h1").should("have.text", "Rancid Tomatillos")

    cy.get(".top-section img").should("have.attr", "src").should("include", "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
  });

  it("Should not have a home button on dashboard", () => {

    cy.get(".top-section button").should("not.exist")
  });
});