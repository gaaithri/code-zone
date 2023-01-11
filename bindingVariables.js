// const num = 4;
// const descriptor = Object.getOwnPropertyDescriptor(num, "num");
// console.log(descriptor);

const num = {"four": 4};


const descriptor = Object.getOwnPropertyDescriptor(num, "four");

console.log(descriptor);
// console.log(num.name,num.type, num.writable, num.configurable, num.value , num.configurable)
// console.log(person.name, person.type, person.writable, person.configurable, person.value , person.configurable)
const empName = {"idNo": "SF3ds23f"}
const grade = "Fpur"
console.log(grade.name, grade.type, grade.writable, grade.configurable, grade.value , grade.configurable)


const nameIt = {"name": "castilo"}
console.log(nameIt.name);       // Outputs "name"
console.log(nameIt["name"].value); 

