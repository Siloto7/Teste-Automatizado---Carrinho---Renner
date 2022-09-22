
/// <reference types="Cypress" />

import CarrinhoElements from '../elements/CarrinhoElements'
const carrinhoElements = new CarrinhoElements()

class CarrinhoPage {
    acessarSite() {
        cy.visit(Cypress.config("baseUrl"))
    }

    clicarBusca() {
        cy.wait(10000)
        cy.get(carrinhoElements.inputBuscar()).click();
    }

    digitarProduto() {
        cy.get(carrinhoElements.inputBuscar()).type("calça jeans{enter}");
        
    }

    calcaJeans() {
        cy.wait(10000)
        cy.get(carrinhoElements.produtoSelecionado()).click();
    }

    realizarCompra() {
        cy.get(carrinhoElements.botaoComprar()).click();
    }

    escolherTamanho() {
        cy.get(carrinhoElements.finalizarCompra()).click();
    }

    produtoNaSacola() {
        cy.wait(20000)
        cy.get(carrinhoElements.botaoCarrinho()).click();
    }
}

export default CarrinhoPage;