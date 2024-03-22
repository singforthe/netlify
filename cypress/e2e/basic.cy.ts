describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display header text", () => {
    cy.get("h1").contains("효주야 안녕?", { matchCase: false });
  });

  it("displays Click button", () => {
    cy.get("button").contains("Clicks");
  });
});
