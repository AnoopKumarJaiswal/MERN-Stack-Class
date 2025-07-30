let Container = document.getElementById("main")
Container.style.display = "grid"
Container.style.gridTemplateColumns = "repeat(4, 1fr)"
Container.style.gap ="70px"
Container.style.margin = "50px"



const products =[{
    name: "Wireless Headphones",
    price: "₹ 2999",
    desc: "High-quality wireless over-ear headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1658927420987-488ade098001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Smart Watch",
    price: "₹ 4999",
    desc: "Water-resistant smartwatch with fitness tracking and notifications.",
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Bluetooth Speaker",
    price: "₹ 1999",
    desc: "Portable speaker with rich bass and 10 hours of battery life.",
    image: "https://media.istockphoto.com/id/1129572489/photo/portable-bluetooth-speaker.webp?a=1&b=1&s=612x612&w=0&k=20&c=-7LF73ehOdwcQDMXXBtnCuUyIGMRoiaeWsBqTtdpFqs="
  },
  {
    name: "Gaming Mouse",
    price: "₹ 1499",
    desc: "Ergonomic gaming mouse with customizable RGB lighting.",
    image: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Mechanical Keyboard",
    price: "₹ 3499",
    desc: "Tactile mechanical keyboard with blue switches and backlight.",
    image: "https://images.unsplash.com/photo-1563486299190-d415ab26e837?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluYWwlMjBrZXlib3JkfGVufDB8fDB8fHww"
  },
  {
    name: "Full HD Monitor",
    price: "₹ 8999",
    desc: "24-inch full HD LED monitor with ultra-slim bezels.",
    image: "https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZ1bGwlMjBoZCUyMG1vbml0ZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "External SSD",
    price: "₹ 5799",
    desc: "500GB high-speed USB 3.1 solid-state drive for backups.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Smartphone Gimbal",
    price: "₹ 3999",
    desc: "3-axis handheld gimbal stabilizer for smooth video shots.",
    image: "https://media.istockphoto.com/id/1188030194/photo/man-doing-live-video-with-phone-with-stabilizer-in-ny.webp?a=1&b=1&s=612x612&w=0&k=20&c=L92hinXmmwo8teJZBhTOXQkA-ZGM6s1W-L_sztvMO00="
  },
  {
    name: "Wireless Charger",
    price: "₹ 1299",
    desc: "Fast wireless charger compatible with all Qi devices.",
    image: "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww"
  },
  {
    name: "Laptop Stand",
    price: "₹ 999",
    desc: "Aluminum adjustable laptop stand for ergonomic use.",
    image: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D"
  }]





  for ( let item of products)
  {
    let card = document.createElement("div")
    let Image = document.createElement("img")
    let textContainer = document.createElement('div')
    let nameTag = document.createElement("h3")
    let priceTag = document.createElement("h2")
    let descTag = document.createElement("p")
    Image.src = item.image
    Image.style.height = "250px"
    Image.style.width = "100%"
    Image.style.borderRadius = "10px"
    card.style.borderRadius = "10px"
    card.setAttribute("class" , "hober")
    nameTag.innerText = item.name
    nameTag.style.paddingLeft = "50px"
    priceTag.innerText = item.price
    priceTag.style.paddingLeft = " 80px"
    descTag.innerText = item.desc
    descTag.style.padding = "0px 20px 0px 20px "
    card.style.border = "5px solid gray"
    card.appendChild(Image)
    card.style.backgroundColor = "lightgray"
    card.appendChild(textContainer)
    textContainer.appendChild(nameTag)
    textContainer.appendChild(priceTag)
    textContainer.appendChild(descTag)
    Container.appendChild(card)

  }