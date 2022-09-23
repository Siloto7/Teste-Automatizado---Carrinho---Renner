/// <reference types="Cypress" />

Cypress.Commands.add("clicarElemento", elemento => {
    cy.get(elemento).click();
});

Cypress.Commands.add("escreverInput", (elemento, chave) => {
    cy.get(elemento).type(chave)
 });

 Cypress.Commands.add("esperarExecucao", (tempo = 10000) => {
    cy.wait(tempo)
 });