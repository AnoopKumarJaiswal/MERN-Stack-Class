// function parent ()
// {
//     var a=20
//     return function ()
//     {
//         console.log(a);
        
//     }

// }
// var fn = parent()
// fn()










// function outer()
// {
//     var a="qwerty"
//     function inner ()
//     {
//         console.log(a);
        
//     }
//     return inner 

// }



// let fn = outer ()
// fn ()








// function counter (operation)
// {
//     var count =0
//     if (operation=="inc")
//     {
//         return function()
//         {
//             count++
//             console.log(count);
            
//         }


//     }
//     else if (operation == "dec")
//     {
//         return function()
//         {
//             count--
//             console.log(count);
            
//         }
//     }
//     else if (operation =="res")
//     {
//         return  function()
//         {
//             count= 0
//             console.log(count);
            
//         }
//     }
// }


// var increament = counter("inc")
// var decrement = counter("dec")
// var reset = counter ("res")





// increament()
// increament()
// increament()
// increament()
// increament()
// increament()

























function counter ()
{
    var count =0
    return {
        increment: ()=>{
            count++
            console.log(count);
            
        },
        decrement :()=>{
            count--
            console.log(count);
            
        },
        reset : ()=>{
            count =0
            console.log(count);
            
        }
    }
}


let outerobj= counter()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.increment()
outerobj.decrement()
outerobj.decrement()
outerobj.decrement()
outerobj.decrement()
outerobj.decrement()
outerobj.decrement()
outerobj.decrement()
outerobj.decrement()
outerobj.reset()
















function cunter ()
{
    var count =0
    return {
        increment: ()=>{
            count++
            console.log(count);
            
        },
        decrement :()=>{
            if (count==0){
                console.log(count);
                return
                
            }
            count--
            console.log(count);
            
        },
        reset : ()=>{
            count =0
            console.log(count);
            
        }
    }
}