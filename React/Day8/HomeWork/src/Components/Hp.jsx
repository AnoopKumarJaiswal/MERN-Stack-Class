import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export function Hp()
{
    const[dataFromAPI , setdatFromApi] = useState([])
    useEffect(() =>{
        async function getData()
         {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setdatFromApi(data.products)
            // console.log(data.products);
            
            
        }
        getData()
    },[])

    if(dataFromAPI.length == 0)
    {
        return <Shimmer />
    }
else{

    return (
        <div className="grid grid-cols-4 gap-[50px] p-[50px]">
            {dataFromAPI.map((item) =>{
                return (
                    <div className="hover:scale-[1.1]  border gap-[20px] border-blue-200 flex flex-col items-center p-[20px] rounded-3xl h-[400px]">
                        <img className="h-[200px]  w-[200px]" src={item.images} alt="" />
                       <div className="flex flex-col items-center " >

                        <p className="text-3xl">{item.title.length > 12? item.title.slice(0 , 12) + "....":item.title}</p>
                        <p>₹{item.price}</p>
                        <p>{item.returnPolicy}</p>
                        <p>Discount: {item.discountPercentage}%</p>
                        <p className="text-amber-800">Status:{item.availabilityStatus}</p>
                        <p>{"⭐".repeat(item.rating)}</p>
                       </div>
                    </div>
                )
            })}
        </div>
    )
}
}
