
const markMass = 100;
const markHeight = 1.9;

const johnMass = 77;
const johnHeight = 1.8;

const calcBMI = (mass, height) => Math.floor(mass / (height * height));
const markBMI = calcBMI(markMass,markHeight);
const johnBMI = calcBMI(johnMass,johnHeight);

const markIsHigher = markBMI > johnBMI;

console.log(`Marks BMI is ${markBMI}, Johns BMI is ${johnBMI}, is Marks Higher? ${markIsHigher}`)