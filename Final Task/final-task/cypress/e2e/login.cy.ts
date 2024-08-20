describe("Login test", () => {
  // Login
  beforeEach(() => {
    cy.visit("/auth/signIn");
    cy.get("#email").type("ephrem.getachew@a2sv.org");
    cy.get("#password").type("ephrem");

    cy.get("button").click();
    cy.wait(10000);
  });
  // Navigate to posts
  it("navigation on pages", () => {
    cy.url().should("include", "/posts");
    cy.get("#card").click();
    cy.wait(5000);
    cy.url().should("include", "/posts/detail");
    cy.get("#POSTS").click();
    cy.wait(5000);
    cy.url().should("include", "/posts");
  });

  // Logout
  afterEach(() => {
    cy.get("#profile").click();
    cy.wait(2000);
    cy.get("#logout").click();
    cy.wait(5000);
    cy.url().should("include", "/auth/signIn");
  });
});
