function comprar(nome) {
    alert("Você comprou: " + nome);
  }
  
  fetch("produtos.json")
    .then(resposta => resposta.json())
    .then(dados => {
      const container = document.getElementById("produtos-container");
  
      for (let produto of dados) {
        container.innerHTML += `
          <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="comprar('${produto.nome}')">Comprar</button>
          </div>
        `;
      }
      console.log(dados)
    });