import { useEffect, useState } from "react";

export function Footer(props) {
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    const todosProdutosSelecionado = Object.values(
      props.produtosSelecionados
    ).every((valor) => valor != "");
    if (todosProdutosSelecionado) {
      setIsButtonDisable(false);
    }
  }, [props.produtosSelecionados]);

  function clickBotao() {
    alert(
      `Prato escolhido: ${props.produtosSelecionados.prato} \nBebida escolhida: ${props.produtosSelecionados.bebida} \nSobremesa escolhida: ${props.produtosSelecionados.sobremesa}`
    );
  }

  return (
    <footer>
      <button
        onClick={clickBotao}
        disabled={isButtonDisable}
        class={!isButtonDisable ? "liberado" : ""}
      >
        {!isButtonDisable
          ? "Fechar pedido"
          : "Selecione os 3 itens para fechar o pedido"}
      </button>
    </footer>
  );
}
