import { useEffect, useState } from "react";

export function HP()
{
    const[datafromAPI , setdataFromAPi] = useState([])

    useEffect(() =>{
        async function getData() {
            const res = await fetch("https://hp-api.onrender.com/api/characters")
            const data = await res.json()

            setdataFromAPi (data)
        }
        getData()
    },[])


    return (
        <div className="grid grid-cols-5 gap-[40px] ">
            {datafromAPI.map((item)=>{
               return(
                <div className="flex  items-center flex-col border-[2px] hover:scale-[1.1] rounded-2xl">
                    <img className="h-[180px] w-[180px] rounded-full" src={item.image || "https://ik.imagekit.io/hpapi/harry.jpg"} alt="" />
                    <h1 className="border p-[10px] rounded-2xl">{item.name}</h1>
                    <h1>{item.species}</h1>
                    <h1>{item.gender}</h1>
                    <h1>{item.house}</h1>
                    <h1>{item.dateOfBirth}</h1>
                    <h1>{item.wizard}</h1>
                    <h1>{item.hairColour}</h1>
                </div>

               )
            })}
        </div>
    )
}