let obj = {
    naam : "Anoop",
    age : 25
}


function namste()
{
    console.log(`Hi my name is ${this.naam} and my age is ${this.age}`);
    
}

const fn = namste.bind(obj)
fn()





let obj2 = {
    naam : "Shubham",
    age : 25
}


function sayHello( color , sport)
{
    console.log(`My name is : ${this.naam} and age is : ${this.age} and fav color : ${color} and  fav sport is : ${sport}`);
    
}
const fn2 = sayHello.bind(obj2 , "white" , "cricket")
fn2()