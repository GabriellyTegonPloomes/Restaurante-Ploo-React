let produtosSelecionados = [];
function selecionarPrato(div, tipo) {
  removePratoSelecionado(tipo);
  div.classList.add("selecionado");
  produtosSelecionados.push(tipo);
  liberarBotao();
}

function removePratoSelecionado(tipo) {
  const elementoSelecionado = document.querySelector(`.${tipo} .selecionado`);
  if (elementoSelecionado) {
    elementoSelecionado.classList.remove("selecionado");
    produtosSelecionados = produtosSelecionados.filter((item) => item !== tipo);
  }
}

function liberarBotao() {
  if (produtosSelecionados.length === 3) {
    const botaoFecharPedido = document.querySelector("footer button");
    botaoFecharPedido.classList.add("liberado");
    botaoFecharPedido.disabled = false;
    botaoFecharPedido.innerHTML = "Fechar pedido";
  }
}

function clickbotao() {
  console.log(produtosSelecionados);

  let pratoEscolhido, bebidaEscolhida, sobremesaEscolhida;

  produtosSelecionados.forEach((tipo) => {
    let elementoSelecionado = document.querySelector(
      ` .${tipo} .selecionado strong`
    ).innerText;

    const tipos = {
      prato: () => (pratoEscolhido = elementoSelecionado),
      bebida: () => (bebidaEscolhida = elementoSelecionado),
      sobremesa: () => (sobremesaEscolhida = elementoSelecionado),
    };

    tipos[tipo]();
  });

  alert(
    `Prato escolhido: ${pratoEscolhido} \nBebida escolhida: ${bebidaEscolhida} \nSobremesa escolhida: ${sobremesaEscolhida}`
  );
}
