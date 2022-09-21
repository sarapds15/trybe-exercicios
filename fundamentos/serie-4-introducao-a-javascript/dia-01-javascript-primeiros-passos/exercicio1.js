const a = 10;
const b = 5;
const c = 1;
const number = 7;
const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

if (a>b){
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
}

if (a > b && a > c) {
    console.log('o maior número é:' + "'a'")
} else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
  } else {
    console.log('O maior número é: ' + c + ' (c)');
  };

  if (number > 0) {
    console.log('positive');
  } else if (number < 0) {
    console.log('negative');
  } else {
    console.log('zero');
  };
  let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}