describe('Deveria criar um item', () => {
    it('Deveria permitir criar um novo item', () => {
        cy.visit('http://172.16.2.83:5173/')
        cy.get(".fab").click()
        cy.get("input[name='description']").type('Minha tarefa para aprender cypress')
        cy.get("button[type='submit']").click()
        cy.contains('Minha tarefa para aprender cypress', { timeout: 5000 })
    })
});

