// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
//     sum += numbers[index];
// }

// console.log(sum);

// let div = sum / numbers.length;

// console.log(div);

// if (div > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers [index] > higherNumber) {
//     higherNumber = numbers[index];
//     }
// }

// console.log (higherNumber);

// let result = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     if(numbers[index] % 2 !== 0) {
//         result += 1;
//     }
// }

// if (result === 0) {
//     console.log('nenhum valor impar encontrado');
// } else {
//     console.log(result);
// }

// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers [index] < smallestNumber) {
//     smallestNumber = numbers[index];
//     }
// }

// console.log (smallestNumber);

let numbers = [];

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}

for (let index =0; index < numbers.length; index += 1) {
    console.log (numbers[index] / 2);
}