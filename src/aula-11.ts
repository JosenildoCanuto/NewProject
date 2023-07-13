class Escola {
  public readonly nome: string;
  private readonly aluno: Aluno[];

  constructor(nome: string){
    this.nome = nome
    this.aluno = []
  }

  public adicionarAluno(aluno: Aluno) {
    this.aluno.push(aluno);
  } 
}

class Aluno {
  constructor (public readonly nome:string){}
}

const escola = new Escola("Nova Escola");
const aluno1 = new Aluno("Lucas");
const aluno2 = new Aluno("Maria");
const aluno3 = new Aluno("João");

escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);
escola.adicionarAluno(aluno3);
escola.adicionarAluno(new Aluno("Novo Aluno"));

console.log('Escola', escola)