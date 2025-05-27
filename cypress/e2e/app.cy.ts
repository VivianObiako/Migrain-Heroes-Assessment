
describe('Tech Stack Demo App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the main heading', () => {
    cy.contains('Modern Tech Stack Showcase').should('be.visible');
  });

  it('shows all technology cards', () => {
    cy.get('[data-testid="tech-card"]').should('have.length.at.least', 8);
  });

  it('counter functionality works', () => {
    cy.contains('Redux Toolkit Demo').should('be.visible');
    cy.contains('+1').click();
    cy.contains('1').should('be.visible');
    cy.contains('-1').click();
    cy.contains('0').should('be.visible');
  });

  it('form validation works', () => {
    cy.contains('Formik + Yup Demo').should('be.visible');
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('input[name="age"]').type('25');
    cy.contains('Submit Form').click();
    cy.contains('Form Submitted!').should('be.visible');
  });

  it('api demo works', () => {
    cy.contains('Axios API Demo').should('be.visible');
    cy.contains('Fetch Posts').click();
    cy.contains('Loading...').should('be.visible');
  });
});
