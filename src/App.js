import "./reset.css";
import "./App.css";

import { Footer } from "./compents/Footer";
import { Header } from "./compents/Header";
import { CardProduct } from "./compents/Card";

function App() {
  let produtosSelecionados = [];

  function selecionarPrato(div, tipo) {
    removePratoSelecionado(tipo);
    // div.classList.add("selecionado");
    console.log(div);
    produtosSelecionados.push(tipo);
    liberarBotao();
  }

  function removePratoSelecionado(tipo) {
    const elementoSelecionado = document.querySelector(`.${tipo} .selecionado`);
    if (elementoSelecionado) {
      // elementoSelecionado.classList.remove("selecionado");
      produtosSelecionados = produtosSelecionados.filter(
        (item) => item !== tipo
      );
    }
  }

  function liberarBotao() {
    if (produtosSelecionados.length === 3) {
      const botaoFecharPedido = document.querySelector("footer button");
      // botaoFecharPedido.classList.add("liberado");
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

  return (
    <>
      <Header />
      <main>
        <section className="prato">
          <h1>Primeiro, seu prato</h1>
          <div className="containerCards">
            <CardProduct
              nomePrato="Frango grelhado"
              descricao="Frango grelhado bem douradinho!"
              preco="R$ 49,90"
              tipoProduto="prato"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/42_Chicken-on-the-Barbie_1.jpg"
              selecionarPrato={selecionarPrato()}
            />
            <CardProduct
              nomePrato="Bife com fritas"
              descricao="A melhor combinação!"
              preco="R$ 75,90"
              tipoProduto="prato"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Outback-Homestead-Steak-675x480.webp"
            />
            <CardProduct
              nomePrato="Macarrão"
              descricao="Macarrão acompanhado de frango"
              preco="R$ 52,90"
              tipoProduto="prato"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Outback-Mate_s-Fettuccine-675x480.webp"
            />
          </div>
        </section>

        <section className="bebida">
          <h1>Agora, sua bebida</h1>
          <div className="containerCards">
            <CardProduct
              nomePrato="Coca-cola"
              descricao="Lata 350ml"
              preco="R$ 4,90"
              tipoProduto="bebida"
              imagem="https://crsupermercados.com.br/cdn/shop/files/coca_350ml_800x.png?v=1700754095"
            />
            <CardProduct
              nomePrato="Fanta"
              descricao="Lata 350ml"
              preco="R$ 5,90"
              tipoProduto="bebida"
              imagem="https://www.brasileuquero.com/cdn/shop/products/7891991008877_1080x.png?v=1632146161"
            />
            <CardProduct
              nomePrato="Guaraná"
              descricao="Lata 350ml"
              preco="R$ 6,90"
              tipoProduto="bebida"
              imagem="https://www.brasileuquero.com/cdn/shop/products/7891991008877_1080x.png?v=1632146161"
            />
          </div>
        </section>

        <section className="sobremesa">
          <h1>Por fim, sua sobremesa</h1>
          <div className="containerCards">
            <CardProduct
              nomePrato="Smores"
              descricao="Biscoito, chocolate e marshmallow"
              preco="R$ 25,00"
              tipoProduto="sobremesa"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/10/Smores-1-200x200.png"
            />
            <CardProduct
              nomePrato="Milkshake"
              descricao="Milkshake de chocolate"
              preco="R$ 21,90"
              tipoProduto="sobremesa"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Milkshake.jpg"
            />
            <CardProduct
              nomePrato="Brownie com sorvete"
              descricao="Brownie, sorvete e calda de chocolate"
              preco="R$ 32,90"
              tipoProduto="sobremesa"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Chocolate-Thunder-From-Down-Under_305x342.png"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
