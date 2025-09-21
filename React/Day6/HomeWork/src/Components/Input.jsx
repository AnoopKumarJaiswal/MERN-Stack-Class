import { use, useState } from "react";

export function Input()
{
    const [item , setItem] = useState([])
    const [text , settext] =useState("")
    return (
        <div>
            <input value={text} type="text" className="border" onChange={(e) =>{
                 settext(e.target.value)
            }} />

            <button onClick={() =>{
                setItem([...item , text])
                settext("")
            }} >Add</button>

            {item.length > 0  && <ul>{item.map((item) =>{
                return <li>{item}</li>
            })}</ul>}
        </div>
    )
}