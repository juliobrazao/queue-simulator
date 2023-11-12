// Crio dois arrays para armazenamento dos sites
// acessados e retornados, respectivamente
const sitesAcessados = [];
const sitesRetornados = [];

// Funcao que armazena um acesso a determinado site
// na lista de sites acessados
function salvaAcesso(endereco){
  let informacoesDeAcesso = {
    endereco: endereco,
    acessadoEm: new Date()
  };

  // Armazena na lista de sites que foram acessados diretamente
  sitesAcessados.push(informacoesDeAcesso);
};

// Funcao que retorna para site acessado anteriormente
// e salva na lista de sites retornados
function retornaAcessoAnterior(){
  let informacoesDeAcesso = {
    endereco: sitesAcessados[sitesAcessados.length - 2].endereco,
    acessadoEm: new Date()
  };

  // Armazena na lista de sites que foram acessados novamente
  sitesRetornados.push(informacoesDeAcesso);
};