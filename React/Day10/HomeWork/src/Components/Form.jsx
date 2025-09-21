import { Name } from "./Name"
export function Form({name , setName , age , setAge,address, setAddress, about, setAbout })
{
    return(
        <div className="flex flex-col   gap-[10px]">
            <input placeholder="type Name" onChange={(e) =>{setName(e.target.value)}} className="border w-[250px] bg-white rounded-md" type="text" />
            <input placeholder="type Age" onChange={(e) =>{setAge(e.target.value)}} className="border w-[250px] bg-white rounded-md" type="text" />
            <input placeholder="type Address" onChange={(e) =>{setAddress(e.target.value)}} className="border bg-white rounded-md w-[250px]" type="text" />
            <input placeholder="type About" onChange={(e) =>{setAbout(e.target.value)}} className="border w-[250px] bg-white rounded-md" type="text" />
        </div>
    )
}