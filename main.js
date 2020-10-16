// var --> let, const
// let is relevant to specific scope !
// const is not changeable

function test(){
    let a = 30;
    if(true){
      let a = 50;
      console.log(a); //prints 50
    }
    console.log(a); //prints 30
    const x = 50;
    x=20;// error- cannot assign to const.
  }











// printing: backtick and ${}
const name= "Yossi";
console.log("Hello "+name); // Hello Yossi
console.log(`Hello ${name}`); // Hello Yossi 












// Classes and inheritance
class Student {
    constructor(name){
        this.name=name;
    }
    static details(){
        console.log(`Student : ${this.name}`);
    }
    details2(){
        console.log(`Student : ${this.name}`);
      }
}

let  s1 = new Student ("Yossi Shemi");
Student.details(); // static method
s1.details2();













// String methods
let theString = 'Hello, Yossi Shemi';
console.log(theString.startsWith('Hello')); //true
console.log(theString.endsWith('JavaScript')); // false
console.log(theString.includes('Yo')); //true












//Spread operator ...
const numbers2 =[2,4,6];
const numbers3=[3,6,9];
const numbers= [...numbers2, ...numbers3];
console.log(numbers); // 2,4,6,3,6,9










// Arrow functions

/* ES5
let add = function(a,b){
  let sum = a+b;
  console.log(sum);
  return false;
}
*/
let add = (a,b) => {
    let sum = a+b;
    console.log(sum);
  }
add(10,2); // 12

let plus1 = x=> x+1;
console.log(plus1(3)); // 4




// Default values
const d = (x=5)=>{
    console.log(x+2);
}
d(); //7











//Destructuring assignment
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const address={city:'Lod', street:'a', number:2};
const {city,street}=address; // important to use same names !
console.log(city +' '+street);













//Array methods
let arr = [1,2,3,4,5,6,7,8,9,10];

let arr2= arr.forEach(x=>x*2);
console.log(arr2); // undefined

// Map-> return new array with the same size of original.
// Can change x value or return answer to consition
let arr3= arr.map(x=>x*2);
console.log(arr3); //  2 4 6 8 10 12 14 16 18 20
let arr31 = arr.map (x=>x%2==0);
console.log(arr31); // F T F T F T F T F T

// Filter -> return the x only if the condition is true
let arr4 = arr.filter (x=>x%2===0);
console.log(arr4); //2 4 6 8 10

console.log( arr.reduce((sum,value)=>sum+=value) ); //55

arr.sort((a,b)=> b-a);
console.log(arr); // 10 9 8 7 6 5 4 3 2 1















//Promises

//Async1 :
getAllNumbers= (successfulCallBack , failureCallBack)=>{
    setTimeout(() => {
        try{
            const arr = [1,2,3];
            successfulCallBack(arr);
        }
        catch (err){
            failureCallBack(err)
        }
    }, 3000);
}
//Use:
getAllNumbers(
    (res)=>console.log(res), //123
    (err)=>console.log(err)
);


//Async2 :
getAllNumbers2= ()=>{
  return new Promise ( (resolve, reject)=>{
    setTimeout(() => {
        try{
            const arr = [1,2,3];
            resolve(arr);
        }
        catch (err){
            reject(err)
        }
    }, 3000);
  });
}
//Use:
getAllNumbers2()
.then(numbers=>console.log(numbers)) //123
.catch(err=>console.log(err));


// Async3 (Angular) :
// getAllNumbers3= ()=>{
//     return Observable.create(observer=>{
//         setTimeout(() => {
//             try{
//                 const arr = [1,2,3];
//                 observer.next(arr);
//             }
//             catch (err){
//                 observer.error(err)
//             }
//         }, 3000);    });
//   }
//   //Use:
//   getAllNumbers3().subscribe(
//       (res)=>{console.log(res);},
//       (err)=>{console.log(err);}
//   );
  