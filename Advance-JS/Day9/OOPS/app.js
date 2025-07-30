// class User {
//     #password
//     constructor ( un ,pass)
//     {
//         this.username = un 
//         this.#password = pass
//     }

//     changePassword(newPassword)
//     {
//         if ( newPassword == "" || newPassword.length < 8)
//         {
//             alert(" Password cannot be Empty / lesser than 8 character")
//             return
//         }
//         this.#password = newPassword
//     }
// }


// let user1 = new User("Anoop" , "wertyui")
// console.log(user1);
//  user1.changePassword("asdfghj123")
// //  user1.#password = 123456
// console.log(user1);



// class Parent {
//     constructor(n,p)
//     {
//         this.name = n
//         this.property = p
//     }
//     greet()
//     {
//         console.log("Namste");
        
//     }
// }


// class Child extends Parent{
//     constructor(n,p,c)
//     {
//         super(n,p,c)
//         this.cycle = c
//     }

//     greet()
//     {
//         console.log("Hello");
        
//     }
// }


// let child1 = new Child ("Suresh" , 0 , "Unicycle")
// console.log(child1);
// child1.greet()




// class Person {
//     constructor(n,a)
//     {
//         this.name = n
//         this.age = a
//     }

//     greet()
//     {
//         console.log("Hello how are you");
        
//     }

//     greet(name)
//     {
//         console.log(`Hello ${name} , how are you doing ??`);
        
//     }
// }


// let p1 = new Person ("Shubham" , 21)
// p1.greet("Akash")
// p1.greet()





// class User{
//     #password
//     constructor(un, p)
//     {
//         this.username = un
//         this.#password = p
//     }

//     changePassword(newPassword)
//     {
//         if(newPassword == "" || newPassword.length < 8)
//             {
//                 alert("Password can not Empty / should be 8")
//                 return
//             }  
//             this.#password = newPassword
//     }
// }

// let user1 = new User("Name" ,"qwertyui")
// console.log(user1)

// user1.changePassword ("ashjk")
// console.log(user1);







// class Parent {
//     constructor(n,p)
//     {
//         this.name = n
//         this.property =  p
//     }
//     greet()
//     {
//         console.log("Namaste");
        
//     }
// }


// class Child extends Parent{

//     constructor(n,p,c)
//     {
//         super(n,p,c)
//         this.cycle = c 
//     }
//     greet()
//     {
//         console.log("Hi")
//     }
// }


// let child1 = new Child("Mukesh" , 0 , "Hero")
// console.log(child1);
// child1.greet()





// class User{
     

//     constructor(n,ag)
//     {
//         this.name = n
//         this.age = ag
//     }


//     greet()
//     {
//         console.log("OK")
//     }


//     greet(name)
//     {
//         console.log(`hello ${name} how are you`)
//     }
// }

// let user1 =  new User("Anoop" , 25)
// console.log(user1);
// user1.greet("Anoop")
// user1.greet()



// function 