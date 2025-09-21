import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './Components/Navbar'
import { Profile } from './Components/Profileuser'
import { Product } from './Components/Products'
import { Blog } from './Components/blog'
import { Eventts } from './Components/Events'
import { Movies } from './Components/Movies'

function App() {

  const profile = [
  { "id": 1, "name": "Alice Johnson", "age": 28, "email": "alice@example.com", "image": "https://randomuser.me/api/portraits/women/1.jpg" },
  { "id": 2, "name": "Bob Smith", "age": 34, "email": "bob@example.com", "image": "https://randomuser.me/api/portraits/men/2.jpg" },
  { "id": 3, "name": "Charlie Adams", "age": 25, "email": "charlie@example.com", "image": "https://randomuser.me/api/portraits/men/3.jpg" },
  { "id": 4, "name": "Diana Green", "age": 30, "email": "diana@example.com", "image": "https://randomuser.me/api/portraits/women/4.jpg" },
  { "id": 5, "name": "Ethan Brown", "age": 22, "email": "ethan@example.com", "image": "https://randomuser.me/api/portraits/men/5.jpg" }
];


const product = [
  {
    id: 101,
    name: "Laptop",
    price: 899.99,
    inStock: true,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/46/computer-1846056_1280.jpg"
  },
  {
    id: 102,
    name: "Smartphone",
    price: 499.49,
    inStock: true,
    image: "https://cdn.pixabay.com/photo/2024/02/24/19/00/phone-8594571_1280.jpg"
  },
  {
    id: 103,
    name: "Keyboard",
    price: 29.99,
    inStock: false,
    image: "https://cdn.pixabay.com/photo/2015/03/02/23/21/keyboard-656722_1280.png"
  },
  {
    id: 104,
    name: "Mouse",
    price: 19.99,
    inStock: true,
    image: "https://cdn.pixabay.com/photo/2013/07/13/12/17/mouse-159568_1280.png"
  },
  {
    id: 105,
    name: "Monitor",
    price: 159.99,
    inStock: true,
    image: "https://cdn.pixabay.com/photo/2021/07/15/10/15/monitor-6468035_1280.png"
  },
  {
    id: 106,
    name: "Printer",
    price: 120.0,
    inStock: false,
    image: "https://cdn.pixabay.com/photo/2020/12/15/13/48/inkjet-5833697_1280.png"
  }
];



const blog = [
  { "id": 201, "title": "How to Learn JavaScript", "author": "Alice", "likes": 120 },
  { "id": 202, "title": "Top 10 CSS Tricks", "author": "Bob", "likes": 90 },
  { "id": 203, "title": "Understanding React Hooks", "author": "Charlie", "likes": 150 },
  { "id": 204, "title": "Node.js Performance Tips", "author": "Diana", "likes": 75 },
  { "id": 205, "title": "MongoDB Best Practices", "author": "Ethan", "likes": 60 }
]



const events = [
  { "id": 301, "name": "Tech Conference 2025", "date": "2025-09-10", "location": "San Francisco" },
  { "id": 302, "name": "Startup Meetup", "date": "2025-09-15", "location": "New York" },
  { "id": 303, "name": "AI Workshop", "date": "2025-09-20", "location": "London" },
  { "id": 304, "name": "Hackathon", "date": "2025-09-25", "location": "Berlin" },
  { "id": 305, "name": "Product Launch", "date": "2025-09-30", "location": "Tokyo" }
]



const movies = [
  { "id": 401, "title": "Inception", "genre": "Sci-Fi", "rating": 8.8 },
  { "id": 402, "title": "Interstellar", "genre": "Sci-Fi", "rating": 8.6 },
  { "id": 403, "title": "The Dark Knight", "genre": "Action", "rating": 9.0 },
  { "id": 404, "title": "The Prestige", "genre": "Drama", "rating": 8.5 },
  { "id": 405, "title": "Memento", "genre": "Thriller", "rating": 8.4 },
  { "id": 406, "title": "Tenet", "genre": "Sci-Fi", "rating": 7.4 }
]



  
  return (

    <div >
      <div className='fixed'>
      <Navbar />
      </div>
        

        <div className='relative top-[100px] z-[-1] '>

     <p className='text-4xl'>Profile</p>
      <div className='grid grid-cols-5  p-2 gap-[20px]  w-[90%] bg-blue-950 ml-17'>
      {profile.map((item) =>{
        return <Profile name={item.name} age={item.age} email={item.email} id={item.id} img={item.image} />
      })}
      </div>
     
     <p className='text-4xl'>Products</p>
      <div className='grid grid-cols-6  p-2  w-[90%]   bg-blue-950 gap-[270px]  overflow-x-scroll ml-17'  >
      {product.map((item) =>{
        return <Product name={item.name}  price={item.price} instock={item.inStock} id={item.id} img1={item.image}/>
      })}
      </div>


    <p className='text-4xl'>Blogs</p>
      <div className='grid grid-cols-5 border-[3px] p-2  bg-blue-950 w-[90%] ml-17' >
        {blog.map((item) =>{
          return <Blog title={item.title} id={item.id}  author={item.author} like={item.likes}/>
        })}
      </div>
    




     <p className='text-4xl'>Events</p>
     <div className='grid grid-cols-5 border-[3px] p-2  bg-blue-950 w-[90%] ml-17'>
      {events.map((item) =>{
        return <Eventts name={item.name} date={item.date}  location={item.location} id={item.id}/>
      })}
     </div>

<p className='text-4xl'>Movies</p>
    <div className='grid grid-cols-6 border-[3px] p-2  bg-blue-950 gap-[275px] w-[90%] overflow-x-scroll ml-17' >
    {movies.map((item) =>{
      return <Movies title={item.title}  genre={item.genre} rating={item.rating} id={item.id} />
    }) }
    </div>
    
    </div>
    </div>
  )
}

export default App
