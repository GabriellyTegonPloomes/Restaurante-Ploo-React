import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Footer } from "./compents/Footer";
import { Header } from "./compents/Header";
import { CardProduct } from "./compents/Card";

function App() {
  const [produtosSelecionados, setProdutosSelecionados] = useState({
    prato: "",
    bebida: "",
    sobremesa: "",
  });

  function selecionarItem(tipo, nomeDoItem) {
    setProdutosSelecionados({ ...produtosSelecionados, [tipo]: nomeDoItem });
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
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
            <CardProduct
              nomePrato="Bife com fritas"
              descricao="A melhor combinação!"
              preco="R$ 75,90"
              tipoProduto="prato"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Outback-Homestead-Steak-675x480.webp"
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
            <CardProduct
              nomePrato="Macarrão"
              descricao="Macarrão acompanhado de frango"
              preco="R$ 52,90"
              tipoProduto="prato"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Outback-Mate_s-Fettuccine-675x480.webp"
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
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
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
            <CardProduct
              nomePrato="Fanta"
              descricao="Lata 350ml"
              preco="R$ 5,90"
              tipoProduto="bebida"
              imagem="https://www.brasileuquero.com/cdn/shop/products/7891991008877_1080x.png?v=1632146161"
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
            <CardProduct
              nomePrato="Guaraná"
              descricao="Lata 350ml"
              preco="R$ 6,90"
              tipoProduto="bebida"
              imagem="https://www.brasileuquero.com/cdn/shop/products/7891991008877_1080x.png?v=1632146161"
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
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
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
            <CardProduct
              nomePrato="Milkshake"
              descricao="Milkshake de chocolate"
              preco="R$ 21,90"
              tipoProduto="sobremesa"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Milkshake.jpg"
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
            <CardProduct
              nomePrato="Brownie com sorvete"
              descricao="Brownie, sorvete e calda de chocolate"
              preco="R$ 32,90"
              tipoProduto="sobremesa"
              imagem="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Chocolate-Thunder-From-Down-Under_305x342.png"
              selecionarItem={selecionarItem}
              produtosSelecionados={produtosSelecionados}
            />
          </div>
        </section>
      </main>

      <Footer produtosSelecionados={produtosSelecionados} />
    </>
  );
}

export default App;
