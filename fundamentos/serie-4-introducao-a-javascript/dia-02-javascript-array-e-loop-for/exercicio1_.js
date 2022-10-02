let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    // console.log(numbers[index]);
}

let result = 0;

for (let index = 0; index < numbers.length; index += 1){
    result += numbers[index];
}
// console.log(result);

for (let index = 0; index < numbers.length; index += 1){
    result += numbers[index];
}

let sumArit = result / numbers.length;
// console.log(sumArit);

if (sumArit > 20) {
    // console.log ('valor maior que 20');
} else {
    // console.log('valor menor ou igual a 20');
}

let higherNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
// console.log(higherNumber);

let oddNumber = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0) {
        oddNumber += 1;
    }
}

if (oddNumber === 0) {
    // console.log ('nenhum valor ímpar encontrado');
} else {
    // console.log (oddNumber);
}

let smalestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > higherNumber) {
        smalestNumber = numbers[index];
    }
}
// console.log(smalestNumber);

let array = [];
for (let index = 1; index <= 25; index += 1){
    array.push(index);
}
// console.log(array);

for (let index = 0; index < array.length; index += 1){
    console.log(array[index] / 2);
}