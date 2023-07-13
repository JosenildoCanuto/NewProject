const funcaoCallback = (valor:number):void => {
  console.log("Deu bom!" + valor)
}

const funcaoTeste2 = (
  valor1: number,
  valor2: number,
  callback: (valor:number) => void
): string =>  {
  if (valor1 > valor2) {
    callback (valor1);
  }
  return ""
};

funcaoTeste2(5,3, funcaoCallback);
funcaoTeste2(5,3, (x: number) => {
  console.log("Outra função" + x)
});