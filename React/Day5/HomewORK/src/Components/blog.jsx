export function Blog({title , author, like ,id})
{
    return (
        <div className="border w-[250px] p-2 bg-amber-50 rounded-3xl shadow-[10px_10px_10px_white] flex flex-col items-center">
            <p className="text-3xl">{title.length > 12 ? title.slice(0, 12) + "..." : title}</p>
            <p>{author}</p>
            <p>❤️{like} like</p>
            <p>{id}</p>
        </div>
    )
}