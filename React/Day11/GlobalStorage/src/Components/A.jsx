import { useContext } from "react"
import { B } from "./B"
import { countContext } from "./B"
export function A()
{

    const {count} = useContext(countContext)
    return (
        <div>
            <p>{naam}</p>
            <B />

        </div>
    )
}