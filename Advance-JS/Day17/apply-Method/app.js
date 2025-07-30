let p1 = {
    naam : "Anoop",
    age : 34
}


function sayHi()
{
    console.log(`Hi my name is ${this.naam} and my age is ${this.age}`);
    
}


sayHi.apply(p1)






let p2 = {
    naam : "Amit",
    age : 23
}



function namste(color , sport)
{
    console.log(`Hi my Name is ${this.naam} and age is ${this.age} and my fav color ${color} and fav sport ${sport}`);
    
}

namste.apply(p2 , ["Red" , "cricket"])