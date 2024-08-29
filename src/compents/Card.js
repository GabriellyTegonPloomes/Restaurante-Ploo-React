import { useEffect, useState } from "react";

export function CardProduct(props) {
  const [selecionado, setSelecionado] = useState(false);

  function selecionaCard() {
    props.selecionarItem(props.tipoProduto, props.nomePrato);
    console.log(selecionado);
  }

  useEffect(() => {
    const checarSeProdutoSelecionado =
      props.produtosSelecionados[props.tipoProduto] === props.nomePrato;
    console.log(checarSeProdutoSelecionado);
    setSelecionado(checarSeProdutoSelecionado);
  }, [props.produtosSelecionados[props.tipoProduto]]);

  return (
    <div
      class={`produto ${selecionado ? "selecionado" : ""}`}
      onClick={selecionaCard}
    >
      <img className="img-div" src={props.imagem}></img>
      <p>
        <strong>{props.nomePrato}</strong>
      </p>
      <p>
        <small>{props.descricao}</small>
      </p>
      <p className="preco">{props.preco}</p>
      <ion-icon className="check" name="checkmark-circle"></ion-icon>
    </div>
  );
}
