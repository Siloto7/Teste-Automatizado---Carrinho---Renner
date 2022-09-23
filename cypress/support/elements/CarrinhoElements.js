class CarrinhoElements {
    inputBuscar = () => '.input'; 

    produtoSelecionado = () => '[data-sku-id="628797431,628797414,628797422,628797393,628797385,628797449,657054679"] > :nth-child(1) > .ProductBox_productBox__juRuk';
    
    botaoComprar = () => '.ProductInformation_actionBuy__8RfyL';

    finalizarCompra = () => '.AttributesModal_notOpacity__D1S4K > .ProductInformation_actions__dtxYo > .ProductInformation_actionBuy__8RfyL'

    botaoCarrinho = () => ':nth-child(4) > .ReactCartContent_content__tX41i > .ReactMiniCart_icon__jJnwk > .ic-sacola'
  }
  
  export default CarrinhoElements;