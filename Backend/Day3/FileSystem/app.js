const fs = require("fs")


// fs.writeFile("text.txt" , "Hello Sync" , (err) =>{
//     console.log("DONE");
// })



// fs.writeFileSync("text.txt", "Hello from FileSystem")


// fs.readFile("text.txt" , (err, data) =>{
//     console.log(data);
// })



// fs.readFile("text.txt", "utf-8", (err, data) =>{
//     console.log(data);
// })



// const data = fs.readFileSync("text.txt", "utf-8")
// console.log(data)




// // fs.appendFile("text.txt","Welcome!", (err) =>{
// //   console.log("DONE");
// })



// fs.appendFile("text.txt", "\nMy age is 24 years old", (err) =>{
//     console.log("Done")
// })


// fs.appendFileSync("text.txt", "\nI am from Balrampur")


// fs.unlink("text.txt", () =>{
//     consloe.log("done")
// })


// console.log("OK");





console.log(process.argv)

const a = Number(process.argv[2])
const b = Number(process.argv[3])

function sum(a,b)
{
    console.log(a+b)
}

sum(a,b)
