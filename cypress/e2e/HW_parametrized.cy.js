describe('Fill form test', () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.log('Open "Form Layouts" page ...');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  });

    it('Fill form test', () => {
      const name = 'John Doe';
      const email = 'johndoe+test@example.com';
  
      // Пошук елементів і заповнення
      cy.get('[placeholder="Jane Doe"]').type(name);
      cy.get('[placeholder="Email"]').first().type(email);
      cy.get('span.custom-checkbox').eq(0).click();
  
      // Надсилаємо форму
      // cy.get('button[type="submit"][status="<button _ngcontent-sdx-c452="]').click();
  
      // Перевірка, що форма була успішно відправлена
      cy.get('[placeholder="Jane Doe"]').should('contain.value', name);
      cy.get('[placeholder="Email"]').should('contain.value', email);
  })
    
  });
  
