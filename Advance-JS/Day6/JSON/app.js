let obj = {
    name: "Anoop",
    age: 25,
    isPresent: true
}



let jsonData = JSON.stringify(obj)
console.log(jsonData);


let newObj = JSON.parse(jsonData)
console.log(newObj);



let arr = [1,2,3,4,5,7,6]
let jsonArray = JSON.stringify(arr)
console.log(jsonArray);
console.log(jsonArray[2]);


let newArray = JSON.parse(jsonArray)
console.log(newArray);


