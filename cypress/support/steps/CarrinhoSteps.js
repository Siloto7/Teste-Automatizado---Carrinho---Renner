
import CarrinhoPage from '../pageobjects/CarrinhoPage';
const { 
    acessarSite, 
    clicarBusca, 
    digitarProduto, 
    calcaJeans, 
    realizarCompra, 
    escolherTamanho, 
    produtoNaSacola 
} = new CarrinhoPage();

Given("acesso o site Renner", () => { 
    acessarSite(); 
});

When("clico em buscar produtos", () => { 
    clicarBusca(); 
});

And("digito calça jeans", () => { 
    digitarProduto(); 
});


And("seleciono uma calça", () => {
    calcaJeans();
});

And("clico em comprar", () => {
    realizarCompra();
});

And("seleciono o tamanho", () => {
    escolherTamanho();
});

Then("tenho um produto no carrinho", () => {
    produtoNaSacola();
});