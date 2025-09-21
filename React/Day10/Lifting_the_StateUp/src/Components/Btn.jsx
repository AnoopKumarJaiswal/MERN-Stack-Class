export function Btn({count,setCount})
{
    return (
        <div className="flex w-[50vw] h-[100vh] border items-center justify-center gap-[20px] text-white text-2xl bg-amber-100">
            <button className="border h-[50px] w-[100px] rounded-3xl  bg-green-800" onClick={() =>{setCount(count+1)}}>+</button>
            <button className="border h-[50px] w-[100px] rounded-3xl  bg-amber-800" onClick={() =>{setCount(0)}}>Reset</button>
            <button className="border h-[50px] w-[100px] rounded-3xl  bg-yellow-800" onClick={() =>{setCount(count-1)}}>-</button>
        </div>
    )
}