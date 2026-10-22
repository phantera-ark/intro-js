// O JavaScript possui 7 tipos de dados primitivos(que guardam um único valor simples)

// 1 - Strings
// O tipo String representa sequências de caracteres, como nomes, mensagens, endereços, emails, ou seja, textos de modo geral.

const nome = "Goat";
const cidade = 'São Paulo';
const mensagem = `Olá, fulanx`;

console.log(nome)
console.log(cidade)
console.log(mensagem)
console.log("-------------------------------")

// 2 - Number
// O JavaScript usa o tipo Number para representar números inteiros e decimais.

const idade = 20;
const altura = 1.75;
const preco = 599.90;
const temperatura = -3.17;

console.log(idade)
console.log(altura)
console.log(preco)
console.log(temperatura)
console.log("-------------------------------")

// 3 - BigInt
// O tipo bigint permite representar números inteiros maiores do que o limite de precisão dos números internos comuns do tipo Number.
const numeroGrande = 182379182739182989788n
//o n no final do número indica que é um BigInt
console.log(numeroGrande)
console.log("-------------------------------")

// 4 - Boolean - Valores lógicos
// O tipo boolean representa apenas dois valores:
// true = verdadeiro
// false = falso
// É muito utilizado para verificar condições, controlar funcionalidades e representar estados.

const estaLogada = false;
const temPermissao = false;

console.log(estaLogada)
console.log(temPermissao)

// 5 - Undefined
// No JavaScript, undefined(indefinido) representa um valor não foi definido.
let fruta;
console.log(fruta);
console.log(typeof fruta); // undefined

console.log("--------------------")
// 6 - Null
// O null no JavaScript representa a ausência INTENCIONAL de um valor

const fotoDePerfil = null;
fotoDePerfil = "fotoDePerfil.jpg"

console.log("--------------------")
// 7 - Symbol
// O symbol é utilizado para criar identificadores únicos

const id1 = Symbol("id")
const id2 = Symbol("id")

console.log( id1 === id2 );