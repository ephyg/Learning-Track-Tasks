describe("Bookmark Functionality", () => {
  // Login
  beforeEach(() => {
    cy.visit("/auth/signIn");
    cy.get("#email").type("ephrem.getachew@a2sv.org");
    cy.get("#password").type("ephrem");
    cy.get("button").click();
    cy.wait(6000);
  });
  it("add to bookmark ", () => {
    // If children with id unbookmarked not exist return all are bookmarked

    cy.get("#unbookmarked").first().should("be.visible").click();
    cy.wait(15000);
    cy.get("#bookmarks").click();
    cy.wait(10000);
  });
  
  it("remove from bookmark", () => {
    // if children with id bookmarked not exist return all are unbookmarked
    cy.get("#bookmarked").first().should("be.visible").click();
    cy.wait(15000);
    cy.get("#bookmarks").click();
    cy.wait(10000);
  });
});
