interface ObjetoQualquer {
  funcao: (param1: number, param2?: number) => Number;
}

const funcaoTeste = (param1: number, param2?: number) => {
  if (!param2) {
    return param1;
  }

  return param1 + param2;
};

const objetoQualquer: ObjetoQualquer = {
  funcao: funcaoTeste,
};

console.log(objetoQualquer.funcao(2, 6));
