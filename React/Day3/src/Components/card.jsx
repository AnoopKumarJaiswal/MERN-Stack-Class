function Card({name})
{
    return (
        <div style={{height:"250px" , width : "200px" ,backgroundColor : "yellow", boxShadow : "10px 10px 10px  black", borderRadius: "10px" , }}>
          <h1>{name}</h1>
        </div>
    )
}

export default Card