// Кроки тесту:
// 1. Відкрити https://sanitarskyi-ngx-admin.herokuapp.com/
// 2. Клікнути на пункт меню Modal & Overlays
// 3. Клікнути на підпункт Toastr
// 4. Вибрати позицію тосту
// 5. Заповнити title довільним текстом
// 6. заповнити content довільним текстом
// 7. Обрати тип тоста
// 8. Клікнути на кнопку "Show toast"

// Очікуваний результат: 
// тост містить текст, що був ведений в поля тайтл та контент, 
// знаходиться у місці, відповідному до обраної позиції, 
// має колір та містить іконку відповідні до обраного типу тоста.

describe('Fill form test', () => {
    beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.log('Open "Modal & Overlays" ...');
      cy.get('span.menu-title.ng-tns-c141-19').click();
      cy.log('Open "Toastr" page ...');
      cy.get('span.menu-title.ng-tns-c141-23').click({setTimeout:10000});
    });

    const testData = {
      title: 'test title',
      content: 'test content',
      time: '60000',
    };
  
      it('Select Toaster configuration at the top right', () => {
        //  5 and 6Fill in title and content fields
        cy.get(`input[name="title"]`).clear().type(testData.title);;
        cy.get(`input[name="content"]`).clear().type(testData.content);

        // 4 Select position of the toaster
        cy.get('button.select-button').eq(1).click({ force: true });
      
        // 7 Select type of the toaster
        cy.get(`button.select-button`).eq(2).click({ force: true });
      
        //Select time of the toaster
        cy.get(`input[name='timeout']`).clear().type(testData.time);

        // 8 Click on the "Show toast" button
        cy.get(`button.mat-ripple.appearance-filled`).eq(0).click();

        // Check time, position and type
        cy.get('nb-select[ng-reflect-selected="primary"] button:nth-child(1)').should('be.visible');

        // Expected result
        cy.get('input[name="title"]').should('contain.value', testData.title);
        cy.get('input[name="content"]').should('contain.value', testData.content);
        cy.get(`nb-icon[ng-reflect-config='[object Object]']`).should('be.visible');
        cy.get(`input[name='timeout']`).should('contain.value', testData.time);
        cy.get('button.select-button:contains("top-right")').should('be.visible');
        cy.get('button.select-button:contains("primary")').should('be.visible');
        cy.get('div[style*="justify-content: flex-end; align-items: flex-start;"] nb-icon').should('be.visible');
        });

        it('Select Toaster configuration at the top left', () => {
          //  5 and 6Fill in title and content fields
          cy.get(`input[name="title"]`).clear().type(testData.title);;
          cy.get(`input[name="content"]`).clear().type(testData.content);
  
          // 4 Select position of the toaster
          cy.get('g[data-name="chevron-down"]').eq(2).click();
          cy.get('#nb-option-25').click();
        
          // 7 Select type of the toaster
          cy.get(`g[data-name="chevron-down"]`).eq(3).click({ force: true });
          cy.get('#nb-option-33').click();
        
          //Select time of the toaster
          cy.get(`input[name='timeout']`).clear().type(testData.time);
  
          // 8 Click on the "Show toast" button
          cy.get(`button.mat-ripple.appearance-filled`).eq(0).click();
  
          // Expected result
          cy.get('input[name="title"]').should('contain.value', testData.title);
          cy.get('input[name="content"]').should('contain.value', testData.content);
          cy.get('g[data-name="checkmark"]').should('be.visible');
          cy.get(`input[name='timeout']`).should('contain.value', testData.time);
          cy.get('button.select-button:contains("top-left")').should('be.visible');
          cy.get('button.select-button:contains("success")').should('be.visible');
          cy.get('div.toastr-overlay-container[style*="justify-content: flex-start"][style*="align-items: flex-start"] nb-toast').should('be.visible');
    })
    
    it('Select Toaster configuration at the bottom-right', () => {
      //  5 and 6Fill in title and content fields
      cy.get(`input[name="title"]`).clear().type(testData.title);;
      cy.get(`input[name="content"]`).clear().type(testData.content);

      // 4 Select position of the toaster
      cy.get('g[data-name="chevron-down"]').eq(2).click();
      cy.get('#nb-option-27').click();
    
      // 7 Select type of the toaster
      cy.get(`g[data-name="chevron-down"]`).eq(3).click({ force: true });
      cy.get('#nb-option-35').click();
    
      //Select time of the toaster
      cy.get(`input[name='timeout']`).clear().type(testData.time);

      // 8 Click on the "Show toast" button
      cy.get(`button.mat-ripple.appearance-filled`).eq(0).click();

      // Expected result
      cy.get('input[name="title"]').should('contain.value', testData.title);
      cy.get('input[name="content"]').should('contain.value', testData.content);
      cy.get('g[data-name="alert-triangle"]').should('be.visible');
      cy.get(`input[name='timeout']`).should('contain.value', testData.time);
      cy.get('button.select-button:contains("bottom-right")').should('be.visible');
      cy.get('button.select-button:contains("warning")').should('be.visible');
      cy.get('div.toastr-overlay-container.cdk-global-overlay-wrapper[style*="justify-content: flex-end"][style*="align-items: flex-end"] nb-toast').should('be.visible');
})

it('Select Toaster configuration at the bottom-left', () => {
  //  5 and 6Fill in title and content fields
  cy.get(`input[name="title"]`).clear().type(testData.title);;
  cy.get(`input[name="content"]`).clear().type(testData.content);

  // 4 Select position of the toaster
  cy.get('g[data-name="chevron-down"]').eq(2).click();
  cy.get('#nb-option-26').click();

  // 7 Select type of the toaster
  cy.get(`g[data-name="chevron-down"]`).eq(3).click({ force: true });
  cy.get('#nb-option-34').click();

  //Select time of the toaster
  cy.get(`input[name='timeout']`).clear().type(testData.time);

  // 8 Click on the "Show toast" button
  cy.get(`button.mat-ripple.appearance-filled`).eq(0).click();

  // Expected result
  cy.get('input[name="title"]').should('contain.value', testData.title);
  cy.get('input[name="content"]').should('contain.value', testData.content);
  cy.get('g[data-name="question-mark"]').should('be.visible');
  cy.get(`input[name='timeout']`).should('contain.value', testData.time);
  cy.get('button.select-button:contains("bottom-left")').should('be.visible');
  cy.get('button.select-button:contains("info")').should('be.visible');
  cy.get('div.toastr-overlay-container.cdk-global-overlay-wrapper[style*="justify-content: flex-start"][style*="align-items: flex-end"] nb-icon').should('be.visible');
})
  });
 

 
      