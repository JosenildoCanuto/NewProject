interface Estado {
  nome: String;
}

interface Cidade {
  nome: String;
}

interface Endereco {
  bairro: String;
  rua: String;
  complemento?: String;
  cidade: Cidade;
  estado: Estado;
}

const endereco: Endereco = {
  bairro: "Farol",
  rua: "AJBjbasdjfbajsbdasjk",
  complemento: "sdbfshjdbfsjdbf",
  cidade: {
    nome: "Maceió",
  },
  estado: {
    nome: "Alagoas",
  },
};

console.log(endereco);
console.log(endereco.complemento?.substring(3) || "CONSEGUIR");
