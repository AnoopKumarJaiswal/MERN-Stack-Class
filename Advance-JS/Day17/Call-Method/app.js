let p1 = {
    naam : "Anoop",
    age : 25,
    introduce : function (){
        console.log(`Hi I am ${this.name} and my age is ${this.age}`);
        
    }
}


let p2 = {
    naam : "Shubham",
    age : 26
}

p1.introduce.call(p2)

// p1.introduce()
// p2.introduce()



function namste()
{
    console.log(`Hi my Name is ${this.naam} and age is ${this.age}`);
    
}

namste.call(p2)
namste.call(p1)




function namste()
{
    console.log(`Hi nmae is ${this.naam} and i have a pet :`);
    
}




