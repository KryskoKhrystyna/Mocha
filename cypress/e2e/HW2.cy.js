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
    before(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.log('Open "Modal & Overlays" ...');
      cy.get('span.menu-title.ng-tns-c141-19').click();
      cy.log('Open "Toastr" page ...');
      cy.get('span.menu-title.ng-tns-c141-23').click();
    });

    const testData = {
      position: 'top-right',
      title: 'test title',
      content: 'test content',
      time: '6000',
      type: 'primary'
    };
    const expectedResult = {
      icon: 'email',
      title: 'test title',
      content: 'test content',
      type: 'primary'
    };  
    
      it('Select Toaster configuration', () => {
        //  5 and 6Fill in title and content fields
        cy.get(`'input[name="title"]'`).clear().type(testData.title);;
        cy.get(`input[name="content"]`).clear().type(testData.content);

        // 4 Select position of the toaster
        cy.get('button.select-button').click({ force: true });
        cy.get(`#nb-option-24`).click();
      
        // 7 Select type of the toaster
        cy.get(`//button[text()='primary']`).click({ force: true });
        cy.get(`#nb-option-32`).click();
      
        // 8 Click on the "Show toast" button
        cy.get(`//button[text()='Show toast']`).click();

        // Check time, position and type
        cy.get(`nb-icon[ng-reflect-config='[object Object]']`).check(testData.type);
    
        // Expected result
        cy.get('span.title.subtitle').should('contain.value', expectedResult.title);
        cy.get('.message').should('contain.value', expectedResult.content);
        cy.get(`g[data-name="email"]`).should('contain.value', expectedResult.email);
        cy.get(`nb-icon[ng-reflect-config='[object Object]']`).should('contain.value', expectedResult.time);
        cy.get(`nb-toast[ng-reflect-toast='[object Object]']`).invoke('have.css', 'background-color').should('rgb(233, 29, 99)');
        });
    
    })
      
 

 
      