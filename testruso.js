//HOF
// const multiplyBy = (num1) => (num2) => num1*num2;
// const multiplyByTwo = multiplyBy(2);
// const multiplyByNine = multiplyBy(9);
// console.log(multiplyBy(1)(10))

//closure
//memory efficient
// function heavyDuty(){
//     const bigArray = new Array(7000).fill('<3')
//     return bigArray
//     console.log(bigArray);
// }
// heavyDuty()

// function heavyDut2y(){
//     const bigArray = new Array(7000).fill('<3')
//     return function(index){
// return bigArray[index]
//     }
// }
//encapsulation

// functions are objects

// function a(){
//     return 5
// };
// a.hi = ("ahahah")
// console.log(a.hi);

//array როცა გინდა მოდიფიკაცია
// let a = [1,2,3,4,5]
// let b = [100, 200].concat(a);
// // b.push(55)
// console.log(a);
// console.log(b);

// let obj = { a: "a", b: "b", c: { name: "ruso" } };
// let clone = Object.assign({}, obj)
// let ruso2 = { ...obj };
// obj.c.name = "uhuhu";
// let superClone = JSON.parse(JSON.stringify(obj));
// console.log(obj);
// console.log(clone);
// console.log(ruso2);
// console.log(obj);
// console.log(superClone);

// ფუნქციის გამოძახების გზები

//Method - when a function is in an object, calling function as a method
// let obj = {
//     two(){
//         return 2
//     }
// }
// let obj = {
//     two: function(){
//         return 2
//     }
// }
// console.log(obj.two());

//3 way - call or apply

// function three(){
//     return 3
// }
// console.log(three.call());
// console.log(three.apply());

// functions are callable objects, we can store them as datas and work on them.
// const four = new Function('return 4');

// const five = new Function('num', 'return num');

// console.log(five(5));

//3 ways why functions are first class citizens of javascript
// 1. functions can be assigned to a variable or properties of an object(that is called method)
//2. can pass functions as an argument into a function (HOF)
//  function a(fn){
//     fn()
//  }
//  a(function(){console.log("hi Russo")});
//3. we can return the functions as a value from another function (HOF)

// function b(){
//     return function c(){console.log(15);}
// }

// let ruso = b()
// console.log(ruso());

// const multiply = function(x){
//     return function(y){
// return x * y
//     }
// }
// const multiply = x => y => x * y

// let multiplyBytwo = multiply(5)
// console.log(multiplyBytwo(100));

//closure where we write functions that matters not where we call or evoke
// function a(){
//     let grandpa = "grandpa"
//     return function b(){
//         let father = "father"
//         return function c(){
//             let son = "son"
//             return `${grandpa} > ${father} > ${son}`
//         }
//     }
// }
// console.log(a()()());
//memory efficient

// function heavyDuty(index){
//     const array = new Array(4).fill("love you")
//     return array[index]
// }

// function heavyDuty2(){
//     const array = new Array(4).fill("fuck  you")
//     return function(index){
// return array[index]
//     }
// }

// // console.log(heavyDuty(2));
// let ruso = heavyDuty2();
// console.log(ruso(2));

// let view;

// function initialize(){
//     let called = 0

//     return function(){
//         view = "mta"
//         return `${view} view has been set `
//     }
// }
// let ruso = initialize();
// console.log(ruso());
// console.log(ruso());
// console.log(ruso());

// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight(){
//         return 5
//     },
//     sing(){
//         return `I am ${this.name}, the breather of fire`
//     }
// }
// let val1 = dragon.sing();
// // console.log(val1);

// let lizard ={
//     name: 'Kiki',
//     fight(){
//        return 1
//     }
// }
// let val2 = dragon.sing.bind(lizard);
// console.log(val2());

// lizard.__proto__ = dragon;

// let Chiko = Object.create(dragon);

// for (let prop in lizard){
//     if (lizard.hasOwnProperty(prop))
//     console.log(prop);
// }
// console.log(lizard.fight());

// console.log(dragon.isPrototypeOf(lizard));

// console.log(typeof String
// );
// console.log(typeof Object
// );
// console.log(typeof Number
// );

// const elf = {
// name: "Russo",
// weapon: "bow",
// attack(){
//     return 'attack with' + "" + elf.weapon
// }

// }
// console.log(elf.attack()
// );

// const person = {
//     name: 'Dito',
//     sex: 'male',
//     sportName: 'basketball',
//     play(){
//         return ` ${person.name} plays ${person.sportName}`
//     }
// }

// console.log(person.play());



// const sameSport = {
//   play() {
//     return `${this.name} plays ${this.sportName}`;
//   },
// };
//Objetc.create();
// function getPerson(name, sportName) {
//   let newPerson = Object.create(sameSport);
//   newPerson.name = name;
//   newPerson.sportName = sportName;
//   return newPerson;
// }

// const person1 = getPerson("dito", "basketball");
// console.log(person1.play());

// const person2 = getPerson("Russo", "football");

// console.log(person2.play());

//consturctor function that has a prototype 

// function GetPerson(name, sportName) {
//     this.name = name; 
//     this.sportName = sportName;
//   }
  
// GetPerson.prototype.play = function(){
//     return `I love you`
// }
//   const person1 = new GetPerson("dito", "basketball");
  
//   const person2 = new GetPerson("Russo", "football");
  
// console.log(person2.play());


// class Elf {
//     constructor (name, weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack(){
//         return `attack with ` + this.weapon
//     }
// }
// const Peter = new Elf ('russo', 'topi');
// console.log(Peter);
// console.log(Peter.attack());
// const Dito = new Elf ('dito', 'burti')
// console.log(Dito);
// console.log(Dito.attack());



// the naive way
// const elf = {
//     name: 'Russo',
//     weapon: 'sword',
//     attack(){
//         return `attack with ` + elf.weapon
//     }
// }
// console.log(elf.name);
// console.log(elf.attack());

// factory function creates objects


//constructor functions
// function Elf (name, weapon){
//    this.name = name;
//    this.weapon = weapon;
// }
// Elf.prototype.attack = function(){
//     return this.name + ` attacks with ` + this.weapon
// }
// Elf.prototype.build = function(){
//     const self = this;
//     function building(){
//         return self.name + ' built a house ';
//     }
//     return building()
// }
//აქ ამოგადებს ანდეფაინდს, რადგან მეთოდში ანუ ფუნქციაში ფუნქცია როცა არის, 
// ზისი არ მიენიჭება თვითონ ობიექტს, არამედ ვინდოუ ობჯექტს
//problem solve const self = this;
// const dito = new Elf('Dito', 'Ball')
// console.log(dito.attack());
// console.log(dito.build());

// //ES6 Classes
// class Elf {
//     constructor(name, weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack(){
//         return this.name + ` attacks with ` + this.weapon

//     }
// }
// const dito = new Elf('Dito', 'Ball');
// //Dito is an instance of Elf
// console.log(dito instanceof Elf);//true instantiation-s aketebs new keyword
// console.log(dito.attack());

//this
//1. new binding
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person('dito', 27);
// console.log(person1);

// new binding allow us to assign this keyword to the object that we instantiat

//implicit binding 
// const person =  {
//     name: 'karen',
//     age: 40, 
//     hi(){
//         console.log('hi' + this.name);
//     }
// }

//this miutitebs person-ze -igivea rats person.name

//explicit binding
// const person3 = {
//     name: 'karen',
//     age: 40, 
//     hi: function(){
        
//         console.log('hi' + this.serTimeout);
//     }.bind(window)//veubnebit rom windoushi gavides, bind call and apply shegvidzlila gamoviyenot
// }
//arrow functions
// const person3 = {
//     name: 'karen',
//     age: 40, 
//     hi: function(){
//         var inner = ()=> {
//             console.log('hi' + this.name);
//         }
//         return inner()
//     }
// }
//we have a method with a function inside of it, funktsia funktsiashi, arrow functionis dros this aris window object

// class Character {
//     constructor(name, weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack(){
//         return this.name + ` attacks with ` + this.weapon

//     }
// }

// class Elf extends Character {
//     constructor(name, weapon, type){
//         super(name, weapon);
//         this.type = type;
        
//     }
// }
// class Ogre extends Character {
//     constructor(name, weapon, color){
//         super(name, weapon);
//         this.color = color;
//     }
//     makeFort(){
//         return ` strongest `
//     }
// }
// const dolby = new Elf('dolby', 'cloth', 'house');
// console.log(dolby.attack()
// );
// const shrek = new Ogre ('shrek', 'club', 'green');
// console.log(shrek.makeFort());

// this ის გამოყენება თუ გინდა სუპერ უნდა გამოიძახო ჯერ. 
//extends creates links to the upper class, its not a copy, classes inherites from classes, java mag. akopirebs klasebit

// functional programing
// const user = {
//     name: 'kim', 
//     active: true,
//     cart: [],
//     purchases: []
// }
//  const cart = {
//     item, 
//     buy(){

//     }
//  }
//  concat - ki ar akopirebs aramed reference to the Array, objects are passed by reference 

// const array = [1,2,3]
// function mutateArray(arr){
// const newArray = [].concat(arr);// newArray iqneba zustad array, ki ar dakopirdeba aramed referenci gadaetsema anu misamarti
// newArray.pop()
// return newArray
// } // noside effect 
// //mutable tandatan moaklebs bolo ritskhvs yvelagamodzakhebaze
// mutateArray(array);
// console.log(array);

// const hof = () => () => 5;
// console.log(hof()());

// const hof = (fn) => fn (5);
// console.log(hof(function a(x){return x})
// ); //function as a parameter


//closure

//  const closure = function (){
//     let count = 0; 
//     return function increment(){
//         count++
//         return count;
//     }
//  }
//  const result = closure();
//  console.log(result());
//  console.log(result());


const user = {
    name: 'kim',
    active: true,
    cart: [],
    purchases: []
}
// console.log(purchaseItem(user, {name: 'laptop', price: '200'})
// );
const compose = (f,g) =>(...args)=> f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

// function purchaseItem(user, item){
// return Object.assign({}, user, {purchases: item})
// }
function purchaseItem(...fns) {
   return fns.reduce(compose)
}
    

function addItemToCart(user, item){
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
}
function applyTaxToItems(user){
    return user
}
function buyItem(user){
    return user

}
function emptyCart(user){
    return user

}
console.log(compose());
console.log(purchaseItem());
