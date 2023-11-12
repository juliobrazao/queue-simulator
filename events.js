// Campos da interface grafica
const sites_acessados = document.querySelector("#sites_acessados");
const sites_retornados = document.querySelector("#sites_retornados");
const site_atual = document.querySelector("#site_atual");
const inputSite = document.querySelector("input");
const buttonSalvaSite = document.querySelector("button");
const buttonRetornaSite = document.querySelectorAll("button")[1];

// De meio em meio segundo atualiza as pilhas com os sites acessados e
// retornados
setInterval(() => {
  sites_acessados.innerHTML = JSON.stringify(sitesAcessados);
  sites_retornados.innerHTML = JSON.stringify(sitesRetornados);
}, 500);


// Junta listas de acessados e retornados para identificar ultimo item da
// ordenacao, demonstrando assim historico atualizado
function mergeArrays(array1, array2) {
  const mergedArray = [...array1, ...array2];

  const latestObject = mergedArray.reduce((latest, current) => {
    const latestDate = new Date(latest.acessadoEm).getTime();
    const currentDate = new Date(current.acessadoEm).getTime();
    return currentDate > latestDate ? current : latest;
  });
  return [latestObject];
}

// Atualiza o campo de URL atual com endereco inserido ou retornado
function atualizaCampoDeURL(){
  try {
    site_atual.innerHTML = mergeArrays(sitesAcessados, sitesRetornados)[0].endereco;
  } catch (err){
    site_atual.innerHTML = '';
  }
};

// Disparo de evento de quando entra em novo site
buttonSalvaSite.addEventListener("click", function(){
  if (inputSite.value){
    salvaAcesso(inputSite.value);
    inputSite.value = "";
    site_atual.innerHTML = inputSite.value;
  } else {
    alert('O campo de site está vazio!')
  }

  atualizaCampoDeURL();
});

// Disparo de evento de retorno para site anterior do historico
buttonRetornaSite.addEventListener("click", () => {

  // Prevenindo erros em caso de historico vazio ou com apenas um site acessado
  switch (sitesAcessados.length) {
    case 0:
      alert('Nenhum site acessado!');
      break;
    case 1:
      alert('Voce não possui sites no histórico!');
      break;
    default:
      retornaAcessoAnterior();
      break;
  }

  atualizaCampoDeURL();
});