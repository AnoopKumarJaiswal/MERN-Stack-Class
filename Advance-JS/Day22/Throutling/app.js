const Btn = document.querySelector("button")

const buttonclickHandler = () =>{
    document.body.style.backgroundColor = `rgb(${getNumber()} , ${getNumber()} , ${getNumber()})`
}


function getNumber()
{
    return Math.floor(Math.random() *255)
}

function throuttle(fn , delay)
{
    let prev = 0
    return function()
    {
        let now = Date.now()
        if(now - prev >= delay)
        {
            fn()
            prev = now
        }
    }
}



const throuttledClickHandler = throuttle(buttonclickHandler, 2000)
Btn.addEventListener("click" , throuttledClickHandler)






