import Card from "./Components/card"

function MainContent()
{
    return(
    
        <main style={{height : "90vh", width : "100%" ,  display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", gap : "20px" }}>

            <Card name = "TV" />
            <Card name = "Fridge"/>
            <Card name = "Cooler"/>
            <Card name = "AC"/>
            <Card name = "Fan"/>
            <Card name = "LED"/>
            <Card name = "LCD"/>
            <Card name = "Washing Machine"/>
            <Card name = ""/>
            <Card name = ""/>
        </main>
    )
}


export default MainContent