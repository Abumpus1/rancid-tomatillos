describe("Dashboard spec testing", () => {

  beforeEach(() => {

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", { fixture: "movieData.json" })

    cy.visit("http://localhost:3000/")
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

    cy.get("main").contains("Error: 500, Please try your request again later.")
  });

  it("Should have a title and logo", () => {

    cy.get("h1").should("have.text", "Rancid Tomatillos")

    cy.get(".top-section img").should("have.attr", "src").should("include", "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
  });

  it("Should not have a home button on dashboard", () => {

    cy.get(".nav").should("have.css", "visibility", "hidden")

  });

  it("Should have a search bar on the home page",()=>{
      cy.get(".search-bar").should("exist")
  });

  it("Should be able to search in the search Bar",()=>{
    cy.get(".search-bar")
      .type("la")

      cy.get(".movie-card")
        .should("have.length", 3)

        cy.get(".movie-card")
          .eq(0)
          .contains("Money Plane")

          cy.get(".movie-card")
          .eq(1)
          .contains("Mulan")

          cy.get(".movie-card")
          .eq(2)
          .contains("Peninsula")
  });

  it("Pressing enter while in the search bar should do nothing",()=>{
    cy.get(".search-bar")
      .type("la")
      .type("{enter}")
      .should("have.value","la")
  });

  it("Should display an error if no search results",() =>{
    cy.get(".search-bar")
      .type("lalsls")

      cy.get("h2").contains("No search results found! Please alter your search and try again.")
  });

  it("Should be able to clear the search bar",() =>{
      cy.get('.search-bar').type('Mul')

      cy.get(".movie-card")
        .should("have.length", 1)
        .contains("Mulan")

      cy.get('.search-bar').clear()

      cy.get(".movie-card")
        .should("have.length", 5)
  });

  it("Should display an error message with an invalid url", () => {
    cy.visit("http://localhost:3000/invalid/invalid")

    cy.get("h2").contains("Looks like you took a wrong turn, click Home to go back!")
  });

  it("Should say loading... on page load.", () => {
    cy.get("h2").contains("Loading...")
  });

});
