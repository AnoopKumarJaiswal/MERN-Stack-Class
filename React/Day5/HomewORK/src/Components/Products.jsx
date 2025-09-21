export function Product({name , price , instock, id ,img1})
{
    return (
        <div className="border w-[250px] p-2  bg-amber-50 rounded-3xl shadow-[10px_10px_10px_white] flex flex-col items-center h-[290px] ">
            <img src={img1} alt="" />
            
           

            <p className="text-3xl">{name}</p>
            <p>₹{price}</p>
            <p>{instock ? "true" :"false"}</p>
            <p>{id}</p>
        </div>
    )
}