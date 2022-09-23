// 1- fatorial de 10:

// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
// console.log(fatorial);

// 2- crie um anagrama com a palavra 'tryber':

// let word = 'tryber';
// let wordInverted = " ";
// for (let index = 0; index < word.length; index += 1) {
//     wordInverted += word[word.length - 1 - index];
// }
// console.log(wordInverted);

//3 - retornar a maior e a menor palavra:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array [0]

// for (let index = 0; index < array.length; index += 1) {
//     if(array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index];
//     }
// }

// for (let index = 0; index < array.length; index += 1) {
//     if(array[index].length < menorPalavra.length){
//         menorPalavra = array[index];
//     }
// }

// console.log(maiorPalavra);
// console.log(menorPalavra);

// 4. escreva os numeros primos entre 2 e 50:

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
