



// function Person(n)
// {
//     this.name = n
// }



// Person.prototype.greet = function()
// {
//     console.log(`${this.name} says hi`);
    
// }

// const p1 = new Person("Anoop")
// p1.greet()







function Person(n)
{
    this.name = n
}

Person.prototype.greet = function()
{
    console.log(`${this.name} say hi`);
    
}

const p1 = new Person("Anoop")
p1.greet(6)