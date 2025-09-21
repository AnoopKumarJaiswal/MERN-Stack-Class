import {useDispatch, useSelector} from "react-redux"
import stroe from "../Utills/Store"
import { deleteText } from "../Utills/Slice"

export function Display()
{
    const dis = useDispatch()
    const data = useSelector((s) =>{
        return s.list
    })
    return (
        <div className="h-[100vh] w-[50vw] flex items-center justify-center flex-col">
            <p className="font-bold text-5xl">Display</p>
            <div className="h-[90vh] w-[35vw] bg-amber-300">
                <div className=" p-[40px]">

                <div className="flex flex-col gap-[20px]">{data.map((item,index) =>{
                    return (
                        <div  key={index}  className="flex bg-amber-100 p-[20px] justify-between">
                            <li>{item.text}</li>
                            <p onClick={() =>{
                              dis(deleteText(item.id))
                            }} className="cursor-pointer">❌</p>
                        </div>
                    )
                })}</div>
                </div>
            </div>
        </div>
    )
}