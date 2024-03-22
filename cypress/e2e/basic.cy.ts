describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display header text", () => {
    cy.get("h1").contains("효주야 안녕??ㅋㅋ나도 헤드셋좀 사자", {
      matchCase: false,
    });
  });

  it("displays Click button", () => {
    cy.get("button").contains("Clicks");
  });
});
