// let age = Number(prompt("Enter Your Age"))

// if( age > 0 && age <= 13)
// {
//     console.log("kids");
    
// }
// else if(  age > 13 && age <= 21)
// {
//     console.log("Teenager");
    
// }
// else if ( age > 21 && age <= 64)
// {
//     console.log("Adult");
    
// }
// else if( age > 64 )
// {
//     console.log("Seneir Citizen");
    
// }
// else{
//     console.log("Invalid age");
    
// }




// let number = prompt( "Enter Number")

// if ( number >= 0)
// {
//     if ( number % 2 == 0)
//     {
//         console.log("Possitive Evem");
        
//     }
//     else
//     {
//         console.log("Possitive odd");
        
//     }
// }
// else
// {
//     if ( number % 2 == 0)
//     {
//         console.log("Negative Even");
        
//     }
//     else
//     {
//         console.log("Negative Odd");
        
//     }
// }



// let num1 = Number(prompt( "Enter Num 1"))
// let num2 = Number(prompt("Enter Num2"))
// let op =  prompt("ENter operator")

// if ( op = "+")
// {
//     console.log(num1 + num2);
    
// }
// else if ( op = "-")
// {
//     console.log(num1 - num2);
    
// }
// else if ( op = "*")
// {
//     console.log(num1 * num2);
    
// }
// else if ( op = "/")
// {
//     console.log(num1 / num2);
    
// }


// let age = Number(prompt("Enter Your Age"))
// age > 0 && age <= 13 ? console.log("Kids"):
// age > 13 && age <= 21 ?  console.log("Teenager"):
// age > 21 && age <= 64 ?  console.log("Adult"):
// age > 64 ? console.log("senior Citizen") : console.log("Invalid age")
  




// let number = Number(prompt( "Enter Number"))


// number >= 0 ? (number % 2 == 0 ? console.log("Possitive Even") : console.log("Possitive Odd")) :
// number < 0 ? ( number % 2 == 0 ? console.log("Negative Even"): console.log("Negative Odd")):
// console.log("Invalid Number")





// let month = prompt("Enter Month Number")
//  switch (true)
//  {
//     case( month == 1 ||  month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) :
//     console.log("31");
//     break

//     case ( month == 4 || month == 6 || month == 9 || month == 11 ):
//         console.log("30");
//         break

//       case ( month == 2):
//         console.log("28");
//         break

//         default :
//         console.log("Invalid Month");
    
    
//  }


// let arr1 = [1,2,3,4,5,65, 88 ,90]
// let arr2 = [34,56,78,99,203,500]

// let ans = []
// let i = 0
// let j = 0
// while( i < arr1.length && j < arr2.length)
// {
//     if (arr1[i] < arr2[j])
//     {
//         ans.push(arr1[i])
//         i++
//     }
//     else 
//     {
//         ans.push(arr2[j])
//         j++
//     }
// }
// if( i < arr1.length )
// {
//     for ( let k = i; k < arr1.length; k ++)
//     {
//         ans.push(arr1[k])
//     }
// }
// else if ( j < arr2.length)
// {
//     for ( let k = 0 ; k < arr2.length; k++)
//     {
//         ans.push(arr2[k])
//     }
// }
// console.log(ans);


// let n = 4
// let row = n
// let col = n
// for ( let i = 0; i < row ; i++)
// {
//     let str = ""
//     for ( let j = 0; j < col ; j++)
//     {
//         str += "*" + " "
//     }
//     console.log(str);

// }


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let isSwappingDone = false
// for ( let i = 0; i < arr.length-1; i++)
// {
//     for(let j = 0; j < arr.length-1-i; j++)
//     {
//         if (arr[j] > arr[j+1])
//         {
//             isSwappingDone = true
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
//     if(isSwappingDone == false)
//     {
//         break
//     }
// }
// console.log(arr);



// let arr = [1,43,2,56,99,-1,0,-43]
// for ( let i = 0; i < arr.length - 1; i++)
// {
//     let minIdx = i
//     for (let j = i; j < arr.length; j++)
//     {
//         if (arr[j] < arr[minIdx])
//         {
//             minIdx = j
//         }
//     }
    
//     let temp = arr[i]
//     arr[i] = arr[minIdx]
//     arr[minIdx] = temp

// }
// console.log(arr);

// let arr = [1,43,3,67,8,0,-1,45,78,-45]
// for(let i = 0; i < arr.length; i++)
// {
//     for (let j = i+1; j > 0; j--)
//     {
//         if ( arr[j-1] > arr[j])
//         {
//             let temp = arr[j-1]
//             arr[j-1] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);



// let arr = [1,34,2,56,7,89,10,-43,-1,]
// let maxNumber = arr[0]

// for ( let i = 0; i < arr.length; i++)
// {
//     if (arr[i] > maxNumber)
//     {
//         maxNumber = arr[i]
//     }
    
// }
// console.log(maxNumber);


// let arr = [1,32,-53,90,78,0,-23,-43]
// let minIdx = 0
// for ( let i = 0; i< arr.length; i++)
// {
//     if(arr[i] < arr[minIdx])
//     {
//         minIdx = i
//     }
// }
// console.log(minIdx);


// let arr = [1,43,65,78,34,23,-43]
// let minnumber = arr[0]
// let secNumber = arr[1]
// for ( let i = 0; i < arr.length ; i++)
// {
//     if ( arr[i] < minnumber)
//     {
//         secNumber = minnumber
//         minnumber = arr[i]
//     }
//     if ( arr[i] < secNumber && arr[i] > minnumber )
//     {
//         secNumber = arr[i]
//     }
// }
// console.log(secNumber);
// console.log(minnumber);



// let arr = [1,2,113,4,5,116,7,8,94,52]
// let maxIdx = 0
// let secMaxIdx = 1
// for ( let i = 0; i < arr.length; i++)
// {
//     if (arr[i] > arr[maxIdx])
//     {
//         secMaxIdx = maxIdx
//         maxIdx = i
//     }
//     else if ( arr[i] > arr[secMaxIdx] && arr[i] < arr[maxIdx])
//     {
//         secMaxIdx = i
//     }
// }
// console.log(maxIdx);
// console.log(secMaxIdx);


// let  arr = [1,3,2,5,5,22,4,2,45,67,8,9]
// let x = 4
// isXpresent = false
// for ( let i = 0; i < arr.length; i++)
// {
//     if ( arr[i] == x)
//     {
//         isXpresent = true
//         console.log(i);
//         break
        
//     }
// }
// if(isXpresent == false)
// {
//     console.log(-1);
    
// }


// let arr = [1,34,56,78,98,123,200,700]
// let x = 7000
// let s = 0
// let e = arr.length-1
// while( s <= e )
// {
//     let mid = Math.floor((s+e)/2)
//     if ( arr[mid] == x)
//     {
//         console.log(mid);
//         break
        
//     }
//     else if ( arr[mid] > x)
//     {
//         e = mid - 1
//     }
//     else if( arr[mid] < x)
//     {
//         s = mid + 1
//     }
// }
// if (  s > e)
// {
//     console.log(-1);
    
// }



// let s = 0 
// let e = arr.length 
// x = 400
//  while( s <= e)
// {
//     let mid = Math.floor((s+e)/2)
//     if ( arr[mid] == x)
//     {
//         console.log(mid);
//         break
//     }
//     else if ( arr[mid] > x)
//     {
//         e = mid - 1
//     }
//     else if(arr[mid] < x)
//     {
//         s = mid + 1
//     }
// }
// if ( s > e)
// {
//     console.log(-1);
    
// }


// let arr = [[1,2,3],[3,4,5],[6,7,8]]
// for ( let i = 0; i < arr.length; i++)
// {
//     let str = ""
//     for ( let j = 0; j < arr[i].length; j++)
//     {
//         str += arr[i][j] + " "
//     }
//     console.log(str);
    
// }


// let x = 7
// isxPresent = false
// for ( let i = 0; i < arr.length; i ++)
// {
//     for (let j = 0; j < arr[i].length; j++)
//     {
//         if ( arr[i][j] == x)
//         {
//             isxPresent = true
//             console.log(i, j);
//             break
            
//         }
//     }
// }
// if (isxPresent == false)
// {
//     console.log(-1);
    
// }


// let arr = [1,2,3,4,5,6]
// let str = ""
// for ( let i = 0; i < arr.length; i++)
// {
//        let sum = 0
//     for ( let j = 0; j < arr.length; j++)
//     {
//         sum += arr[j]
        
//     }
//     str += sum - arr[i] +" "
    
// }
// console.log(str);


// let obj = {
//     name : "anoop" ,
//     age : 24,
//     isHandsome: true
// }



// for ( let item in obj)
// {
//     console.log(obj[item]);
    
// }



// function testing( name, age)
// {
//     console.log(`my name is ${name} and my age is ${age}`);
//     return console.log("Done");
    
    
// }
// testing("Anoop", 24)
// testing("Mukesh", 25)

// function fact(n)
// {
//     if ( n == 0 )
//     {
//         return 1
//     }
 
//     return n * fact(n-1)
// }

// let ans = fact(6)
// console.log(ans);


// function sum (n)
// {
//     if ( n == 0)
//     {
//         return n
//     }
//         let lastDIgit = n%10 
//         console.log(lastDIgit);
//         sum( Math.floor(n/10))   
// }
// sum(69876543)



// function solve( n)
// {
//     if ( n == 0)
//     {
//         return
//     }
//     solve(n-1)
//     console.log("* " .repeat(n));
    
// }
// solve (5)


// function fact ( n)
// {
//     if ( n == 0)
//     {
//         return 1
//     }
     
//     return n * fact( n - 1)
// }
// let ans = fact(5)
// console.log(ans);




// function printNumber(n)
// {
//     if ( n <= 0)
//     {
//         return 
//     }

//     console.log(n);
//     printNumber(n - 1)
    
// }
// printNumber (10)




// 


// function mergerSortedArry(arr1, arr2)
// {
//     let res = []
//     let i = 0;
//     let j = 0
//      while ( i < arr1.length && j < arr2.length)
//      {
//         if (arr1[i] < arr2[j])
//         {
//             res.push( arr1[i])
//             i++
//         }
//         else 
//         {
//             res.push( arr2[j])
//             j++
//         }
//      }
//      while( i < arr1.length)
//      {
//         res.push(arr1[i])1
//         i++
//      }
//      while ( j < arr2.length)
//      {
//         res.push(arr2[j])
//         j++
//      }
//      return res

// }


// function mergeSoted( arr)
// {
//     if ( arr.length == 1)
//     {
//         return arr
//     }

//     let mid = Math.floor((0+arr.length)/2)
//     let left = mergeSoted( arr.slice(0, mid))
//     let right = mergeSoted(arr.slice(mid))
//     return mergerSortedArry(left, right)
// }
// let ans = mergeSoted([1,43,2,-1,0,45,87,-43])
// console.log(ans);



// function quickSorted(arr)
// {
//     if ( arr.length <= 0)
//     {
//         return  arr
//     }


//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
    
//     for ( let i = 0; i < arr.length-1; i++)
//     {
//         if ( arr[i] < pivot)
//         {
//             left.push(arr[i])
//         }
//         else 
//         {
//             right.push(arr[i])
//         }
//     }

//     let leftSorted = quickSorted(left)
//     let rightSorted = quickSorted(right)

//     let res = []
//     for ( let item of leftSorted)
//     {
//         res.push(item)
//     }
//     res.push (pivot)
     
//     for ( let item of rightSorted)
//     {
//         res.push(item)
//     }
//     return res
// }
// let ans = quickSorted([1,3,2,5,3,-56,98,56,0,23])
// console.log(ans);



// let arr = [1,2,3,454,2,45,-12,0,2]
// arr.sort((a,b) => {
//     return a-b
// })
// console.log(arr);



// let arr = [1,2,3,4,2,34,5,56,4,34,1,3,56,34,4,3,1]
// let obj = {}

// for( let item of arr)
// {
//     if (obj[item])
//     {
//         obj[item] = obj[item] + 1
//     }
//     else 
//     {
//         obj[item] = 1
//     }
// }

// console.log(obj);


// let obj = {
//     1:2,
//     3:4,
//     5:6,
//     2:5

// }
// for ( let item in obj)
// {
//     console.log(obj[item])
// }


// function fibo(n)
// {
//     if ( n == 1)
//     {
//         return 0
//     }
//     else if (n == 2)
//     {
//         return 1
//     }
//     return fibo(n-1) + fibo(n-2)
// }

// let ans = fibo(5)
// console.log(ans);



// let arr = [1,3,4,5,7,4,3]

// let ans  = []
// for ( let i = 0; i < arr.length ; i++)
// {
//     let sum = 0
//     for ( let j = 0; j < arr.length; j++)
//     {
//         sum += arr[j]
//     }
//     ans.push((sum-arr[i]))

// }

// console.log(ans);


// function nTime(n)
// {
//     if ( n < 1)
//     {
//         return
//     }

//     console.log("AccioJob");
//     nTime(n-1)
    
// }
// nTime(5)


// function fact(n , x){
//     if ( x == 0)
//     {
//         return 1
//     }

//     return n * fact( n , x-1 )
// }
// let ans = fact(2, 3)
// console.log(ans);


// function multi( n , x)
// {
//     if ( x < 1)
//     {
//         return 0
//     }

//     return n + multi( n, x-1)
    
// }
// let ans =  multi(10 ,13)
// console.log(ans);


// function revers(n)
// {
//     if ( n == 0)
//     {
//         return 
//     }

//     console.log(n);
//     revers(n-1)
    
// }
// revers (10)


// function decInc(n)
// {
//     if ( n == 0)
//     {
//         return
//     }
//      console.log(n);
//      decInc(n-1)
//      console.log(n);
// }
// decInc(10)


// function sum( n )
// {
//     if ( n < 1)
//     {
//         return 0
//     }
//     return n + sum(n-1)
// }
// let ans = sum(10)
// console.log(ans);


// function number(n)
// {
//     if ( n == 0)
//     {
//         return n
//     }

//     let count = 0
//     if ( n != 0)
//     {
//         count++
//     }

//     return count + number(Math.floor(n/10))
// }
// let ans = number(123456789567890)
// console.log(ans);



// function number( n , x)
// {
//     if ( n <= 0)
//     {
//         return n
//     }

//     let count = 0
//     let lastDIgit = n % 10
//     if ( lastDIgit == 7)
//     {
//         count++
//     }
//     return count + number(Math.floor(n/10))
// }
// let ans = number(27727, 7)
// console.log(ans);


// function sum(n)
// {
//     if ( n <= 0)
//     {
//        return n
//     }
//      let num = 0
//      let lastDIgit = n%10
//      if ( n != 0)
//      {
//         num += lastDIgit
//      }
//      return lastDIgit + sum(Math.floor(n/10))
// }
// let ans = sum(123456)
// console.log(ans);







// let num = 1331
// let realNum = num
// let res = ""
//  while ( num > 0)
//  {
//    let lastDIgit = num % 10
//    res += lastDIgit
//    num = Math.floor(num/ 10)

//  }

//  if ( res == realNum)
//  {
//    console.log("palindrome");
   
//  }
//  else
//  {
//    console.log("Not a palindrome Number");
   
//  }



// let num = 11
// let isPrimeNumber = true

// for ( let i = 2; i < num; i++)
// {
//    if ( num % i == 0)
//    {
//       isPrimeNumber = false
//       console.log(`${num} is not a prime number`);
//       break   
//    }
// }
// if(isPrimeNumber == true)
// {
//    console.log(`${num} is a prime number`);
   

// }


// let arr = [1,2,3,4,5,6,7,7]

// let i = 0
// let j = arr.length-1

// while( i <= j)
// {
//    let temp = arr[i]
//    arr[i] = arr[j]
//    arr[j] = temp

//    i++
//    j--
// }
// console.log(arr);

// let i = arr.length-1
// let ans = []
//  while (  i >= 0)
//  {
//    ans.push(arr[i])
//    i--
//  }
//  console.log(ans);


// let arr = [1,2,3,4,5,5,4,3]
// for ( let i = 0; i < arr.length; i++)
// {
//    let temp = []
//    for ( let j = i; j < arr.length; j++)
//    {
//       temp.push(arr[j])
//       console.log(temp);
      
//    }
// }
 

// let arr = [4, 5, 0, -2, -3, 1]
// let count = 0
// for ( let i = 0; i < arr.length; i++)
// {
//    let temp = []
//    for ( let j = i; j < arr.length; j++)
//    {
//       temp.push(arr[j])
   
//    let sum = 0
//    for ( let item of temp)
//    {
//       sum += item
//    }
//    if( sum % 5 == 0)
//    {
//       count++
//    }
//    }
// }
// console.log(count);



// for ( let i = 0; i < arr.length; i++)
// {
//    let sum = 0
//    for(let j = i; j < arr.length; j++)
//    {
//       sum += arr[j]
//       if(sum % 5 == 0)
//       {
//          count++
//       }
//    }
// }
// console.log(count);



// let arr = [1,5,3,4,2]
// let count = 0
// let k = 2
// for ( let i = 0; i < arr.length-1; i++)
// {
//    for ( let j = i+1; j < arr.length; j++ )
//    {
//       if ( arr[i] > arr[j]  && arr[i] - arr[j] == k)
//       {
//          count++
//       }
//       else if ( arr[j] > arr[i] && arr[j] - arr[i] == k)
//       {
//          count++
//       }
//    }
// }
// console.log(count);



// let arr1 = [1,2,10]
// let arr2 = [3,4,1]
// let sum1 = 0
// let sum2 = 0
// for ( let item of arr1)
// {
//    sum1 += item
// }
// for ( let item of arr2)
// {
//    sum2 += item
// }

// if( sum1 > sum2)
// {
//    console.log("arr1 is larger");
   
// }
// else if( sum2 > sum1)
// {
//    console.log("arr2 is larger");
   
// }
// else
// {
//    console.log("both are equal");
   
// }


// let arr = [4,6,4]
// let k = 10
// let count = 0
// let sum = 0
// let maxNumber = arr[0]
// for ( let i = 0; i < arr.length; i++)
// {
//    sum += arr[i]
//    if ( arr[i] > maxNumber)
//    {
//       maxNumber = arr[i]
//    }

// }
// let avg = Math.floor(sum/arr.length)
// console.log(`${sum}, ${maxNumber}, ${avg}`);



// for ( let item of arr)
// {
//    if(item > k)
//    {
//       count++
//    }
// }
// console.log(count);


// for ( let i = 0; i



// for (let i = 0; i < arr.length - 1; i++)
// {
//    if ( arr[i] + arr[i+1] == k)
//    {
//       count++
//    }
// }
// console.log(count);



// let arr = [1,2,3,43,2,3,,5,5,4,1,3,2,3]
// let ans = 9999999999
// for( let i = 0; i < arr.length-1; i++)
// {
//    for (let j = i+1; j < arr.length; j++)
//    {
//       if ( arr[i] % 2 == 0 && arr[j] %  2 == 0 && arr[i] > 0 && arr[j] >0)
//       {
//          ans = Math.min( j - i, ans)
//       }
//    }
// }
// if ( ans == 999999999)
// {
//    console.log(-1);  
// }
// else
// {
//    console.log(ans);
   
// }



// let arr = [-4, 3, -9, -5, 4, 1]
// let negativeCount = 0
// let PossitiveCount = 0
// let zeroCount = 0

// for ( let item of arr)
// {
//    if(item > 0)
//    {
//       PossitiveCount++
//    }
//    else if ( item < 0)
//    {
//       negativeCount++
//    }
//    else if( item == 0)
//    {
//       zeroCount++
//    }
// }
// console.log((negativeCount/arr.length).toFixed(6))
// console.log((PossitiveCount/arr.length).toFixed(6))
// console.log((zeroCount/arr.length).toFixed(6))
 

// let maxNumber = arr[0]
// secNumber = arr[1]

// for( let i = 0; i < arr.length; i++)
// {
//    if ( arr[i] > maxNumber)
//    {
//       secNumber = maxNumber
//       maxNumber = arr[i]
//    }
//    else if( arr[i] > secNumber && arr[i] < maxNumber)
//    {
//       secNumber = arr[i]
//    }
// }
// console.log(`${maxNumber}  ${secNumber}`);


// let arr = [1,2,3,4]
// let largeIdx = 0
// let secLargeIdx = 1
// for ( let i = 0; i < arr.length; i++)
// {
//    if ( arr [i] > arr[largeIdx])
//    {
//       secLargeIdx = largeIdx
//       largeIdx = i
//    }

// }
// if ( 2* arr[secLargeIdx] > arr[largeIdx])
// {
//    console.log(-1);
   
// }
// else if ( 2*arr[secLargeIdx] <= arr[largeIdx])
// {
//    console.log(largeIdx);
   
// }


// let arr = [[1,2],[2,3]]
// let str = ""
// for ( let i = 0; i < arr.length; i++)
// {
//    if( i % 2 == 0)
//    {
//       for ( let j = 0; j < arr[i].length; j++)
//       {
//          str += (arr[i][j]) +" "      
//       }
//    }
//    else
//    {
//       for ( let j = arr[i].length - 1; j >= 0; j--)
//       {
//          str += (arr[i][j]) +" "
         
//       }
//    }
// }
// console.log(str);



// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// let m = arr.length
// let n = arr[0].length

// let srow = 0
// let erow = m - 1
// let scol = 0
// let ecol = n - 1

// while( srow <= erow && scol <= ecol)
// {
//    // top
//    for ( let j = scol ; j <= ecol; j++)
//    {
//       console.log(arr[srow][j]);
      
//    }
   
//    //right

//    for ( let i = srow + 1; i <= erow; i++)
//    {
//       console.log(arr[i][ecol]);
      
//    }

//    // bottom

//    for ( let j = ecol - 1; j >= scol; j--)
//    {
//       if(srow == erow)
//       {
//          break
//       }

      
//       console.log(arr[erow][j]);
      
//    }


//    //left
//    for ( let i = erow -1; i >= srow + 1; i--)
//    {
//       if (scol == ecol)
//       {

//          break
//       }
//       console.log(arr[i][scol]);
      
//    }
//    scol++
//    ecol--
//    srow++
//    erow--
// }


// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// let m = arr.length 
// let n = arr[0].length
// let srow = 0
// let erow = m-1
// let scol = 0
// let ecol = n-1
// while (  srow <= erow && scol <= ecol)
// {
//    //  for top 
//    for ( j = scol; j <= ecol; j++)
//    {
//       console.log(arr[srow][j]);
      
//    }
//    // right 

//    for ( let i = srow + 1; i <= erow; i++)
//    {
//       console.log(arr[i][ecol]);
      
//    }

//    // bottom

//    for ( let j = ecol - 1; j >= scol; j--)
//    {
//       if ( srow == erow)
//       {
//          break
//       }
//       console.log(arr[erow][j]);
      
//    }
   

//    // left 
//     for ( let i = erow - 1; i >= srow + 1; i--)
//     {
//       if ( scol == ecol)
//       {
//          break
//       }
//       console.log(arr[i][scol]);
      
//     }

//     srow++
//     erow--
//     scol++
//     ecol--
// }


// let arr = [1,2,3,4,3,7,45,3,3,2,]
// let ans = 9999999999

// for(let i = 0; i < arr.length - 1; i++)
// {
//    for( let j = i + 1; j < arr.length; j++)
//    {
//       if(arr[i] % 2 == 0 && arr[j] % 2 == 0 )
//       {
//          ans = Math.min( j - i , ans)
//       }
//    }
// }
// if ( ans == 999999999)
// {
//    console.log(-1);
   
// }
// else
// {
//    console.log(ans);
   
// }


// // let obj = {
// //    name : "Anoop",
// //    age : 24, 
// //    rollNumber : 456
// // }
// // isXPresent = false
// // for ( let item in obj )
// // {
// //    if ( item == "name")
// //    {
// //       isXPresent = true
// //       console.log(true);    
// //    }
// // }
// // if ( isXPresent == false)
// {
//    console.log(false);
   
// }




// function rvStr(str , idx)
// {
//    if( idx >= str.length)
//    {
//       return ""
//    }
//    return rvStr(str, idx + 1) + str[idx]
// }


// function revstr( str, idx)
// {
//    if ( idx >= str.length)
//    {
//       return ""
//    }
//    return revstr( str , idx + 1) + str[idx]

// }
// let ans = revstr( "qwertyu" , 0)
// console.log(ans);



// let arr = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     libraryID: 1254
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     libraryID: 4264
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245
//   }
// ]

// for ( let item of arr)
// {
//    console.log(item.title ,item.author, item.libraryID);
   
// }

// let arr = [1,2,3,0,-3,5]
// arr.sort((a,b) =>{
//    return a-b
// })
// console.log(arr);

// function fun( n)
// {
//     for ( let i = 0; i < 5; i++)
//     {
//       n++
//     }
//     return n
// }
// console.log(fun(5));



// function fun()
// {
//    console.log("i am another function");
   
// }
// fun()


// function fun(name)
// {
//    return `${name} is super Hero`

// }
// console.log(fun("accio"));




// let nums = [-2,1,-3,4,-1,2,1,-5,4]
// let tem= []
// let maxSum = -Infinity
// for ( let i = 0; i < arr.length; i++)
// {
//    let sum = 0
//    for ( let j = i; j < arr.length; j++)
//    {
//       sum += arr[j]
//       maxSum = Math.max(sum , maxSum)
//    }
// }
// console.log(maxSum);
// let maxNumber =tem[0]
// for ( let i = 0; i < tem.length; i++)
// {
//    if ( tem[i] > maxNumber)
//    {
//       maxNumber = tem[i]
//    }
// }
// console.log(maxNumber);

// let curSum = 0
// let maxSum = -Infinity
// for ( let i = 0; i < arr.length; i++)
// {
//    curSum += arr[i]
//    maxSum = Math.max( curSum , maxSum)
//    if ( curSum < 0)
//    {
//       curSum = 0
//    }
// }
// console.log(maxSum);


// let nums = [2,0,2,1,1,0]


// for(let i = 0; i < nums.length - 1; i++)
//     {
//         for ( let j = 0; j < nums.length - 1; j++)
//         {
//             if ( nums[j] > nums[j+1] )
//             {
//                 let temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//             }
//         }
//     }
//     console.log(nums);
    
    

// let str = "qwertyuqwerty"
// let count = 0
// for ( let i = 0; i < str.length; i++)
// {

//    if ( str[i] == "q")
//    {
//       count++
//    }
// }
// console.log(count);




// function checkSymmArry( arr)
// {
//     for ( let i = 0; i < arr.length; i++)
//     {
//         for ( let j = 0; j < arr[i].length; j++)
//         {
//             if ( arr[i][j] != arr[j][i])
//             {
//                return  false
//             }
//         }
//     }
//     return true
// }
// console.log(checkSymmArry([[1,2,3],[2,4,5], [3,5,6]]));





// function checkSymmArray(arr)
// {
//     for ( let i = 0; i < arr.length; i++)
//     {
//         for( let j = 0; j < arr[i].length; j++)
//         {
//             if ( arr[i][j] != arr[j][i])
//             {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(checkSymmArray([2,3,6],[3,4,5],[6,5,9]));




 

// function isSymmetric(arr)
// {
//     for ( let i = 0; i < arr.length; i++)
//     {
//         for ( let j = 0; j < arr[i].length; j++)
//         {
//             if(arr[i][j] != arr[j][i])
//             {
//                 return false
//             }

//         }
//     }
//     return true
// }

// console.log(isSymmetric([[2,1,6],[1,0,5],[6,5,9]]));


// function fibo(n)
// {
//     if ( n == 0)
//     {
//         return 0
//     }
//     if ( n == 1)
//     {
//         return 1
//     }


//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(7));



// function revStr(str , idx)
// {
//     if (idx >= str.length)
//     {
//         return ""
//     }

//     return revStr(str, idx + 1) + str[idx]

// }
// console.log(revStr("AnoopKumarJaiswl",0));



// let str = "AnoopKumarJaiswal"
// let ans =  ""
// for ( let i = str.length - 1 ; i >= 0; i--)
// {
//    ans += (str[i])   
// }
// console.log(ans);




// let n = 0
// let m = 500
// for ( let i = n; i <= m; i++)
// {
//     let currNum = String(i)
//     let power = currNum.length
//     let sum = 0
//     for ( let j =0 ; j < currNum.length; j++)
//     {
//         sum += currNum[j]**power
//     }
//     if( sum == currNum)
//     {
//         console.log(sum);
        
//     }
// }


// let n = 0
// let m = 160
// for( let i = n; i <= m; i++)
// {
//     let curNum = String(i)
//     let power = curNum.length
//     let sum = 0
//     for ( let j = 0 ; j < curNum.length; j++)
//     {
//         sum += curNum[j]**power
//     }
//     if ( sum == curNum)
//     {
//         console.log(sum);
        
//     }
// }



// let num = 1717
// let orginalNum = num
// let ans = ""
// while( num > 0)
// {
//     let lastDIgit = num % 10
//     ans += lastDIgit
//     num = Math.floor(num/10)
    
// }
// if( Number(ans) == orginalNum)
// {
//     console.log("Palindrome");   
// }
// else
// {
//     console.log("Not a Palindrome");
    
// }


// let n = 121
// for ( let i = 1; i <= n; i++)
// {
//     let curNum = i
//     originNum = i
//     let ans = ""
//     while ( curNum > 0)
//     {
//         let lastDIgit = curNum % 10
//         ans += lastDIgit
//         curNum = Math.floor(curNum / 10)
//     }
//     if ( ans == originNum)
//     {
//         console.log(ans);
        
//     }
 
// }



// let num = 123

// let curNum = String(num)
// let sum = 0
// let power = curNum.length
// for ( let i = 0; i < curNum.length; i++)
// {
//     sum += curNum[i]**power
// }
// if(sum == num)
// {
//     console.log(true);
    
// }
// else
// {
//     console.log(false);
    
// }




// let  n = 4
// let row = n
// let col = n
// for ( let i = 1; i <= row; i++)
// {
//        let str = ""
//     for ( let j = 1; j <= col; j++)
//     {
//         str += "*" +" "
//     }
//     console.log(str);
    
// }

// let n = 4
// let row = n
// let stars = 1
// let space = n - 1
// for ( let i = 1; i <= n; i++)
// {
//     let str = ""
    
//     for ( let j = 1; j <= space; j++)
//        {
//          str += "  "
//        }
//         for ( let j = 1; j <= stars; j++)
//        {
//          str += "*"+" "
//        }
//        space--
//        stars++

//        console.log(str);
       
        
// }



// let n = 4
// let row = 4
// let star = n
// let space = 0
// for ( let i = 1; i <= row; i++)
// {
//     let str = " "
//     for ( let k = 1; k <= space; k++)
//     {
//            str += "  "
//     }
//     for ( let j = 1; j <= star; j++)
//     {
//         str += "* "
//     }
    

//     star--
//     space++
//     console.log(str);
    
// }



// let n = 5
// let star = 1
// let space = Math.floor(n/2)
// for ( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for (let j = 1; j <=space; j++ )
//     {
//         str += "  "
//     }
//     for (let j = 1; j <= star; j++)
//     {
//         str += "* "
//     }
//     if ( i < n/2)
//     {
//         star+=2
//         space--
//     }
//     else
//     {
//         star-= 2
//         space++
//     }
//     console.log(str);
    
// }

   


// let n = 14
// let star = Math.floor(n/2)
// let space = 0
// for ( let i = 1; i <= n; i++ )
// {
//     let str = ""
//     for ( let j = 1; j <=space; j++)
//     {
//         str += " "
//     }
//     for ( let k = 1; k <= star; k++)
//     {
//         str += "* "
//     }
//     if ( i <Math.floor( n/2))
//     {
//         space++
//         star--
//     }
//     else
//     {
//         star++
//         space--
//     }
//     console.log(str);
    
// }


// let n = 9
// let space = 2*n - 1
// let star = 1
// let rows = 2*n + 1
// for(let i = 1; i <= 2*n + 1; i++)
// {
//     let str = ""
//     for ( let j = 1; j <= star ; j++)
//     {    
//         if ( i == n+1 && j == star)
//         {
//             break
//         }
//           str += "* "
//     }
//     for ( let k = 1; k <= space; k++)
//     {
//         str += "  "
//     }
//     for ( let j = 1; j <= star ; j++)
//     {
        
//           str += "* "
//     }
//     if( i < rows/2)
//     {
        
//         space-=2
//         star++
//     }
//     else
//     {
//         space+=2
//         star--
//     }
//     console.log(str);
    
// }



// let n = 4
// let space = n - 1
// let star = 1
// for ( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for ( let j = 1; j <= space; j++)
//     {
//         str += "  "
//     }
//     space--
//     for ( let k = 1; k <= star; k++)
//     {
//         str += "* "
//     }
//     star+=2
//     console.log(str);
    
// }

// let n = 4 
// let space =  n-1
// let star = 1
// for ( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for (let j = 1 ; j <= space; j++)
//     {
//           str += " "
//     }
//     for ( let j = 1; j <=star; j++)
//     {
//         str += "*"
//     }
    
//     space--
//     console.log(str);
    
// }


// let n = 4
// let alpha = 64
// for ( let i = 1; i <= n; i++)
// {
//     str = ""
//     for( let j = 1; j <= i; j++)
//     {
//         str += String.fromCharCode(alpha+j)
//     }
//     console.log(str);
    
// }


// let arr = [1,2,3,4,5,6,7]
// for ( let i = 0; i < arr.length;i++)
// {
//     let temp = []
//     for ( let j = i; j < arr.length; j++)
//     {
//         temp.push(arr[j])
//         console.log(temp);
        
//     }
// }

// function checkSymmArray(arr)
// {
//     for ( let i = 0; i < arr.length; i++)
//     {
       
//         for ( let j = 0; j < arr[i].length; j++)
//         {
//             if(arr[i][j] != arr[j][i])
//             {
//                 return false
//             }
//         }
//     }
//     return true
// }
// let val = checkSymmArray([[1,2,3],[2,5,6],[3,6,9]])
// console.log(val);





// let str = "aab"
// let obj = {}

// for(  let i = 0; i < str.length; i++)
// {
//     if (obj[str[i]])
//     {
//        continue
//     }
//     else
//     {
//         obj[str[i]] = 1
//     }
// }
// let count = ""
// for(let item in obj)
// {
//     if(obj[item] == 1)
//     {
//         count += item
//     }
// }
// console.log(count.length-1);





// let arr = [1,4,3,2,4,5,7,0,-13]
// isSwappingDone = false
// for ( let i =0 ; i < arr.length -1; i++)
// {
//     for ( let j = 0; j < arr.length -1 - i; j++)
//     {
//         if ( arr[j] > arr[j+1])
//         { 
//             isSwappingDone = true
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
        
//     }
//      if(isSwappingDone == false)
//      {
//         break
//      }
// }
// console.log(arr);




// Slection sort 

// let arr = [1,3,2,3,45,-1,43,1]
// for ( let i = 0 ; i < arr.length - 1; i++)
// {
//    let minIdx = i
//    for ( let j = i ; j < arr.length; j++)
//    {
//     if ( arr[j] < arr[minIdx])
//     {
//         minIdx = j
//     }
//    }
//    {
//     let temp = arr[i]
//     arr[i] = arr[minIdx]
//     arr[minIdx] = temp
//    }
// }
// console.log(arr);


// let arr = [1,2,3,2,0,2,3,-544,-4]
// for ( let i = 0; i < arr.length; i++)
// {
//     for(let j = i + 1; j > 0; j-- )
//     {
//         if ( arr[j - 1] > arr[j])
//         {
//             let temp = arr[j-1]
//             arr[j - 1] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

// function sortArray(arr1,arr2)
// {
//     let i = 0
//     let j = 0
//     let res = []
//     while( i < arr1.length && j < arr2.length)
//     {
//         if( arr1[i] < arr2[j])
//         {
//             res.push(arr1[i])
//             i++
//         }
//         else
//         {
//             res.push(arr2[j])
//             j++
//         }

//     }
//     while(i < arr1.length)
//     {
//         res.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length)
//     {
//         res.push(arr2[j])
//         j++
//     }
//     return res
// }
// function mergeSortArray(arr)
// {
//     let mid = Math.floor( (0 + arr.length)/2)
//     if ( arr.length == 1)
//     {
//         return arr
//     }
    
//     let leftSortedArray = mergeSortArray(arr.slice(0,mid))
//     let rightSortedArray = mergeSortArray(arr.slice(mid))
//     return  sortArray(leftSortedArray, rightSortedArray)
// }
// let val = mergeSortArray([1,4,2,3,7,4,7,-2,0])
// console.log(val);



// function sortArray( arr1, arr2)
// {
//     let res = []
//     let i = 0 
//     let j = 0
//     while ( i < arr1.length && j < arr2.length)
//     {
//         if ( arr1[i] < arr2[j])
//         {
//             res.push(arr1[i])
//             i++
//         }
//         else
//         {
//             res.push(arr2[j])
//             j++
//         }
//     }
//     while( i < arr1.length)
//     {
//         res.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length)
//     {
//         res.push(arr2[j])
//         j++
//     }
//     return res
// }
//  function mergerSortedArry(arr)
//  {
//     if ( arr.length == 1)
//     {
//         return arr
//     }
//     let mid = Math.floor( (0 + arr.length)/ 2 )
//     let leftSortArray = mergerSortedArry(arr.slice(0, mid))
//     let rightSortedArray = mergerSortedArry(arr.slice(mid))
//     return sortArray(leftSortArray, rightSortedArray)
//  }
//  let val = mergerSortedArry([1,2,34,5,64,33,-34,0,-11])
//  console.log(val);
 


// function quickSort(arr)
// {
//     if ( arr.length <= 0)
//         {
//             return arr
//         }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for ( let i = 0; i < arr.length - 1; i++)
//     {
//         if( arr[i] > pivot)
//         {
//             right.push(arr[i])
//         }
//         else
//         {
//             left.push(arr[i])
//         }
//     }
//     let leftSorted = quickSort(left)
//     let rightSorted = quickSort(right)
//     let ans = []
//     for(let item of leftSorted)
//     {
//              ans.push(item)
//     }
//     ans.push(pivot)
//     for ( let item of rightSorted)
//     {
//         ans.push(item)
//     }
//     return ans 
// }
// let val = quickSort([1,2,4,6,0,-9,8,6])
// console.log(val);



// function quickSort(arr)
// {
//     if ( arr.length <= 0)
//     {
//         return arr
//     }
    

//     let left = []
//     let right = []
//     let pivot = arr[arr.length - 1]
//     for ( let i = 0; i < arr.length - 1; i++)
//     {
//         if(arr[i] < pivot)
//         {
//             left.push(arr[i])
//         }
//         else
//         {
//             right.push(arr[i])
//         }
//     }


//     let leftSortArray = quickSort(left)
//     let rightSortedArray = quickSort(right)
//     let ans = []
    

//     for ( let item of leftSortArray)
//     {
//          ans.push(item)   
//     }
//     ans.push(pivot)
//     for( let item of rightSortedArray)
//     {
//         ans.push(item)
//     }
//     return ans

// }
// let val = quickSort([12,3,4,2,3,5,0,-7,6])
// console.log(val);




// function isSymmetric(arr)
// {
//     for( let i = 0; i < arr.length;i++)
//     {
//         for( let j = 0; j < arr[i].length; j++)
//         {
//             if ( arr[i][j] != arr[j][i])
//             {
//                 return false
//             }
//         }
//     }
//     return true
// }
//  console.log(isSymmetric([[1,2,3],[4,5,6],[7,8,9]]))


// let arr = [[1,2,3],
//           [5,6,7]
//          ,[8,9,10]]
// let m = arr.length
// let n = arr[0].length
// let srow = 0
// let erow = m - 1
// let scol = 0
// let ecol = n - 1

// while( srow <= erow && scol <= ecol)
//     {
//         //  for top

//         for ( let j = scol ; j <= ecol; j++)
//         {
//             console.log(arr[srow][j]);
            
//         }

//         // for right

//         for ( let i = srow + 1; i <= erow; i++ )
//         {
//             console.log(arr[i][ecol])
//         }


//         // for bottom

//         for (let j = ecol - 1; j >= scol; j-- )
//         {
//             if ( srow == erow)
//             {
//                 break
//             }
//             console.log(arr[erow][j]);
            
//         }

//         // for left
//         for ( let i = erow - 1; i >= srow + 1; i--)
//         {
//             if (scol == ecol)
//             {
//                 break
//             }
//             console.log(arr[i][scol])
//         }

//         scol++
//         srow++
//         erow--
//         ecol--
//     } 





// let arr = [1,2,3,4,5,6,7,8]
// let isSum = false
// for ( let i = 0; i < arr.length; i++)
// {
//     let sum = []
//     for ( let j = i; j < arr.length; j++)
//     {

//         sum += (arr[j])
//         if( sum == 6)
//         {
//             isSum = true
//             console.log(true);
//             break
            
//         }
        
//     }
    
// }
// if ( isSum == false)
// {
//     console.log(false);
    
// }



// let  n = 4 
// let space = n-1
// let star = 1
// for ( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for ( let j = 0; j <= space; j++)
//     {
//         str += "  "
//     }
//     space--
//     for ( let k = 1 ; k <= star; k++)
//     {
//         str += "* "
//     }
//     star++
//     console.log(str);    
// }


// let arr = [1,2,3,4,5,6,78,9]
// let k = 4
// for ( let i = 0; i < arr.length; i++)
// {
//    if ( arr[i] == k)
//    {
//     console.log(i);
//     break
//    }
// }



// let arr = [[1,2,3],[5,6,7,],[67,8,9,]]
// let k = 8

// for ( let i = 0; i < arr.length; i++)
// {
//     for( j = 0; j <arr[i].length; j++)
//     {
//         if (arr[i][j] == k)
//         {
//             console.log(i, j);
            
//         }
//     }
// }

    
    // // function rotate(arr)
    // // {
    // //     for( let i = 0; i < arr.length; i++)
    // //     {
    // //         for ( let j = 0; j <arr[i].length;j++)
    // //         {
    // //             let temp = arr[i][j]
    // //             arr[i][j] = arr[j][i]
    // //             arr[j][i] = temp
    // //         }
    // //     }
    // //     console.log(arr);
        
    // }
    //  rotate([[1,2,3],[4,5,6],[7,8,9]])



//     let arr = [1,2,4,3,2,2,2,5,6,7,0]
//     let newArr =[]
//     for ( let i = 0; i < arr.length;i++)
//     {
//         if (newArr.includes(arr[i]))
//             continue

//         newArr.push(arr[i])
//     }
    
// newArr.sort((a,b) => {
//     return a-b
//  }) 
//  console.log(newArr);
 


// let str = "AnoopKumarJAiswal"
// let newStr = ""
// for (let i = 0; i < str.length; i++)
// {
//     if (newStr.includes(str[i]))
//     {
//         continue
//     }
//     newStr += str[i]
// }
// console.log(newStr)
    





// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// for ( let i = 0; i < arr.length; i++)
// {
//     for ( let j = i; j < arr[0].length; j++)
//     {
//         let temp = arr[i][j]
//         arr[i][j] = arr[j][i]
//         arr[j][i] = temp
//     }
// }
// console.log(arr);
// let ans = []



// for ( let i = 0; i < arr.length; i++)
// {

//     let temp = []
//     for ( let j = arr[0].length -1; j >= 0; j--)
//     {
//          temp.push(arr[i][j])
//     }


//     ans.push(temp)
// }
// console.log(ans);


// let arr = [1,3,4,6,5]
// arr.sort((a,b) => {
//     return a- b
// })

// let n = arr.length + 1
// let sum = 0
// let total = (n*(n+1))/2
// for ( let i = 0; i < arr.length; i++)
// {
//     sum += arr[i]
// }
// console.log(total - sum);






// let n = 4 
// let alpha = 64
// for (let i = 1 ; i <= n; i++)
// {
//     let str = ""
//     for( let j = 1; j <= i; j++)
//     {
//         // console.log(String.fromCharCode(alpha));
        
//         str += String.fromCharCode(alpha + j)
//         // alpha++
    
//     }
//   console.log(str)
// }




// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// for (let i = 0 ; i < matrix.length; i++)
// {
//     for(let j = i; j < matrix[0].length;j++)
//     {
//         let temp = matrix[i][j]
//         matrix[i][j] = matrix[j][i]
//         matrix[j][i] = temp
        
//     }
// }
// console.log(matrix);


// function checkSymmArray(matrix)
// {
//     for ( let i = 0; i < matrix.length; i++)
//     {
//         for ( let j = 0; j < matrix[i].length ; j++ )
//         {
//             // console.log(matrix[i][j]);
//             if(matrix[i][j] != matrix[j][i])
//             {
//                 return "Not Symmetric"
//             }
            
//         }
//     }
//     return "symmetric"
// }

// console.log(checkSymmArray([[1,2,3],[2,5,6],[3,6,9]]))



// for ( let i = 0; i <= matrix.length; i++)
// {
//     let maxNum = matrix[i][0] 
//     for(let j = 0; j <= matrix[i].length; j++)
//     {
//         if ( matrix[i][j] > maxNum)
//         {
//             maxNum = matrix[i][j]
//         }
//     }
//     console.log(maxNum);
    
// }


// for ( let i = 0 ; i < matrix.length ; i++)
// {
//     for( let j = i ; j < matrix[0].length; j++)
//     {
//         let temp = matrix[i][j]
//         matrix[i][j] = matrix[j][i]
//         matrix[j][i] = temp
//     }
    
// }
// console.log(matrix);

// let ans = []
// for ( let i = 0; i < matrix.length ; i++)
// {
//     let  temp = []
//     for (let j = matrix[i].length -1; j >= 0 ;j--)
//     {
//          temp.push(matrix[i][j])
//     }
//     ans.push(temp)
// }
// console.log(ans);



// let matrix = [[1,2,3],[4,5,6],[7,8,9]]


// for (let i = 0; i < matrix.length; i++)
// {
//     for(let j = i; j < matrix[0].length; j++)
//     {
//         // console.log(matrix[i][j]);
//         console.log(matrix[j][i]);

//         let temp = matrix[i][j]
//         matrix[i][j] = matrix [j][i]
//         matrix[j][i] = temp
        
//     }
// }
// console.log(matrix);

// let arr = []
// for(let i = 0; i < matrix.length; i++)
// {
//     let temp = []
//     for( let j = matrix[i].length - 1; j >= 0;j--)
//     {
//         temp.push(matrix[i][j])
//     }
//     arr.push(temp)
// }
// console.log(arr);
 

//  let matrix = [ [1,2,3],
//                 [4,0,6],
//                 [7,8,9],
//  ]

//  let ansArray = []
//  let upperSum = 0
//  let lowerSum = 0
//  for ( let i = 0; i < matrix.length; i++)
//  {
//     for( let j = 0; j <= i; j++)
//     {
//         // console.log(matrix[i][j]);
        
//         upperSum += matrix[i][j]
//     }

//     for ( let j = i ; j < matrix[i].length ; j++)
//     {
//         // console.log(matrix[i][j]);
        
//         lowerSum += matrix[i][j]
//     }
//  }

// console.log(lowerSum);
// console.log(upperSum);


// for ( let i = 0 ; i < matrix.length; i++)
// {
//     for(let j = i; j < matrix[0].length; j++)
//     {
//         let temp = matrix[i][j]
//         matrix[i][j] = matrix[j][i]
//         matrix[j][i] = temp 
//     }
// }
// console.log(matrix);

// let ansArray = []
// for( let i = 0; i < matrix.length; i++)
// {
//     temp = []
//     for( let j = matrix[i].length - 1 ; j >= 0; j--)
//     {
//         temp.push(matrix[i][j])
//     }
//     ansArray.push(temp)
// }
// console.log(ansArray);


// let upperSum = 0
// let lowerSum = 0
// for(let i = 0; i < matrix.length ; i++)
// {
//     for(let j = 0; j <= i; j++)
//     {
//         // console.log(matrix[i][j]);
//         lowerSum += matrix[i][j]      
//     }
//     for(let j = i; j < matrix[i].length ; j++)
//     {
//         upperSum += matrix[i][j]
//     }
// }
// console.log(upperSum , lowerSum);



 
//  let srow = 0
//  let scol = 0
//  let erow = matrix.length
//  let ecol = matrix[0].length


//     // for top  
//     for( let j = scol; j <= ecol - 1; j++)
//         {
//             console.log(matrix[0][j]);
            
//         }


//      // for right
//       for ( let i = srow + 1; i< erow; i++ )
//       {
//         console.log(matrix[i][ecol- 1]);   
//       }


//     // for bottom 
//     for( let j = ecol - 2; j >= scol; j--)
//     {
//         if(srow == erow)
//         {
//             break
//         }
      
//         console.log(matrix[erow-1][j]);
        
//     }

//     // for left 
//     for(let i = erow - 2; i >= srow + 1; i--)
//     {
//         if(scol == ecol)
//         {
//             break
//         }
//         console.log(matrix[i][scol]);
        
//     }
       
        

// let isSquare = true
// for( let i = 0; i < matrix.length; i++)
// {
//     for(let j = 0; j < matrix[i].length; j++)
//     {
//         if( matrix.length != matrix[i].length)
//         {
//             isSquare = false
//             console.log(false);
//             break
            
//         }
        
        
//     }
// }
// if(isSquare == true)
// {
//     console.log(true);
    
// }


// function checkIdentity(matrix)
// {
//     for( let i = 0 ; i < matrix.length; i++)
//     {
//         for( let j = 0; j < matrix[0].length; j++)
//         {
//             if( i == j && matrix[i][j] != 1)
//             {
//                 return false
//             }
//             else if ( i != j && matrix[i][j] != 0)
//             {
//                 return false
//             }
//         }
//     }
//     return true
// }
// let ans = checkIdentity( [[1,0,0,],[0,1,0], [0,0,1]])
// console.log(ans);




// function checkIdentity(matrix)
// {
//     for( let i = 0; i < matrix.length; i++)
//     {
//         for( let j = 0; j < matrix[i].length; j++)
//         {
//             if( i == j  && matrix[i][j] != 1)
//             {
//                 return false
//             }
//             else if(i != j && matrix[i][j] != 0)
//             {
//                 return false
//             }
//         }
//     }
//     return true
// }

// let ans = checkIdentity( [[1,0,0,],[0,1,0], [0,0,1]])
// console.log(ans);


// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// let maxSum = -Infinity
// let ansArray = []

// for( let i = 0; i < matrix.length; i++)
// {

//     let temp = []
//     let sum = 0
//     for( let j = 0 ; j < matrix[i].length; j++)
//     {
//         // console.log(matrix[i][j]);
        
//          sum += matrix[i][j] 
//          temp.push(matrix[i][j])   
//     }
//     maxSum = Math.max(sum , maxSum)
    
// }
// console.log(maxSum);


// let arr  = [1,2,3,23,4,2,2,1]
// let newArry = []
// for( let item of arr)
// {
//     if(newArry.includes(item))
//     {
//         continue
//     }
//     else
//     {
//         newArry.push(item)
//     }
// }
// console.log(newArry);


// let arr =[ 1,2,3,4,2,1,-1]
// let newArry = []
// for( let item of arr)
// {
//     if(newArry.includes(item))
//     {
//         continue
//     }
//     else
//     {
//         newArry.push(item)
//     }
// }
// console.log(newArry);

// newArry.sort((a,b) => {
//     return a- b
// })
// console.log(newArry);


// let n = 7 
// let star = 1
// let space = Math.floor(n/2)
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1;j <= space; j++ )
//     {
//         str += " "
//     }
//     for(let k = 1; k <= star; k++)
//     {
//         str += "*"
//     }
//     if( i < n/2)
//     {
//         space--
//         star+=2
//     }
//     else
//     {
//         space++
//         star-=2
//     }
//     console.log(str);
    
// }


// let n = 5
// let alpha = 64

// for( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= i ; j++)
//     {
//         str += String.fromCharCode(alpha + i )
//         alpha++
        
//     }
//     console.log(str)   
// }

// for ( let i = 1; i <= n; i++)
// {
//     str = ""
//     for(let j = 1; j <= i; j++)
//     {
//          str += j
//     }
//     console.log(str);  
// }


// let n = 5
// let start = 1
// for( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= i; j++)
//     {
//         str += start + " "
//         start++
//     }
//     console.log(str)  
// }



// let n = 5 
// let alpha = 65
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for( let j = 1; j <= i; j++)
//     {
//           str += String.fromCharCode(alpha)
//           alpha++
//     }
//     console.log(str);
    
// }



// let n = 5
// let alpha = 65 
// for(let i = 1; i <= n; i++)
// {
// let str = ""
//     for( let j =1; j <= i; j++)
//     {
//     str += String.fromCharCode(alpha) + " "
//     alpha++
//     }
//     console.log(str);
    
// }


// let n = 5
// let num = 64 + n
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
    
//     for(let j = 1; j <= i; j++)
//     {
//         str = (num ) + str
//         num--
//     }
    
//     console.log(str);
    
// }



// let arr= [4,6,4]
// let k = 10
// let count = 0
// for(let i = 0 ;i <arr.length; i++)
// {
//     for(let j = i+1; j <arr.length; j++)
//     {
//         if(arr[i] + arr[j] == k )
//         {
//             count++
//         }
//     }
// }
// console.log(count);


// let matrix = [[1,2],[3,4]]
// for(let i = 0; i < matrix.length; i++)
// {
//     // console.log(matrix[i]);
    
//     for(let j = 0; j < matrix[i].length ; j++)
//     {
//         console.log(matrix[i][j]);
//         i++
        
//     }
// }



// let arr = [1,2,4,4,5,6]
// for(let i = 0; i < arr.length; i++)
// {
//     let temp = []
//     for( let j = i; j < arr.length ;j++)
//     {
//         temp.push(arr[j])  
//         console.log(temp);
        
//     }
// }



// function fact(n)
// {
//     if(n == 1)
//     {
//         return n
//     }
    
//     return n * fact(n- 1)
// }
// console.log(fact(4));



// function sum(n)
// {
//     if(n == 1)
//     {
//         return n
//     }

//     return n + sum( n - 1)
// }
// console.log(sum(5));



// function revers(n)
// {
//     if(n == 1)
//     {
//         return n
//     }

//     let str = ""
//     str += n +" "

    
//    return str + revers(n - 1)
    
// }
// console.log(revers(6))



// function fibona(n)
// {
//     if(n == 1)
//     {
//         return 0

//     }
//     else if( n == 2)
//     {
//         return 1
//     }
    
//     return fibona(n -1) + fibona(n-2)
// }
// console.log(fibona(6));


// let n = 5
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= i; j++)
//     {
//         str += j
//     }
//     console.log(str);
    
// }


// for(let i = 1; i <= n ; i++)
// {
//     let str = ""
//     for(let j = 1; j <= i; j++)
//     {
//         str = j + str
//     }
//     console.log(str);
    
// }

// for(let i = n; i > 0; i--)
// {
//     let str = ""
//     for(let j = 1; j <= i; j++)
//     {
//         str += j
//     }
//     console.log(str);
    
// }

// for(let i = n; i > 0 ; i--)
// {
//     let str = ""
//     for(let j = 1; j <= i; j++)
//     {
//         str = j + str
//     }
//     console.log(str);
    
// }


// let n = 90
// for( let i = 0; i < n; i++)
// {
//     let str = ""
//     let strcode = 65 + i
//     for(let j = 0; j <= i; j++)
//     {
//         str += String.fromCharCode(strcode)
//         strcode++
//         if(strcode > 90)
//         {
//             strcode = 65
//         }
//     }
//     console.log(str);
    
// }
 

// for (let i=0;i<n;i++)
//   {
//     let strcode=65+i
//     let str=""
    
//     for ( let j=0;j<=i;j++)
//     {
//       str+=String.fromCharCode(strcode)
      
//       strcode++
//       if (strcode>90)
//       {
//         strcode=65

//       }
      
//     }
    
//     console.log(str)
//   }
  


// let n = 5
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     let num = n
//     for(let j = 1; j <= i; j++)
//     {
//         str = num + str 
//         num--
//     }
//     console.log(str);
    
// }



// let arr = [1,2,3,2,4,2,-5,0]
// let isSwappingDone = false
// for(let i = 0; i < arr.length - 1; i++)
// {
//     for(let j = 0;j < arr.length - 1 -i; j++)
//     {
//         if(arr[j] > arr[j+ 1])
//         {
//             isSwappingDone  = true
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
//     if(isSwappingDone == false)
//     {
//         break
//     }
// }
// console.log(arr);



// let arr = [1,2,378,0,-1]
// for(let i = 0; i < arr.length - 1; i++)
// {
//     let minIdx = i
//     for(let j = i; j < arr.length ; j++)
//     {
//         if(arr[j] < arr[minIdx])
//         {
//             minIdx = j
//         } 
//     }
//     {
//         let temp = arr[minIdx]
//         arr[minIdx] = arr[i]
//         arr[i] = temp
//     }
// }

// console.log(arr);


// let arr = [1,2,3,2,0,-1]
// for(let i = 0; i < arr.length; i++)
// {
//     for(let j = i + 1; j > 0; j--)
//     {
//         if( arr[j - 1] > arr[j])
//         {
//             let temp = arr[j]
//             arr[j ] = arr[j - 1]
//             arr[ j - 1] = temp
//         }
//     }
// }
// console.log(arr);



function towSorted(arr1, arr2)
{
    let i = 0
    let j = 0
    let res = []
    while(  i < arr1.length && j < arr2.length)
    {
        if(arr1[i] < arr2[j])
        {
            res.push(arr1[i])
            i++
        }
        else
        {
            res.push(arr2[j])
            j++
        }
    }
    while( i < arr1.length )
    {
        res.push(arr1[i])
        i++
    }
    while( j< arr2.length)
    {
        res.push(arr2[j])
        j++
    }
    return res
}

function mergeSortArray(arr)
{
    if(arr.length <= 1)
    {
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArry = arr.slice(0,mid)
    let righArry = arr.slice(mid)

    let leftSortArray = mergeSortArray(leftArry)
    let rightSortedArray = mergeSortArray(righArry)
    return towSorted(leftSortArray , rightSortedArray)
}
console.log(mergeSortArray([1,4,3,2,0,-2]));
