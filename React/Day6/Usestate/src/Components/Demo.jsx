import { use, useState } from "react";

export function Demo()
{
    const[showsidebar, setShowsidebar] = useState(false)
    const[darkMode, setDarkmode] = useState(false)

    

    return (
        <>

        <div>
            {/* <button onClick={() =>{
                 setDarkmode(true)
            }}>🌚</button>
            <button onClick={() =>{
                setDarkmode(false)
            }}>☀️</button> */}


            {/* <button onClick={() =>{
                setDarkmode(!darkMode)
            }}>Toggle</button> */}

            <button onClick={() =>{
                setDarkmode(!darkMode)
            }}>{darkMode ? "☀️" : "🌚"}</button>
        </div>
        <div className="flex">
            <div onMouseEnter={() =>{
                setShowsidebar(true)
            }} 
            onMouseLeave={() =>{
                setShowsidebar(false)
            }} className={"border bg-amber-200 h-[100vh] " + (showsidebar ? "w-[20vw]" :" w-[5vw]") }>Sidebar</div>
            <div className={" border h-[100vh] w-[95vw] " +(darkMode ? "bg-black" : "bg-white")  }>Main</div>
        </div>

        </>
    )
}