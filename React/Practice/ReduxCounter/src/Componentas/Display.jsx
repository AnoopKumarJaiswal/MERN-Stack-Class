import { useSelector } from "react-redux"

export function Display()
{
    const sliceData = useSelector((s) =>{
        return s.counter
    })
    return (
        <div className="h-[100vh] w-[50vw] flex justify-center items-center text-9xl">
            <div>
                <p>{sliceData}</p>
            </div>
        </div>
    )
}