export function Navbar()
{
    return (
        <div className="h-[12vh] w-[100vw] border bg-black flex justify-between p-[20px] ">
            <h1 className="text-amber-50 text-3xl">Logo</h1>
           
            <div className="flex gap-[20px]">
                <a className="text-amber-50" href="">Home</a>
                <a className="text-amber-50" href="">About</a>
                <a className="text-amber-50" href="">Profile</a>
            </div>
        
        </div>
    )
}