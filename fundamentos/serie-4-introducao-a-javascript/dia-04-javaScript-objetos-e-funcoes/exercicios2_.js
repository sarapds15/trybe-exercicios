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
// console.log(indiceDoMaior ([2,3,6,7,10,1]));

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for(let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

// console.log(indiceDoMenor([2,4,6,7,10,0,-3]));

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for(let indice in palavras) {
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra = palavras[indice];
        }
    }
    return maiorPalavra;
}

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;

    for(let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somaTodosNumeros(numero) {
    let total = 0;
  
    for (let index = 1; index <= numero; index += 1) {
      total = total + index;
    }
    return total;
  }
  
//   console.log(somaTodosNumeros(5));

function verificaFimPalavra (palavra,fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    let controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1){
        if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]){
            controle = false;
        }
    }
    return controle;
}

// console.log(verificaFimPalavra('trybe', 'be')); 
// console.log(verificaFimPalavra('joaofernando', 'fernan'));

