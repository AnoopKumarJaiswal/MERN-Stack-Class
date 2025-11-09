const http = require("http")

let arr = ["Anoop", "Shubhm", "Vikash" , "Rahul"]

let obj = {
    name : "Anoop",
    age : 24,
    address : "Balrampur", 
    name2 : "Kumar"
}


const server = http.createServer((req,res) =>{
    if(req.url == "/data" && req.method == "GET")
    {
        res.end("GET REQUEST")
    }
    else if(req.url == "/data" && req.method == "POST")
    {
        res.end("POST REQUEST")
    }
})


// const server = http.createServer((req, res) =>{
//     if(req.url == "/")
//     {
//         res.writeHead(200, {"content-type" : "text/html"})
//         res.end("<h1>Hello From HTML</h1>")
//     }
//     else if(req.url == "/info")
//     {
//        res.writeHead(200 , {"content-type" : "text/json"})
//        res.end(JSON.stringify(arr))
//     }
//     else if(req.url == "/json")
//     {
//         res.writeHead(200, {"content-type" : "text/json"})
//         res.end(JSON.stringify(obj))
//     }
//     else if(req.url == "/home")
//     {
//        res.writeHead(201) 
//         res.end("Hello World")
//     }
//     else if(req.url == "/user")
//     {
//         res.end("Welcome in User page")
//     }
//     else if(req.url == "/about")
//     {
//         res.end("thank you for visiting about page")
//     }
//     else
//     {
//         res.end("Invalid API ")
//     }
// })





server.listen(8080, () =>{
    console.log("Server Runingn");
    
})