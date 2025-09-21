import { useEffect, useState } from "react";


export function Hp()
{
  const[dataFromAPI , setdatFromApi] =  useState([])
    useEffect(() =>{
        async function getdata()
        {
            let res = await fetch("https://hp-api.onrender.com/api/characters")
             const data = await res.json()
             setdatFromApi(data)
             console.log(data);
             
             
        }
        getdata()
    },[])
    return (
      <div className="flex flex-col  items-center  bg-amber-950 pt-[100px] " >

          <h1 className="text-5xl m-[50px] bg-amber-950  text-white shadow-[10px_10px_10px_white] h-[60px] w-[300px] pl-[20px] rounded-2xl">Harry Potter</h1>
        <div className="grid grid-cols-4 gap-[70px]">
          {dataFromAPI.map((item) =>{
            return (
              <div className="border-[5px] shadow-[10px_10px_10px_white] hover:scale-[1.1] rounded-3xl " >
                     <img className="h-[300px] w-[300px] p-[20px]" src={item.image || "https://ik.imagekit.io/hpapi/harry.jpg"} alt="" />
                <div className="flex flex-col items-center text-white">
                  <p >{item.name}</p>
                  <p >{item.gender}</p>
                  <p >{item.gender}</p>
                </div>
                </div>
              )
            })}
        </div>
            </div>
    )
}