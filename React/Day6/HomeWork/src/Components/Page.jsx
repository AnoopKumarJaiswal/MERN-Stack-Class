import { use, useState } from "react";
export function Page()
{
    const[showHome , setHome] = useState(false)
    const[page1, setpage1] = useState(false)
    const[page2, setpage2] = useState(false)

    return (
        <div>
            <div className="border h-[50px] flex justify-evenly"> 
                <button onMouseEnter={() =>{
                    setHome(true)
                }} onMouseLeave={() =>{
                    setHome(false)
                }} >Home
                <div className={"fixed " +(showHome ? "h-[600px] w-[200px] bg-amber-200" :"")}></div></button>
                <button  onMouseEnter={() =>{
                    setpage1(true)
                }} onMouseLeave={() =>{
                    setpage1(false)
                }} > About
                <div className={"fixed " +( page1? "h-[600px] w-[200px] bg-amber-200" :"")}></div></button>
                <button onMouseEnter={() =>{
                    setpage2(true)
                }} onMouseLeave={() =>{
                    setpage2(false)
                }} >Profile <div className={"fixed " +(page2 ? "h-[600px] w-[200px] bg-amber-200" :"")}></div></button>
            </div>
            
            <div></div>
        </div>
    )
}



