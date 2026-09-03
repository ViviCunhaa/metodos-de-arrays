//19. Ordenando números 

let numeros = [50, 10, 100, 5, 25, 1];
numeros.sort();

console.log("--> Depois:", numeros); 

// Resposta:
// O sort() ordena os elementos convertendo-os em strings e comparando pela ordem UTF-16.
// Por isso, com números, o resultado pode não ser a ordem numérica esperada.
// Para ordenar números corretamente, é preciso passar uma função de comparação ao sort().