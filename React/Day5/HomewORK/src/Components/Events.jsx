export function Eventts({name, date,location , id})
{
    return (
        <div className="border w-[250px] p-2 bg-amber-50 rounded-3xl shadow-[10px_10px_10px_white] flex flex-col items-center">
           <p className="text-3xl">{name.length > 10 ? name.slice(0,10) + "..." : name}</p>
           <p>{date}</p>
           <p>📌{location}</p>
           <p>{id}</p>
        </div>
    )
}