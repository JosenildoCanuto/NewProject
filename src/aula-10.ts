// type MarcaTenis = "Nike" | "Adidas" | "Puma"

enum MarcaTenis2 {
  NIKE = 123,
  ADIDAS = 456,
  PUMA = 789,
}

interface Tenis{
  marcaTenis: MarcaTenis2
}

const test: Tenis = {
  marcaTenis: MarcaTenis2.NIKE,
}

if(test.marcaTenis === MarcaTenis2.ADIDAS){
  console.log("É Nike!");
}