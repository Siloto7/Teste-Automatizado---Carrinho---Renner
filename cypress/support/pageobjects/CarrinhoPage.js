
/// <reference types="Cypress" />

import CarrinhoElements from '../elements/CarrinhoElements';

const {
    inputBuscar,
    produtoSelecionado,
    botaoComprar,
    finalizarCompra,
    botaoCarrinho
} = new CarrinhoElements();

class CarrinhoPage {
    acessarSite() {
        const baseUrl = Cypress.config("baseUrl");
        cy.visit(baseUrl);
    }

    clicarBusca() {
        cy.esperarExecucao()
        cy.clicarElemento(inputBuscar());
    }

    digitarProduto() {
        const produto = Cypress.config("produtoMock");
        cy.escreverInput(inputBuscar(), produto);
    }

    calcaJeans() {
        cy.esperarExecucao()
        cy.clicarElemento(produtoSelecionado());
    }

    realizarCompra() {
        cy.clicarElemento(botaoComprar());
    }

    escolherTamanho() {
        cy.clicarElemento(finalizarCompra());
    }

    produtoNaSacola() {
        cy.esperarExecucao(20000)
        cy.clicarElemento(botaoCarrinho());
    }
}

export default CarrinhoPage;