import { useSelector } from "react-redux"

export function Display()
{
    const slicedata = useSelector((s) => {
        return s.counter
      })
    return (
        <div className="h-[100vh] w-[50vw] border-4 border-blue-950 flex justify-center items-center text-9xl bg-amber-200">
            <div>
                <p>{slicedata}</p>
            </div>
        </div>
    )
}