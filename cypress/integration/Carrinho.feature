
Feature: Colocar produto no carrinho site Renner

    Scenario: Inserir um produto no carrinho 
        Given acesso o site Renner
        When clico em buscar produtos
        And digito calça jeans 
        And seleciono uma calça
        And clico em comprar
        And seleciono o tamanho
        Then tenho um produto no carrinho