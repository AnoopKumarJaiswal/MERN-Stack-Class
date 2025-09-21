export function Profile({name , age , email , id, img })
{
    return (
        <div className="border w-[250px] p-2 bg-amber-50 rounded-2xl shadow-[10px_10px_10px_white] ">
            <img className="ml-[50px] rounded-[60px]" src={img} alt="" />
            
            <div className="flex flex-col  items-center">

            <h1 className="text-3xl">{name}</h1>
            <p className="pt-0 pr-0 pb-0 pl-[30px]">{age} years</p>
            <p >{email}</p>
            <p className="pt-0 pr-0 pb-0 pl-[30px]">{id}</p>
            </div>
        </div>
    )
}