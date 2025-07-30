// "use strict"



// age = 10
// console.log(age);



// undefined = 10
// console.log(undefined);


// null = 10
// console.log(null);




// var age = 25
// delete age 
// console.log(age);




// function sum(a,a,)
// {
//     console.log(a + a);
    
// }

// sum(1,23)



// console.log(this);






// function abc()
// {
//   console.log(this);
  
// }

// abc()




// let fn = () =>{
    
//     console.log(this);
    
// }

// fn()







// object

// let obj = {
//     fn1 : function sum()
//     {
//         console.log(this);
        
//     },


//    fn2:() =>{
//     console.log(this);
//    },



//    fn3:function() {
//     console.log(this);

//     const temp = () =>{
//         console.log(this);
        
//     }
//     temp()
    
//    },

//    fn4 : () =>{
//     console.log(this);


//     function sum()
//     {
//         console.log(this);   
//     }
//     sum()
//    },


// }

// // obj.fn1()
// // obj.fn2()
// // obj.fn3()
// // obj.fn4()




let obj = {
    naam : "Anoop",
    age : 25,


    introduce : function(pet)
    {
        console.log(`Hi my name is ${this.naam} and my age is ${this.age} and my pet name is ${pet}` ); 
    }
}

let p1 = {
    naam : "Shubham", 
    age : 25
}


obj.introduce()
obj.introduce.call(p1)
obj.introduce.call(p1 , "Cat")







