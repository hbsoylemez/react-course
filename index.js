//spread : arary ve objelerde başına ya da sonuna eklemek istediğimizde kullanılır
let numbers = [1,2,3,4];

//yeni eklemek istediğimizde js de ;
numbers.push(5); //yapıyoruz
// şu anda numbers  (1,2,3,4,5)
//reactda ise ;

let newNumbers = [...numbers];

newNumbers= [...numbers, 6];
console.log(newNumbers);
// 1,2,3,4,5,6
newNumbers = [0, ...numbers];
//0,1,2,3,4,5,6

const user = {
    name: "Burak",
    surname: "Söylemez",

}

const userWithAge = {
    ...user,
    age: 25,
} 

console.log(userWithAge);
//rest operatörü 
let sum = (...args) => {
    return args.reduce((prevValue, currentValue) =>  prevValue + currentValue);
};
console.log(sum(1,2,3,4,5));
//spreadi 2 arrayi kombinlemek için de kullanabiliriz
//for ex;
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

const combinedArr = [...firstArr, ...secondArr];
console.log("combinedArr : " , combinedArr);//1,2,3,4,5,6
