describe('', () => {
    it('excluir-item', function () {
        cy.visit('http://172.16.2.83:5173/')

        cy.contains('Minha tarefa para aprender cypress', { timeout: 6000 }).parent().find("[aria-label='delete']").click()

        cy.contains('Minha tarefa para aprender Cypress').should("not.exist")
    });
})