class Outro {
  endereco: String;

  constructor() {
    this.endereco = "";
  }
}

interface Carro {
  idade: Number | String
  nome: String
}

interface Bicicleta {
  rodas: Number
};

const funcao = (validacao: boolean): Carro | Bicicleta | Outro => {
  if(validacao){
    return {
      idade: 5,
      nome: "Onix"
    };
  }
  return {
    endereco: "sdjfsjd",
  };
}

const resultado = funcao(false);

if(resultado instanceof Outro) {
  console.log("passou aq");
}

if("idade" in resultado){
  if(typeof resultado.idade === "string"){
  console.log(resultado.idade)
}
}

if("rodas" in resultado){
  console.log(resultado.rodas)
}

// console.log(resultado)
funcao(false)