/// <reference types="Cypress" />

Cypress.Commands.add("clicarElemento", elemento => {
    cy.get(elemento).click();
});

Cypress.Commands.add("escreverInput", (elemento, texto) => {
    cy.get(elemento).type(texto);
 });

 Cypress.Commands.add("esperarExecucao", (tempo = Cypress.config(defaultCommandTimeout)) => {
    cy.wait(tempo);
 });