describe('Fill form test', () => {
    beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log('Open "Form Layouts" page ...');
      cy.get('[src="assets/images/material-dark-theme.jpgQ"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
    });
  
    it('Inline form', () => {
      const name = 'Jane Doe';
      const email = 'johndoe+test@example.com';
  
      cy.get('input[type="text"][placeholder="Jane Doe"]').type(name);
      cy.get('input[type="text"][placeholder="Email"]').type(email);
      cy.get('(//span[@class="custom-checkbox"])[1]').check();
      cy.get('button[type="submit"][status="<button _ngcontent-sdx-c452="]').click();
      cy.get('button[type="submit"][status="<button _ngcontent-sdx-c452="]').should('contain.value', name, email);
    });
  });
  


// // Параметризований тест для заповнення форми
it('Fill form test2', () => {
    const name = 'John Doe';
    const email = 'johndoe+test@example.com';

    // Пошук елементів і заповнення
    cy.get('[placeholder="Jane Doe"]').type(name);
    cy.get('[placeholder="Email"]').type(email);
    cy.get(`(//span[@class='custom-checkbox'])[1]`).check();


    // Надсилаємо форму
    cy.get('button[type="submit"][status="<button _ngcontent-sdx-c452="]').click();

    // Перевірка, що форма була успішно відправлена
    cy.get('button[type="submit"][status="<button _ngcontent-sdx-c452="]').should('contain.value', name, email);
})
