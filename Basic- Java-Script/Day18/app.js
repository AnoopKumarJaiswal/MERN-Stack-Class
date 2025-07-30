
// let arr=[1,2,34,22,3,4,3,3,44,33,22]
// let k = 3
 
// for (let i=arr.length-1;i>=0;i--)
// {
//     if (arr[i]==k)
//     {
//         console.log(i);
//         break
        
//     }
    
// }

// OR loop


// let ans=0
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==k)
//     {
//         ans=i
//     }
// }
// console.log(ans);




// let arr=[1,2,3,4,5,2,1]
// let k=2
// let count=0
// for (let i=0;i<arr.length-1;i++)
// {
    
//          if(arr[i]>arr[i+1]&&arr[i]-arr[i+1]==k)
//          {
//             count++
//          }
//          else if(arr[i+1]>arr[i]&&arr[i+1]-arr[i]==k)
//          {
//             count++
//          }
    
// }
// console.log(count);



// let arr=[1,2,3,4,5,6,3,2,4,5,7]
// let k=9
// let count=0
// for (let i=0;i<arr.length-1;i++)
// {
//     if (arr[i]+arr[i+1]==k)
//     {
//         count++
//     }
// }
// console.log(count);



// let arr=[1,2,3,4,5,3,4,5,7,9]
// let k =2
// let count=0
// for (let i=0;i<arr.length-1;i++)
// {
//     if(arr[i]>arr[i+1] && arr[i]-arr[i+1]==k)
//     {
//         count++
//     }
//     else if (arr[i+1]>arr[i] && arr[i+1]-arr[i]==k)
//     {
//         count++
//     }
// }
// console.log(count);



// let arr=[10,12,3,4,4,34,35,78,56,87,23,90]
// let max=arr[0]
// let min=arr[0]
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]>max)
//     {
//         max=arr[i]
//     }
//    if (arr[i]<min)
//     {
//         min=arr[i]
//     }

// }
//console.log(max-min);




// let arrA=[1,2,3,4,3,4,5,2,4,5,]
// let arrB=[3,4,5,3,4,6,3,2,4,6,2,4,2]
// let sumA=0
// let sumB=0
// for (let item of arrA)
// {
//     sumA+=item
// }
// for (let item of arrB)
// {
//     sumB+=item
// }
// if(sumA>sumB)
// {
//     console.log("First array is larger");
    
// }
// else if (sumB>sumA)
// {
//     console.log("Second array is larger");
    
// }
// else 
// {
//     console.log("Both are equal");
    
// }




// let arr=[1,2,34,5,43,2,3,4,2,5,5,6]
// let X=10
// let str=""
// for (let i=0;i<arr.length;i++)
// {
//     if ( arr[i]==X)
//     {
//         str+=i+1
//     }
// }
// if (str.length>0)
// {
//     console.log(str);
    
// }
// else
// {
//     console.log(-1);
    
// }
  


// let arr=[1,2,3,4,3,2,4,5,4]
// let max=0
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]>arr[max])
//     { 
//         max=i
//     }
// }
// console.log(max);


// let arr=[1,2,3,4,5,67]
// let s=0
// let e=arr.length-1
// while (s<e)
// {
//     let temp=arr[s]
//     arr[s]=arr[e]
//     arr[e]=temp
//     s++
//     e--
// }
// console.log(arr);



// let arr=[2,3,4,5,3,2]
// let ans =8888888888888888
// for (let i=0;i<arr.length-1;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]%2==0&& arr[j]%2==0&& arr[i]>0&& arr[j]>0)
//         {
//            ans=Math.min( j-i, ans) 
//         }
//     }
// }
// if (ans==8888888888888888)
// {
//     console.log(-1);
    
// }
// else 
// {
//     console.log(ans);
    
// }

// let arr=[1,2,3,4,5,6,7,8,5,6,4,3,6,8]
// let k=6
// for (let i=arr.length-1;i>=0;i--)
// {
//     if (arr[i]==k)
//     {console.log(i);
//     break}
    
// }

// let arr=[1,2,3,45,43,6,565,7,557,9]
// let max=0
// for ( let i=0; i<arr.length;i++)
// {
//     if (arr[i]>arr[max])
//     {
//         max=i
//     }
// }
// console.log(max);


// let arr=[1,2,3,21,3,45,2,-3,-34,-3,-2,-5,,0]
// let p=0
// let n=0
// let z=0
// for ( let i=0;i<arr.length;i++)
// {
//     if (arr[i]>0)
//     {
//         p++
        
//     }
//     else if (arr[i]<0)
//     {
//         n++
//     }
//     else if (arr[i]==0)
//     {
//        z++
        
//     }
// }
// console.log((p/arr.length).toFixed(6),   (n/arr.length).toFixed(6),   (z/arr.length).toFixed(6) )






// let arr=[1,2,3,2,1,4,21,34,5]
// let ans=999999999999999999990000
// for (let i=0;i<arr.length-1;i++)
// {
//     for ( let j=i+1;j<arr.length;j++)
//     {
//         if (arr[i]%2==0&&arr[j]&&arr[i]>0&&arr[j]>0)
//         {
//             ans = Math.min(j-i,ans)
//         }
//     }
// }
// if (ans ==999999999999999999990000)
// {
//     console.log(-1);
    
// }
// else 
// {
//     console.log(ans);
    
// }



// let arr=[1,2,3,2,3,2,3,2,3,2,4,43]
// let k=2
// for (let i=arr.length-1;i>=0;i--)
// {
//     if (arr[i]==k)
//     {
//         console.log(i);
//         break
        
//     }
// }


// let arr=[1,34,3,5,3,45,3,2,5,32,3445,0]
// let max=0
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]>arr[max])
//     {
//         max=i
//     }
// }
// console.log(max);



// let arr=[2,3,5,2,4,2,4,2,4,25,6,3,53]
// let k=4
// let count=0
// for (let i=0;i<arr.length-1;i++)
// {
//     for (let j=i+1;j<arr.length;j++ )
//     {
//         if (arr[i]>arr[j]&&arr[i]-arr[j])
//         {
//             count++
//         }
//     }
// }




// let arr=[1,3,2,45,6,2,4,2,4,4,4]
// let x=4
// let str =""
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]==x)
//     {
//         str+=(i+1)+" "
//     }
// }
// if (str.length>0)
// {
//     console.log(str);
    
// }
// else 
// {
//     console.log(-1);
    
// }



// let arr=[1,2,4,5]
// let max=arr[0]
// let Secondmax=arr[1]
// for ( let i=0;i<arr.length;i++)
// {
//     if (arr[i]>max)
//     {
//         Secondmax=max
//         max=arr[i]
//     }
//     else if (arr[i]>Secondmax&& arr[i]<max)
//     {
//         Secondmax=arr[i]
//     }
// }
// console.log(max);
// console.log(Secondmax);




// let arr=[1,3,4,2,4,5,1,4,6,4,53,2]
// let max=0
// let Secondmax=1
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]>arr[max])
//     {
//         Secondmax=max
//         max= i
//     }
//     else if ( arr[i]>arr[Secondmax]&&arr[i]<arr[max])
//         {
//             Secondmax=i
//         }
    
// }

// console.log(Secondmax);
// console.log(max);


// min number

// let arr=[21,42,2,5,2,4,4,68]
// let min=arr[0]
// for (let i=0;i<arr.length;i++)
//     { 
//         if (arr[i]<min)
//         {
//             min=arr[i]
//         }

//     }
//     console.log(min);
    

// min index


// let min=0
// for (let i=0;i<arr.length;i++)
//     {
//         if (arr[i]<arr[min])
//         {
//             min=i
//         }

//     }
//     console.log(min);
    




// secondmin number

// let arr =[10,3,21,4,5,]
// let min=arr[0]
// let secondmin=arr[1]
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]<min)
//     {
//         secondmin=min
//         min= arr[i]
//     }
//     else if( arr[i]<secondmin && arr[i]>min)
//     {
//         secondmin=arr[i]
//     }
// }
// console.log(secondmin);



// second min index

// let arr=[1,30,23,23,31,11,43,34]
// let min=0
// let secondmin=2

// for ( let i=0;i<arr.length;i++)
// {
//     if (arr[i]<arr[min])
//     {
//         secondmin=min
//         min=i
//     }
//     else if (arr[i]<arr[secondmin] && arr[i]>arr[min])
//     {
//         secondmin=i
//     }
// }
// console.log(secondmin);




// let arr=[2,34,43,56,2454,75,45,56]
// let max=arr[0]
// let min=arr[0]
// for ( let i=0;i<arr.length;i++)
// {
//     if (arr[i]>max)
//     {
//         max=arr[i]
//     }
//     if (arr[i]<min)
//     {
//         min=arr[i]
//     }
// }
// console.log(max-min);




// let arr=[1,2,3,2,21,3,,5,5,3,5]
// let k=3
// let count=0
// for (let i=0;i<arr.length;i++)
// {
//     if (arr[i]==k)
//     {
//         count++
//     }
// }
// console.log(count);

// let arrA=[1,2,3,4,5,6,7,7]
// let arrB=[5,4,2,4,6,78,9,3]
// let sumA=0
// let sumb=0
// for (let item of arrA)
// {
//     sumA+=item
// }
// for (let item of arrB)
// {
//     sumb+=item
// }
// if (sumA>sumb)
// {
//     console.log(sumA);
    
// }
// else if (sumb>sumA)
// {
//     console.log(sumb);
    
// }



// let arr=[1,21,3,3,22,34,4,3,20,4,5,11,8]
// let max=arr[0]
// let secondmax=arr[1]
// let min=arr[0]
// let secondmin=arr[1]
// for ( let i=0;i<arr.length;i++)
// {
//     if (arr[i]>max)
//     {
//         secondmax=max
//         max=arr[i]
//     }
//     else if ( arr[i]>secondmax && arr[i]<max)
//     {
//         secondmax=arr[i]
//     }
//     if (arr[i]<min)
//     {
//         secondmin=min
//         min=arr[i]
//     }
//     else if (arr[i]<secondmin && arr[i]>min)
//     {
//         secondmin=arr[i]
//     }


// }
// console.log(secondmax);
// console.log(secondmin);





// let day = prompt("Enter Day")
// let month= prompt("Enter month")
// let year= prompt("Enter year")


// if ( month==1||month==3|| month==5||month==7|| month==8||month==10|| month==12)
// {
//     if (day>=1 && day<=31)
//     {
//         console.log("valid");
        
//     }
//     else
//     {
//         console.log("Invalid");
        
//     }
// }
// else if (  month==4||month==6|| month==9||month==11)
// {
//     if (day>=1 && day<=30)
//     {
//         console.log("valid");
        
//     }
//     else 
//     {
//         console.log("Invalid");
        
//     }
// }
// else if (month==2)
// {
//     if(year%4==0 && year%100!=0 || year%400==0)
//     {
//         if(day>=1 && day<=29)
//         {
//             console.log("valid");
            
//         }

//     }
//     else if ( day>=1 && day <=28)
//     {
//         console.log("valid");
        
//     }
//     else
//     {
//         console.log("invalid");
        
//     }
// }
// else
// {
//     console.log("Invalid");
    
// }


// let num =123445677322
// for ( let i=1;num>0;i++)
// {
//     let lastdigit= num%10
//     console.log(lastdigit);

//     num=Math.floor(num/10)
    
// }
    
    


// let str =String(num)
// for ( let i=0;i<str.length;i++)
// {
//     console.log(str[i]);
    
// }



// let num=57
// let isPrime= true

// for (let i=1;i<=num**(1/2);i++)
// {
//     if (num%i==0)
//         isPrime=false
//     {
//         console.log("not a PrimeNumber");
//         break
        
//     }
// }
// if (isPrime==true)
// {
//     console.log("Prime Number");
    
// }




// let num = prompt("Enter Number")
// for ( let i=2;i<=num;i++)
// {
//     let isPrime=true

//     for (let j=2;j<=i**(1/2);j++)
//     {
//         if(i%j==0)
//         {
//               isPrime=false
//               break
//         }
//     }
//     if(isPrime==true)
//     {
//         console.log(i);
        
//     }
// }




// let n= prompt("Enter Number ")
// let fact = 1
// for ( let i=n;i>=2;i--)
// {
//     fact*=i
// }
// console.log(fact);



// let n= prompt("Enter Number")
// for (let i=1;i<=n;i++)
// {
//     for (let j=1;j<=10;j++)
//     {
//         console.log(`${i} x ${j} = ${i*j}`);
        
//     }
// }


