// Write a function sum that finds the sum of two numbers

// const { use } = require("react");

function sum(value1,value2){
    if((typeof(value1) || typeof(value2)) == "string")
        return "Give in integer value ";
    let res = value1+value2;
    return res;
}

console.log(sum(1,2));
console.log(sum("12","13"));
console.log(sum("12",13));




let a=20;
if(a%2==0)
    console.log("Its even number..");
else
    console.log("Its odd number..");




function sum_total(n){
    let count=0;
    for (let i = 1; i <= n; i++) {
        count+=i;
    }
    return count;
    
}
console.log(sum_total(10))



const users = [
    {
        name:"Ram",
        age:21
    },
    {
        name:"raman",
        age:22
    }
];

let arr_3 = [
    {a:1,b:2},
    {c:3,d:4}
]
console.log(users[1].age);
console.log(arr_3[0].a);




// object of object
const contact_details={
    name: "Rahul Ali Khan",
    phone_no:"+9281398232",
    Address:{
        state:"Pakistan",
        district:"Rawalpindi"
    }
}
console.log(`
Terroists Details :
Name: ${contact_details.name}
Phone no: ${contact_details.phone_no}
Address: ${contact_details.Address.district}, ${contact_details.Address.state}
`);


let str="123445567";
console.log(typeof(str));
console.log(typeof(Number(str)));

console.log(`
    `);
let move = 3;
switch(move){
    case 1:
        console.log("Move upward");
        break;
        case 2:
        console.log("Move Downward");
        break;
        case 3:
        console.log("Move Rightside");
        break;
        case 4:
        console.log("Move Leftside");
        break;
        default:
        console.log("Don't Move");
}
console.log("\n");
let fruit="apple";
switch(fruit){
    case "apple":
    case "pear":
        console.log("Common Fruit");
        break;
    case "dragonfruit":
        console.log("Exotic fruit");
        break;
    default:
        console.log("Unknown Fruit");
}






// Calucator using switch
console.log("\n");
function calcu(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
            break;
        case "-":
            return a-b;
            break;
        case "*":
            return a*b;
            break;
        case "/":
            return a/b;
            break;
        case "%":
            return a%b;
            break;
        default:
            return "Invalid operator";
    }
}
let operator = "+";
console.log(calcu(4,5,operator));



// Fizz Buzz problem : fizz multiple of 3 and buzz multiple of 5
console.log("\nFizzBuzz Problem.....................");
function fizzbuzz(n){
    for(let i=1;i<=n;i++){
        if(i==13)
            continue;
        if(i==25)
            break;
        if(i%3==0){
            if(i%5==0)
                console.log("FizzBuzz");
            else
                console.log("Fizz");
        }
        else if(i%5==0)
            console.log("Buzz");
        else
            console.log(i);
    }
}
fizzbuzz(30);


console.log(null==undefined);



// stops when reach number divisible by 7
console.log("\nDivisible by 7......................."); 
function div_7(n){
    for(let i=1;i<=n;i++){
        if(i%7==0) break;
        console.log(i);
    }
}
div_7(20);


// skips negative num and log only positive num
console.log("\nSkips negative & log positive.........................");
function neg_skip(arr){
    for(let value in arr){
        if(arr[value] >=0)
            console.log(arr[value]);
        else
            continue;
    }
}
const nums=[3,-1,0,5,-10,8];
neg_skip(nums);


console.log("Do while..............");
let i=5;
do{
    console.log(i--);
}while(i>=1);
console.log("\n");
let x=3;
do{
    console.log(x);
    x*=2;
}while(x<=256);



console.log("For of .............");
let users_1=["alice","bob","charlie"];
for (let value of users_1){
    console.log(`users: ${value}`);
}

console.log("\n");
console.log("Arrow Function................");
const greet = (name) => console.log(`Name : ${name} `);
greet("SWAMI");


console.log("\n")
console.log("Immediately Invoked Function Expression (IIFE)..........");
(function () {
  console.log("Runs immediately!");
})();
(() => {
  console.log("Also runs immediately!");
})();




console.log("\n");
console.log("Rest operator.....................");
function add(...rest){
    let total=0;
    for(let num of rest){
        total+=num;
    }
    // console.log(typeof rest);
    return total;
}
// array to single value -- reduce 
function SumALL(...numbers){
    return numbers.reduce((sum,num)=>sum+num,0);
}
console.log(add(3,7,6,1,9));
console.log(SumALL(6,2,6,2,9,5));

console.log("\n");
function words(first,...sentence){
    return first+" "+sentence.join(" ");
}
console.log(words("Hello","my","name","is",":"));


console.log("\n");
const input = " hello World ";
console.log(input.trim());
console.log(input.trimStart());
console.log(input.trimEnd());

console.log("\n");
const sentence = "I have Javascript";
console.log(sentence.split(" "));
console.log("a,b,c".split(" "));
console.log("hello".split(""));

console.log("\n");
const url = "https://example.com/page";
console.log(url.includes("example"));
console.log(url.startsWith("http"));
console.log(url.endsWith(".com/page"));

console.log("\n");
const str_1 = "banana";
console.log(str_1.indexOf("a"));
console.log(str_1.lastIndexOf("a"));
console.log(str_1.indexOf("b"));




console.log("\n");
const harsh = '["its","Good","Boy"]';
console.log(typeof harsh);
let complete= JSON.parse(harsh);
console.log(complete);
console.log(typeof complete);



console.log("\n");
// ayush or harshita naam ke couple the ayush ne break up kr lia par harshita ko abhi tak ayush ki yaad aati hai hamesha 

function ayush(){
    let yaad = "vo kitna acha tha ";
    function harshita(){
        console.log(yaad);
    }
    return harshita;
}
let result_11 = ayush();
result_11();



// setTimeout(function(){
//     console.log("Hello");
// },8*1000)

// function sayHello(){
//     console.log("Hello func runs");
// }
// setTimeout(sayHello,6000);


// let count =0;
// let time_limit =setInterval(function(){
//     count+=1;
//     console.log("count :",count);
//     if(count==10)
//         clearInterval(time_limit);
// },1000)

// console.log(time_limit);
// if(time_limit==10)
//     clearInterval;

// console.log("Start");
// setTimeout(()=>console.log("After 4 second"),4000)
// console.log("end");



// Problem 1: Basic Delay sequence

// console.log("A");
// setTimeout(()=>{
//     console.log("B");
//     setTimeout(()=>{
//         console.log("C");
//     },1000);
// },2000);





console.log("\nMap Concept .............................");
const nums_1=[40,50,60,11,56];
const newNums =  nums_1.map(nums => nums*2);
console.log(newNums);

console.log("\n");
const arr_5=['cow','dog','rabbit','bear','tiger'];
const res_5= arr_5.map(nums=>{
    return `animal: ${nums}`;
})
console.log(res_5);

console.log("\n");
const nums_6=[40,50,60,11,56,15,12,6];
const res_6= nums_6.filter(nums=>{
    return nums%2!=0;
});
console.log(res_6);

console.log('\n');
const students =[
    {name:'John James',status:true},
    {name:'Michael Obi',status:false},
    {name:'Bola Ade',status:true},
    {name:'Emmanuel',status:false},
    {name:'Faithfulness Alamu',status:true},
];
let attended = students.filter(nums=>nums.status==true).map(nums=>nums.name);
console.log(attended);
// console.log(attended);



const numsArr=[10,20,30,40,50];
let res_7=0;
for(let i=0;i<numsArr.length;i++){
    if(res_7<numsArr[i])
        res_7=numsArr[i];
}
console.log("Max Value : "+res_7);

const num_8=[1,2,3,4,5,6,7,8,9,10];
const res_8 = num_8.filter(nums=>nums%2==0).map(nums=>nums*nums).reduce(nums=>nums+nums);

console.log(res_8);







// seperate operator / shallow copy / deep copy
console.log('\n Seperate Operator .................................');
const per1={name:'Md.Aasim',Occupation:'Terrorist' }
const per2={...per1, Occupation:'Farmer', Salary:'1 Lakh'}
console.log(per2);
const {name,Occupation} = per1;
console.log(name,Occupation);
// per1.name='Rahul';
// console.log(per1.name);


per2.Location={
        city:'srinagar',
        state:'jammu and Kashmir'
}
const deepCopy= structuredClone(per2);
per2.name='Rahul';
per2.Location.state='Delhi';
console.log(per2);
console.log(deepCopy);



// Swap without temp create.........
console.log("\n");
const animal_name ={first_name:'Cat',last_name:'dog'};
const {first_name,last_name}=animal_name;
console.log(last_name,first_name);







// make a constructor of"employee detail "
console.log("\n");
function EmployeeDetail(name,Salary,Department){
    this.name = name;
    this.Salary=Salary;
    this.Department=Department;
}
const JK_Command_1=new EmployeeDetail("Md.Maqbod","50,000 Pkr","Gun Supplier");
const JK_Command_2=new EmployeeDetail("Md.Saleem","70,000 Pkr","Drug Supplier");
console.log(JK_Command_1);
console.log(JK_Command_2);





// Create a object rectangle with width and height properties and  a method getArea() that return width*height

const grenade = {
    width:"20",
    height:"50"
}
function measurment_Area(shape){
    return shape.width*shape.height;
}
const grenade_1=measurment_Area(grenade);
console.log(grenade_1);



console.log("\n");




// JSON 

console.log("\n");
const user_5={
    name: "Rahul",
    location:"Vadodara",
    age: undefined,

    greet : function(){
        confirm.log('Ai There')
    },
    date : new Date().toLocaleDateString()
}
let res= JSON.stringify(user_5);
let res2=JSON.parse(res);
console.log(res);
console.log(typeof res);
console.log(res2);
console.log(typeof res2);


// CLass with Constructor
console.log("\n");

class JK_special_Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    introduce(){
        console.log("Hi, I am "+this.name+" with id: "+this.id);
    }
}

let JKs1=new JK_special_Student("Md.Asif",30);
JKs1.introduce();


// Class implement

class implement_class{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`My name is : ${this.name}`)
    }
}
let imp1=new implement_class("Hussian Ahmed");
imp1.greet();


class foo{
    constructor(name){
        this.name=name;
    }
    getNameSeparator(){
        return " ";
    }
}
class FooBar extends foo{
    constructor(name, index){
        super(name);
        this.index=index;
    }
    getNameSeparator(){
        return "/"
    }
    getfullname(){
        return this.name + this.getNameSeparator() + this.index;
    }

}
const firstfoobar=new FooBar("foo",1);
console.log(firstfoobar.name);
console.log(firstfoobar.getfullname());


//  rectangle
console.log("\n");
class Rectanngle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    get getArea(){
        return this.width*this.height;
    }
}

class square extends Rectanngle{
    constructor(width){
        super(width,width)
    }
    get area(){
        return super.getArea;
    }
}

let r1= new Rectanngle(12,15);
console.log(`Rectangle Result : ${r1.getArea}`);
let square_1=new square(14);
console.log(`Square is : ${square_1.area}`);

console.log("\n");

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        return this.name;
    }
}
class dog extends Animal{
    constructor(name){
        super(name);
    }
    // speak(){
    //     return this.name+" is Barking...";
    // }
    bark(){
        return super.speak()+" is Barking.";
    }
}

let Dog_1= new dog("Shera");
console.log(Dog_1.bark());
console.log("\n");


// Simple Car Class

class car_2{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }

    display(){
        console.log(`This car is a ${this.year} ${this.model}`);
    }

}

let C1= new car_2("TZ1234",1990);
C1.display();
console.log("\n"); 

// Simple Rectangle class
class Rectangle_1{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        console.log(`Rectangle Area : ${this.width*this.height}`);
    }
    perimeter(){
        console.log(`Rectangle perimeter : ${this.width+this.height}`);
    }
}
let R1=new Rectangle_1(10,20);
R1.area();
R1.perimeter();
console.log("\n");

class Temperature{
    #celsius=0;
    constructor(celsius){
        this.#celsius=celsius;
    }
    get fahrenheit(){
        return this.#celsius*(9/5)+32;
    }
    set Celsius(val){
        this.#celsius=(val-32)*5/9;
    }
}

let T1=new Temperature(26);
console.log(T1.fahrenheit);
T1.celsius=76;
console.log(T1.fahrenheit);
console.log("\n");



class user{
    static count=0;
    constructor(name){
        this.name=name;
        user.count++;
    }
    get_Count(){
        console.log(`Total user avaiable : ${user.count}`);
    }
}
let U1=new user("Md.Shahid");
let U2=new user("Shahik solanki");
let U3=new user("Salim Farook");

U3.get_Count();