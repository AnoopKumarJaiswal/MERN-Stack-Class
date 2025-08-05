// class Human{
//     constructor(n,a,hand)
//     {
//         this.name = n
//         this.age = a
//         this.isHandsome = hand
//     }
// }

// let obj1 = new Human( "Anoop", 25, true)
// // console.log(obj1);


// console.log(obj1.__prototype__);








// let arr = [2,7,11,15]
// target = 9
// let map = new Map()
// for(let i = 0; i < arr.length; i++)
// {
//     map.set(arr[i], i)
// }
// console.log(map);



// for(let i = 0; i < arr.length; i++)
// {
//     if(map.has(target - arr[i]) && i != map.get(target - arr[i]))
//     {
//         console.log([i , map.get(target - arr[i])]);
//         break
//     }
// }


 

// const inputBar = document.getElementById("input")

// function inputHandler(e)
// {
//     console.log("API called For :" + e.target.value);
    
// }


// function debounce(fn , timer)
// {
//     let timeoutId = null
//     return (e) => {
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout(() =>{
//            fn(e)
//         }, timer)
//     }
// }
// const debouncedInputHandler = debounce(inputHandler, 500)


// inputBar.addEventListener("input" , debouncedInputHandler)




// if( ! Array.prototype.binararySearch)
// {
//     Array.prototype.binararySearch = function (target) {
//         let arr = this

//         let i = 0
//         let j = arr.length - 1

//         while(i <= j)
//         {
//             let mid = Math.floor((i+j)/2)
             
//             if(arr[mid] == target)
//             {
//                 return mid
//             }
//             else if( arr[mid] > target)
//             {
//                 j = mid - 1
//             }
//             else
//             {
//                 i = mid + 1
//             }
//         }
//     }
// }

// let arr = [1,2,3,4,2,4,5,]

// console.log(arr.binararySearch(3));






// const inputBar = document.getElementById("input")

// function inputHandler(e)
// {
//     console.log("API Called for :" + e.target.value);
    
// }


// function debounce(fn ,timer)
// {
//     let timeoutId = null 
//     return (e) => {
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout(() => {
//             fn(e)
            
//         },timer);
//     }
// }

// const debouncedInputHandler = debounce(inputHandler , 500)


// inputBar.addEventListener("input" , debouncedInputHandler)



// if(!String.prototype.contains)
// {
//     String.prototype.contains = function(tar)
//     {
//         let str = this
//         for(let i = 0; i < str.length; i++)
//         {
//             if(str[i] == tar)
//             {
//                 return true
//             }
            
//         }
//         return -1
//     }
// }


// let str = "Anoop"
// console.log(str.contains("A"))














// class Animal{
//     constructor(n, c, l)
//     {
//         this.name = n
//         this.color = c
//         this.legs = l
//     }




//      introduce()
//     {
//         console.log(`Hello My name is ${this.name} and my color is ${this.color} i have ${this.legs} legs`);
        
//     }
// }

// let obj1 = new Animal("Elephant" , "blue" , 4)
// obj1.introduce()



// let str = "Anoop"

// console.log(str.__proto__);


// let obj = {
//     name : "Anoop"
// }


// console.log(obj.__proto__.__proto__);




// class Vehicle{
//     constructor(b,c,m,f)
//     {
//         this.brand = b
//         this.color = c
//         this.mode = m
//         this.fuel = f
//     }
// }

// class Car extends Vehicle{
//     constructor(t,bt,d,b,c,m,f )
//     {
//         super(b,c,m,f)
//         this.tyre = t
//         this.havebluetooth = bt
//         this.door = d
//     }
// }

// let car1 = new Car(4, true, true, "Hundai" , "red" , "Earth" , "Diesel")
// console.log(car1);



// class AeroPlane extends Vehicle{
//     constructor(hah,islar,com,b,c,m,f)
//     {
//         super(b,c,m,f)
//         this.haveairHos = hah
//         this.islarge = islar
//         this.iscomerical =com
//     }
// }
// let AeroPlane1 = new AeroPlane(true , true, false, "BMw" , "White" , "air" , "Zet")
// console.log(AeroPlane1);


// class Boat extends Vehicle{
//     constructor(swim, large, b,c,m,f)
//     {
//         super(b,c,m,f)
//         this.haveSwiming = swim 
//         this.islarge = large 
//     }
// }


// let boat1 = new Boat(true , false, "BMW" , "Brown" , "Water" , "Diesel")
// console.log(boat1);




// class Kuchbhi{
//     #private = 10

//     constructor(n,c)
//     {
//         this.name = n
//         this.color = c
//     }
//     getdata()
//     {
//         console.log(this.#private);
        
//     }
// }

// let kb = new Kuchbhi("Cow", "white")
// kb.getdata()




// class Animal{
//     static var  = 20
//     constructor(n,c)
//     {
//         this.name = n
//         this.color = c
//     }

//     getStatic()
//     {
//         console.log(Animal.var);
        
//     }
// }

// let animal1 = new Animal("Elephant" , "brown")
// animal1.getStatic()






// class Sum{
//     #private = 25
//     static var = 65
//     constructor(n,c)
//     {
//         this.name = n
//         this.color = c
//     }


//     getPrivateValue()
//     {
//         console.log(this.#private);
        
//     }


//     getStatic()
//     {
//         console.log(Sum.var);
        
//     }
// }
// let obj1 = new Sum("qwert", "wer")
// obj1.getPrivateValue()
// obj1.getStatic()








// let arr = [3,2,2,3]
// let val = 3
// let count = 0
// let newArr = []
// for(let item of arr)
// {
//     if(item == val)
//     {
//         count++
//         continue
//     }
//     else
//     {
//         newArr.push(item)
//     }
// }
// console.log(newArr);
// console.log(count);

// function check(str, needle) {
//     for(let i = 0; i < str.length; i++)
//     {
//         let temp = ""
//         for(let j = i; j < str.length; j++)
//         {
//             temp += str[j]
//              console.log(temp);
           
            
//             if(temp == needle)
//             {
//                 return i
//             }
//         }
        
//     }
//     return -1
// };



// console.log(check("Anoopuio" ,"Anoo"));








// let nums1 =[1,2,3,0,0,0]
// let nums2 = [2,5,6]
// let ans = []


// let i = 0
// let j = 0
// while(i < nums1.length  && j < nums2.length)
// {
//     if(nums1[i] < nums2[j] )
//     {
//         ans.push(nums1[i])
//         i++
//     }
//     else
//     {
//         ans.push(nums2[j])
//         j++
//     }
// }

// while( i < nums1.length)
// {
//     ans.push( nums1[i])
//     i++
// }
// while( j < nums2.length)
// {
//     ans.push(nums2[j])
//     j++
// }
// console.log(ans);

// let ansArray = ans.filter((item) =>{
//     return item != 0
// })

// console.log(ansArray);






// class User{
//     #password = "12345"
//     changePassword(newPassword)
//     {
//         this.#password = newPassword
//     }
// }
// let obj1 = new User()
// console.log(obj1);

// obj1.newPassword = "qwertyui"
// console.log(obj1);

// obj1.changePassword("Anoop")
// console.log(obj1);






// class Parent{
//     constructor(n, p)
//     {
//         this.name = n
//         this.prperty = p
//     }

//     greet(){
//         console.log("Namste");
        
//     }
// }


// class Chlid extends Parent{
//     constructor(n, p, c)
//     {
//         super(n,p)
//         this.bycle = c
//     }
//     greet(){
//         console.log("Hello");
        
//     }
// }

// let obj1 = new Chlid("Shubham" , 0, "Hero")
// console.log(obj1);
// obj1.greet()



// const inputBar = document.getElementById("input")


// function inputHandler(e)
// {
//     console.log("API called For :" + e.target.value);
    
// }


// function debounce(fn , timer)
// {
//     let timeoutID = null
//     return (e) => {
//         clearTimeout(timeoutID)

//         timeoutID = setTimeout(() => {
//             fn(e)
//         }, timer);
//     }
// }

// const debouncedInputHandler = debounce(inputHandler , 500)



// inputBar.addEventListener("input" , debouncedInputHandler)





// console.log("ok");







// let p1 = new Promise((resolve, reject) =>{
//     let data = true
//     let arr = [1,2,3,4,5,56,9]
    
//     if(data)
//     {
//         resolve(arr)
//     }
//     else
//     {
//         reject("Reject")
//     }
// })

// p1
// .then((d) =>{
//     console.log(d);
    
// })
// .catch(() => {

//     console.log(reject);
    
// })






// let p2 = new Promise(() =>{
//     setTimeout(() => {
        
//     }, timeout);
// })





// const button = document.getElementById("btn")
// const box = document.getElementById("dabba")


// let API = "https://hp-api.onrender.com/api/characters"
// fetch(API)
// console.log(fetch(API));

// let data = fetch(API)

// data
// .then((temp) =>{
//     let ans = temp.json()
//   return ans
   
// })
// .then((finalData) =>{
//     console.log(finalData);
    
//     for(let item of finalData)
// {

    
//     let card = document.createElement("div")
//     console.log("ok");
//     let image = document.createElement("img")
//     let name = document.createElement("h2")

 
//     card.setAttribute("id" , "card")
//     image.setAttribute("id" , "image")
//     name.setAttribute("id" , "h2")

//     name.innerText = item.name
//     image.src = item.image ||  "https://images.unsplash.com/photo-1751149784328-f75fb46c0e8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"

//     card.appendChild(image)
//     card.appendChild(name)
//     box.appendChild(card)
  
    
    
// }

    
// })





// function primeCount(arr)
// {
    
//     let count = 0
//     for( let i = 0; i < arr.length; i++)
//         {
//         isPrime = true
        
//         for( let  j = 2; j < arr[i]; j++)
//         {
//             if(arr[i] % j == 0)
//             {
//                 isPrime = false
//                 break
//             }
//         }
//         if(isPrime == true)
//         {
//             count++
//         }

//     }
    
//     return count


// }

// console.log(primeCount([2, 3, 5, 7, 11, 13, 15, 17, 20]));




// let obj1 = new Promise((resolve, rejecte) => {
//     let data = false 
//     if(data)
//     {
//         resolve("done")
//     }
//     else
//     {
//         console.log("Unsolved")
//     }
// })


// console.log(obj1)






