interface Pessoas {
  nome: String,
  idade: Number
}

interface Usuario {
  cidade: String,
  pessoas: Pessoas[]
}

const usuario: Usuario = {
  cidade: "Maceió",
  pessoas:[
    {
      nome: "Neto",
      idade: 18
    },

    {
      nome: "Antthony",
      idade: 31
    }
  ]
}

console.log(usuario)
console.log(usuario.pessoas.length)