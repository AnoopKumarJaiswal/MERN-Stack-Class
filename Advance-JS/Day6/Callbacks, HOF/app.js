function outer(a)
{
    console.log("Hello from outer function");
    function inner()
    {
        console.log("Hello from inner function");
        
    }
    return inner
    
}



function sample()
{
    console.log("Hello From sample Function");
    
}

let val = outer(sample)
console.log(val);
val()
