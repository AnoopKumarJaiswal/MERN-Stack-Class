export function Products({img, Pname, cat, price,instock, rating })
{
  return (
    <div style={{  boxShadow : "10px 10px 10px "}} className="flex flex-col align-middle border p-3 rounded-3xl">
        <img style={{height : "200px", width : "90%"}} className="h-[200px]" src={img} alt="" />
        <div>
            <h1>{Pname.length > 21 ? Pname.slice(0,21) + "..." : Pname}</h1>
            <p>₹{Math.ceil(price / 100)}</p>
            <p>{cat}</p>
            <p>{instock}</p>
            <p>{"⭐".repeat(Math.floor(rating))}</p>
        </div>
    </div>
  )
}