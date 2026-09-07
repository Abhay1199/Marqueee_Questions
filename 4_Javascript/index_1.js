console.log("Hello World");
let a = 7.0021;
console.log(a);





// For .. of loop details.........................................
console.log("For of loop ............................");
let arr = [10,20,30];
for (let value of arr){
    console.log(value);
}
let num = [10,20,30,40,50];
let indicator = num[Symbol.iterator]();
// console.log(indicator.next());
// console.log(indicator.next());
// console.log(indicator.next());
// console.log(indicator.next());

// Always in increasing order.... not goes in decreasing order....

// An iterator has a next() method that returns an object like this:
// {
//     value: currentValue,
//     done: false
// }

// When there are no more values:
// {
//     value: undefined,
//     done: true
// }

let result = indicator.next();
while(!result.done){
    console.log(result.value);
    result=indicator.next();
}

// Actual Flow

// Array
//  │
//  │
//  ▼

// {
//  0:10,
//  1:20,
//  2:30,
//  length:3,

//  __proto__

//       │

//       ▼

//  Array.prototype

//         │

//         ▼

//  Symbol.iterator()

//         │

//         ▼

//  Iterator Object

//         │

//         ▼

//  next()

//         │

//         ▼

//  value

//         │

//         ▼

//  for...of prints it



// Implement the for of loop 
let numbers = {
    start: 1,
    end: 3,

    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;

        return {
            next() {
                if (current <= last) {
                    return {
                        value: current++,
                        done: false
                    };
                }

                return {
                    done: true
                };
            }
        };
    }
};

for (let num of numbers) {
    console.log(num);
}

// ................................................................


// for...in loop details .........................................
console.log("For in Loop ..............");

let person = {
    name: "si",
    age:20,
    Address: "104,Saint john",
    State:"Saint john",
    city:"Fiji"
};
for (let key in person){
    console.log(key,person[key]);
}
console.log("Type of: "+typeof(person));
// For in it used only in Object 
// https://chatgpt.com/s/t_6a433add9ee08191b72d573451129d52

// ................................................................ 

// For Each Details............................................... 
console.log("For Each...................");

let arr_2 = [10,20,30];
let fruits_2 = ["Apple","Banana","mango"];
arr_2.forEach(function(value){
    console.log(value);
})
fruits_2.forEach(function(value,index){
    console.log(value,index);
})

// it used in array iteration
// one by one it callback the function and return the value 
// not go whole array in at same time 

// name.forEach(function(value,index,array){
// })


// link - https://chatgpt.com/s/t_6a4768df9fc481918dd480c3dffce08c

const price = [10,20,30];

price.forEach(function(price){
    console.log(`Prices: ${price}`)
});

const nums_2 = [2,3,4];
const square =[];
nums_2.forEach(function(num){
    square.push(num*num)
})
console.log(square);

let arr_7 =[ 
    {name:"Alice"}, {name:"bob"}
]
arr_7.forEach(function(val,idx){
    console.log(val.name)
})
console.log("\n");
console.log("Color Question............");
const color=["Blue","Black","Green","violet"];
color[1]="Orange";
color.push("Red");
console.log(color.length);
for(let value of color){
    console.log(value);
}


console.log("\n");
let items = ["pen","book"];
items.unshift("pencil");
items.shift();
console.log(items);


let tasks=[];
tasks.push("Eat");
tasks.push("code");
tasks.push("sleep");
tasks.shift();
console.log(tasks);


