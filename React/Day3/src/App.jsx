import Side from "./Components/Side"
import MainContent from "./maincontent"
function App()
{
  
  return (
    <>
     {/* {Navbar()} */}
    {/* <Navbar></Navbar> */}
      <Navbar name = "Anoop" age = "24" />
      <div style={{ display : "flex", gap : "20px"}}>

      <Side />
      <MainContent />
      </div>
    </>
  )
}


export default App


function Navbar()
{
  return (
    <div style={{display : "flex", justifyContent : "space-between", color : "white" , backgroundColor : "black" , height: "80px" ,alignItems : "center", padding: "0px 20px 0px 20px"}}>
      <h3>Logo</h3>
      <div style={{display : "flex", gap : "20px"}}>
        <a style={{textDecoration : "none", color: "white"}} href="">Homme</a>
        <a style={{textDecoration : "none", color: "white"}} href="">About</a>
        <a style={{textDecoration : "none", color: "white"}} href="">Profile</a>
      </div>
    </div>
  )
}








// function Navbar(props )
// {
//   return (
//     <>
//     <h3>Hello</h3>
//     <h3>{props.name}, {props.age}</h3>
//     </>
//   )
// }



// function Navbar(props)
// {
//   const{name, age} = props
//   return(
//     <>
//     <h3>{name}, {age}</h3>
//     </>
//   )
// }




// function Navbar({name, age})
// {
//   return (
//     <>
//     <h3>{name}, {age}</h3>
//     </>
//   )
// }