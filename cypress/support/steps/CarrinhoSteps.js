
import CarrinhoPage from '../pageobjects/CarrinhoPage'
const carrinhoPage = new CarrinhoPage

Given("acesso o site Renner", () => {
    carrinhoPage.acessarSite();
})

When("clico em buscar produtos", () => {
    carrinhoPage.clicarBusca();
})

And("digito calça jeans", () => {
    carrinhoPage.digitarProduto();
})

    
And ("seleciono uma calça", () => {
    carrinhoPage.calcaJeans();
})

And ("clico em comprar", () => {
    carrinhoPage.realizarCompra();
})

And ("seleciono o tamanho", () => {
    carrinhoPage.escolherTamanho();

})

Then ("tenho um produto no carrinho", () => {
    carrinhoPage.produtoNaSacola();

})



