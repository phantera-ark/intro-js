// Variaveis - Uma variavel nada mais é do que um identificador que permite acessar um valor armazenado durante a execução do código.

// Exemplo: Imagine uma caixa etiquetada - A etiqueta é o nome da variavel, e o conteúdo e o valor armazenado dentro da caixa.

//let etiqueta = valor
let none ="goat";

/* O JavaScript possui três formas de declarar variáveis 
*/

// 1 - const
const pais = "Brasil";
console.log(pais)


// pais = "Portugal"; // Isso resultará em um erro, pois const não permite reatribuição

//2 - let
let idade = 20;
console.log(idade);

//redeclarado o valor da variavel idade
idade = 23
console.log(idade);

//redeclarando a variavel idade novamente
idade = 40
console.log(idade);

//3 - var (não recomendado)
var cidade = "São Paulo";

// Reatribuindo o valor da variavel
cidade = "Santos"
console.log(cidade)