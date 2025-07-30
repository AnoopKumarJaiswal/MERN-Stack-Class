// let arr =[1,2,3,4,"ANS"]
// console.log(arr[4]);




// let arr=[[1,2,3],["abc",true],[1,"two",false,"ans"]]
// // nested ->unnested [1,2,3,"abc" true ,1,"two", false,"ans"]
// console.log(arr.length);
// let innerArr=arr[2]
// console.log(innerArr[3]);
// console.log(arr[2][3]);



// let nArr=arr.flat()
// console.log(nArr);



// let arr= [1,2,["one","two",[true, false, [ "qwertyu","ans"]]]]
// console.log(arr.length);
// console.log(arr[2][2][2][1]);


// console.log(arr);
// let nArr= arr.flat()
// console.log(nArr);
// let nArr2= nArr.flat()
// console.log(nArr2);
// let nArr3= nArr2.flat()
// console.log(nArr3);
 

// let n= Number(prompt("Enetr Number"))
// let arr=[]

// for (let i=1;i<=n;i++)
// {
//   let ans=prompt("Enter value"+i)
//   arr.push(ans)
    
// }
//  console.log(arr);
 
 




// let arr=[]
// let size= prompt("Enter total number of inner arrays")

// for (let i=0;i<size;i++)
// {
//     let innersize=prompt("Enter size of array"+i)
//     let temp =[]

//     for ( let j=0;j<innersize; j++)
//     {
//         let val= prompt("Enter element"+j)
//         temp.push(val)
//     }
//     arr.push(temp)
// }



// for ( let i=0;i<arr.length;i++)
// {
//     let innerArr=arr[i]
//     let str=""
//     for (let j=0;j<innerArr.length;j++)
//     {
//         // console.log(innerArr[j]);
//         str+=innerArr[j]+" "
        
//     }
//     console.log(str);
    
    
// }



// for (let i=0;i<arr.length;i++)
// {
//     let str=""
//     for (let j=0;j<arr[i].length;j++)
//     {
//         str+=arr[j][i]
//     }
//     console.log(str);
    
// }



// let arr= [[0,1,2,3],[11,99,37,48],[1000,101,152,39],[8,10,157,138]]
// let x=1010
// let isxPresent=false



// for ( let i=0;i<arr.length;i++)
// {
    
//     for ( let j=0;j<arr[i].length;j++)
//     {
//         if ( arr[i][j]==x)
//         {
//             isxPresent=true
//             console.log(i,j);
            
//         }
//     }
    
// }
// if (isxPresent==false)
// {
//     console.log(-1);
    
// }



// let arr= [ [1,2,3,"asd"],[true,"ans",3,2,5,2,3],[1,3,4,2,4,"Anoop"]]
// console.log(arr[2][5]);



// let arr1= ["a",3,2,45,[1,2,3,4,2,[1,5,4,3,6,3,[34,false,"Anoop"]]]]
// console.log(arr1[4][5][6][2]);
// console.log(typeof(arr1[4][5][6][2]));


// let newArr=arr1.flat()
// let newArr1=newArr.flat()
// let newArr2=newArr1.flat()
// console.log(newArr2);

// let n=prompt("Enter Number")
// let arr=[]
// for (let i=1;i<=n;i++)
// {
//     let ans = prompt("Enter value"+i)
//     arr.push(ans) 
// }
// console.log(arr);



// let arr=[]
// let size=prompt("Enter totalnumber of inner Array")
//  for ( let i=0;i<=size;i++)
//  {
//     let innerSize=prompt("Enter Arry Size"+i)
//     let temp=[]
//     for (let j=0;j<=innerSize;j++)
//     {
//         let val=prompt("Enter Element"+j)
//         temp.push(val)

//     }
//     arr.push(temp)
//  }
//  console.log(arr);


// let arr =  [[1,1,1],[2,2,2],[3,3,3]]
//  for (let i=0;i<arr.length;i++)
//  {
//     let str=""
//     for(let j=0;j<arr[i].length;j++)
//     {
//             str+=arr[i][j]+" "
//     }
//     console.log(str);
    
//  }



// let arr= [[0,1,2,3],[11,99,37,48],[1000,101,152,39],[8,10,157,138]]


// let x=39
// let isxPresent=false

// for ( let i=0;i<arr.length;i++)
// {
//         for (let j=0;j<arr[i].length;j++)
//         {
//                 if (arr[i][j]==x)
//                 {
//                         isxPresent=true
//                         console.log(i,j);
//                         break     
//                 }
//         }
// }
// if ( isxPresent==false)
// {
//         console.log(-1);
        
// }

 



// let arr=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// let x=11
// let isxPresent=false

// let i= 0
// let j=arr[i].length

// while (i<arr.length && j>=0)
// {
//         if(arr[i][j]==x)
//         {
//                 isxPresent=true
//                 console.log(i,j);
//                 break
                
//         }
//         else if (arr[i][j]<x)
//         {
//                 i++

//         }
//         else
//         {
//                 j--
//         }
// }
// if ( isxPresent==false)
// {
//         console.log(-1);
        
// }


// let i= arr.length-1
// let j=arr[i].length-1

// while (i>=0 && j>=0)
// {
//         if (arr[i][j]==x)
//         {
//                 console.log(i,j);
//                 break        
//         }
       
//         else if (arr[i][j]>x)
//         {
//                 j--
//         }
//          else if (arr[i-1][j]<x)
//         {
//                 i--
                
//         }
        
// }       

// let arr= [[7,2,3],[2,3,4],[5,6,1]]

// let str=""
//  for ( let i=0;i<arr.length;i++)
//  {
        
//         if (i%2==0 )
//         {
//                 for ( let j=0;j<arr[i].length;j++)
//                 {
//                        str+=(arr[i][j])
//                 }
//                        str+=" "
//         }
//         else 
//         {
//                 for (let j=arr[i].length-1;j>=0;j--)
//                 {
//                         str+=(arr[i][j])
//                 }
//                 str+=" "
//         }
        
//  }
//  console.log(str);
 




 let arr= [[7,2,3],[2,3,4],[5,6,1]]


 for ( let i=0;i<arr.length;i++)
 {
        if (i%2==0)
        {
                for ( let j=0;j<arr.length;j++)
                {
                        console.log(arr[i][j]);
                        
                }
        }
        else 
        {
                for ( let j=arr.length-1;j>=0;j--)
                {
                        console.log(arr[i][j]);
                        
                }
        }
 }