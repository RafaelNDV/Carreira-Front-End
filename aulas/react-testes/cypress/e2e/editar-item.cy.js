describe('', () => {
    it('excluir-item', function () {
        cy.visit('http://172.16.2.83:5173/')

        cy.contains('Minha tarefa para aprender cypress', { timeout: 6000 }).parent().find("[aria-label='edit']").click()

        cy.get("input[name='description']").clear().type("Minha tarefa ATUALIZADA APRENDENDO Cypress")
        cy.get("button[type='submit']").click()

        cy.contains('Minha tarefa ATUALIZADA APRENDENDO Cypress')
    });
})