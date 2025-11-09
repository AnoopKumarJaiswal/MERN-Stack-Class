import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"

const OTP = () =>{

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()

    const [refArr, setRefArr] = useState([ref1, ref2, ref3, ref4, ref5, ref6])
    const [currIdx, setCurrIdx] = useState(0)
    const [otpInput , setOtpInput] = useState(["","","","","",""])
    let allowedchar = ["1","2","3","4","5","6","7","8","9","0"]
    

    useEffect(() =>{
      refArr[currIdx].current.focus()
    },[currIdx])

    function OtpHandler(e)
    {
        let val = e.target.value
       if(!allowedchar.includes(val))
       {
        return
       }
      if(currIdx < refArr.length-1)
      {
        setCurrIdx(currIdx + 1)
      }
      let temp = [...otpInput]
      temp[currIdx] = val
      setOtpInput(temp)
    }
    return(
        <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-[#8245ec] flex-col gap-[20px] ">
            <h1 className="text-4xl text-white font-bold">OTP GENERATOR</h1>
            <div className="border h-[350px] w-[550px] bg-white rounded-xl flex justify-center items-center gap-6 flex-col">
                <div className="flex gap-3">

                    {
                        refArr.map((item,index) =>{
                            return <input key={index} ref={item} value={otpInput[index]} maxLength={1} onChange={(e) => OtpHandler(e)} type="text" onKeyDown={(e) =>{
                               if(e.key == "Backspace")
                               {
                                  let  temp = [...otpInput]
                                  temp[index] = ""
                                  setOtpInput(temp)
                                  if(currIdx > 0)
                                  {
                                      setCurrIdx(currIdx - 1)   
                                  }
                               }
                               else if(e.key == "ArrowLeft" && currIdx > 0)
                               {
                                  setCurrIdx(currIdx - 1)
                               }
                               else if(e.key == "ArrowRight" && currIdx < 5)
                               {
                                 setCurrIdx(currIdx + 1)
                               }
                            }}  className="border h-[50px] w-[50px] rounded-lg pl-[15px] text-2xl [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
                        })
                    }
                 
                </div>
               
                 <button className="border p-[8px_20px] text-white bg-[#8245ec] rounded-2xl text-2xl hover:scale-[1.07] cursor-pointer" onClick={() =>{
                    let otp = otpInput.join("")
                    if(otp.length < 6)
                    {
                        toast.error("Invalid OTP")
                        return
                    }
                    
                    toast.success(`Your OTP : ${otp}`)
                    
                 }}>Print</button>
            </div>
        </div>
    )
}
export default OTP