function ir(secao){
  const conteudo = document.getElementById("conteudo");

  if(secao === "clientes"){
    conteudo.innerHTML = "<h2>Clientes</h2>";
  }

  if(secao === "agenda"){
    conteudo.innerHTML = "<h2>Agenda</h2>";
  }

  if(secao === "financeiro"){
    conteudo.innerHTML = "<h2>Financeiro</h2>";
  }
}