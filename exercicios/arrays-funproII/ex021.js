/*Crie um array animais com ["gato", "cachorro", "peixe", "pássaro"]. Use splice() para
substituir "peixe" por "coelho" (remover 1 elemento na posição 2 e adicionar "coelho"). Imprima o
resultado*/
let animais = ['gato','cachorro','peixe','passaro']
animais.splice(2,1,'coelho')
console.log(animais)