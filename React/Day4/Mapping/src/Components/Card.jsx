export function Card({name, img, price,cat,desc})
{
    return (
        <div style={{width:"20vw", border :"1px solid black", }}>
            <img style={{height : "250px", width : "90%"}} src= {img} alt="" />
            
            <div>
            <h2>{name}</h2>
            <p1>{price}</p1>
            <p1>{cat}</p1>
            <p1>{desc}</p1>
            </div>
        </div>
    )
}


