import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
 export function HPtwo()
 {
    const[getDatfroApi , setgetDataFromApi] = useState([])
    useEffect(() =>{
        async function getData()
        {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setgetDataFromApi(data)
            console.log(data);
            
            
        }
        getData()
    },[])

    return getDatfroApi.length > 0 ?  (
        <div className="grid grid-cols-5 gap-[20px]  h-[100vh] p-[50px] ">
            {getDatfroApi.map((item) =>{
                return (
                    <div className="h-[300px] w-[250px] bg-amber-50  flex flex-col justify-center items-center rounded-3xl hover:scale-[1.08]">
                        <img className="rounded-full h-[100px] w-[100px]" src={"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="} alt="" />
                        <p className="text-2xl">{item.name.length > 17 ? item.name.slice(0,17) + "...": item.name}</p>
                        <p>useName: {item.username}</p>
                        <p>📞{item.phone}</p>
                        <p>📩{item.email}</p>
                    </div>
                )
            })}
        </div>
    ) : <Shimmer />
 }