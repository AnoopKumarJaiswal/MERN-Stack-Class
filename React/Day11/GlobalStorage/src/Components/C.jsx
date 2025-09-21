import { useContext } from "react"
import { B } from "./B"
import { countContext } from "./B"

export function C()
{
    const count = useContext(countContext)
    return (
        <div>
            {count}
        </div>
    )
}