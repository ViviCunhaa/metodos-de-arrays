let alunos = ["Lucas", "Mariana", "Pedro", "Ana", "Gabriel", "Beatriz", "Rafael", "Camila", "Bruno", "Larissa"];

console.log(alunos);
console.log(alunos.includes("Ana"));
console.log(alunos.indexOf("Pedro"));

let parte = alunos.slice(0, 4);
console.log(parte);

alunos.splice(4, 1);
console.log(alunos);

alunos.splice(2, 0, "Mateus");
console.log(alunos);

alunos.sort();
console.log(alunos);

alunos.reverse();
console.log(alunos);
console.log(alunos.join(", "));
