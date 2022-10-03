function verificaPalindromo(word) {
    for(index in word) {
        if (word[index] != word[(word.length -1) - index]) {
            return false;
        }
    }
    return true;
}

// console.log(verificaPalindromo('arara'));

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for(let indice in numeros) {
        if (numeros [indiceMaior] < numeros [indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}
console.log(indiceDoMaior ([2,3,6,7,10,1]));