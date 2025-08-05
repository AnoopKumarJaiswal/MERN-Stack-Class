// Shallow Copy



// let arr = [1,2,3,4,45,5]
// let arr2 = arr

// console.log(arr);
// console.log(arr2);


// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)


// console.log(arr);







// let p = {
//     name : "Anoop",
//     age : 25
// }



// let p2 = p

// console.log(p);
// console.log(p2);


// p.age = 45

// console.log(p);
// console.log(p2);








// Deep Copy



let arr = [1,2,3,4,5,6]
let arr2 = structuredClone(arr)


arr2.push(7)
arr.push(9)
arr.push(90)


console.log(arr);
console.log(arr2);




let p = {
    name : "anoop",
    age : 34
}




let str = JSON.stringify(p)
let p2 = JSON.parse(str)



console.log(p);
console.log(p2);





p.name = "Anoop"


console.log(p);
console.log(p2);



p2.name = "Shubham"


console.log(p);
console.log(p2);








