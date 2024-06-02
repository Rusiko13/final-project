//1
// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

// for (let num = 0; num < 100; num++){
//   if(num >= 5 && num < 100){
//     console.log(num);
//   }
// }
// for (let num = 5; num < 100; num++){
//     console.log(num);

// }

//2

// მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (let item in array1){
//     console.log(array1[item]); ბეჭდავს მნიშვნელობას
// }
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (let item in array1){
//     console.log(item); ბეჭდავს ინდექსს
// }
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (let item of array1){
//     if(item > 0 && item < 10){
//         console.log(item);
//     }
// }
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

//3
// მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let item of array2){
//     if(item === 5){
// console.log(true);
//     }
// }
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
//4
// მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// let sum = 0
// for(let item of array3){
//     sum += item
// }
// console.log(sum);

// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

//5

// მოცემულია მასივი:
// let array4= [1, 2, 3, 4, 5];
// let sum = 0
// let result
// for(let item of array4){
//     sum += item
//     result = sum / array4.length
// }
// console.log(result);
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

//6
// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
//  let array5 = [1, 2, 3, 7, 6, 9];
//  for (let item of array5){
//     if(item === 7)
//     continue
//     console.log(item);

//  }
//7
// მოცემულია ობიექტი:
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active"
// };

// console.log(user.studentstatus);
// console.log(user['studentstatus']);

//8

// მოცემულია ობიექტი:

// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;

// let user2 = {
//     name: 'anna',
//     age:  20,
//     studentstatus: 'active'
// }

// let result = user2.age < 18 && user2.studentstatus === 'active' ?
// 'hello user':
//  user2.name === 'levan' ?
//  'hello levani' : user2.studentstatus === 'active' || user2.age < 25 ? 'hello anna' : 'error'
//  console.log(result);

//9
//  მოცემულია მასივი:
// ამოიღეთ მხოლოდ ლუწი რიცხვები

//  მოცემულია მასივი
//

// let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

// for (let item of array6){
//     if(item % 2 === 0 ){
//         console.log(item);
//     }
// }
//10
// let users = [
//         {username: 'giorgi', status: false},
//         {username: 'levani', status: false},
//         {username: 'anna', status: true}
//     ]

// for (let item of users){

//     if(item.status === true)
//     console.log(item);
//  }

// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

//11
// Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
// let array7 = [32, 14, 10, 'hello', null, '40', 50];
// for (let item of array7){
//     if (item % 5 === 0 && typeof item === 'number'){
//         console.log(item);
//     }
// }

//12

// Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
// let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];
// for (let item of array8){
//     for (let item1 of item){
//         if (item1 % 2 === 0 && item1 > 0 ){
//             console.log(item1);
//         }
//     }
// }

// const object = { a: 1, b: 2, c: 3 };
// for (const [key, value] of Object.entries(object)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }
// const object = { a: 1, b: 2, c: 3 };

// Object.keys(object).forEach(key => {
//     const value = object[key];
//     console.log(`Key: ${key}, Value: ${value}`);
// });
// const user = { name: 'John Doe', age: 30, occupation: 'Software Engineer' };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Object.keys(user).forEach(key => {
//     console.log(`${key}: ${user[key]}`);
// });

// const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };

// Object.entries(book).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// const person = { name: 'Alice', age: 28, city: 'New York' };

// Object.entries(person).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
// const scores = { math: 95, science: 88, english: 92 };

// Object.values(scores).forEach(value => {
//     console.log(value);
// });

// functions
//1 function declaration hoisted var
// function getUser(){
// console.log('hello ruso');
// }
// getUser();
//2 function exspretion  not hoisted let const
// let fnc1 = function(){
//     console.log('hello ruso2');
// }
// fnc1()
//3 arrow function not hoisted, ar gchirdeba return gatsera
// let fnc2 = () => ('i love you');
// let fnc3 = fnc2()
// console.log(fnc3);

// let userAge = (birthYear, currentYear = 2024) => currentYear - birthYear;
// let getUserAge = userAge(1999);
// console.log(getUserAge);

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
//1
// let sumFnc = (...numbers)=> {
//     let sum = 0
//     for (let item of numbers){
//         sum += item;
//     }
//     return sum

// }
// let sumResult = sumFnc(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(sumResult);

//2
let user = {
            firstname: 'giorgi',
            lastname: 'saakadze',
            age: 32,
            isloggedin: true
          }
let user2 = {
            firstname: 'gio',
            lastname: 'saak',
            age: 32,
            isloggedin: false
          }

function userInfo (info){
   
      if(info.isloggedin){
        return `${info.firstname} ${info.lastname}`
      }
      return false
}
let userInfoResult = userInfo(user);
let vnakhot = userInfo(user2);
console.log(userInfoResult);
console.log(vnakhot);


	

// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
// 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

//3
//  let maxNum = (...numbers)=> Math.max(...numbers);
//  let maxNumResult = maxNum(10, 50, 6, 7, 8, 11, 6, 3, 9);
//  console.log(maxNumResult);

// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
// ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max )

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; 
// თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

//4
// let guessFnc = (n) => {
//     if(n % 2 == 0){
//         return 'lutsia'

//     } return 'kentia'

// }
// let vnakhot = guessFnc(5);
// let abaVnakhot = guessFnc(6);
// console.log(vnakhot);
// console.log(abaVnakhot);
//5
// მოცემულია მასივი:

// let array = [1,2,3,4,5]; 
// let reversedArray = [];
// for (let i = array.length; i >= 1; i--){
// return i

// }
// let pasukhi = reversedArray.push(i)
// console.log(pasukhi);

// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
// }

// console.log(reversedArray);

// let array2 = array.reverse();
// console.log(array2);
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

// ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულწლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

//in to find a property in obj
// let obj = {
//     test: undefined
//   };

//   console.log(obj.test);
//   console.log("test" in obj);

//loop in object
//   let user11 = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user11){
    // console.log(key);
//     console.log(user11[key]);
//   }

let array = ["Apple", "Orange", "Pear"]
console.log(array.at(-2)
);
array.toString();
console.log(array);

// console.log(array.at(-1));
// array.push('traki')
// array.pop(array.at(-1));

// array.unshift('ruso');
// array.shift();
// array.push('dito');
// console.log(array);
// let array12 = array
// console.log(array12);
// array[1]= 'marstji';
// console.log(array);
// let arr = [ 'Apple', { name: 'John' }, true, function() {  return 'hello' } ];

// console.log(arr[1]);
// console.log(arr[1].name);
// let returnedValue = arr[arr.length - 1]()
// console.log(returnedValue);