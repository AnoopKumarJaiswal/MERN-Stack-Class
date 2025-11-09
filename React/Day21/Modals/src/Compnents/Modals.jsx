import { useEffect } from "react"

const Modal = ({setShowModals , ImgSrc})=>{

     useEffect(() => {
    // Save current scroll position
    const scrollY = window.scrollY

    // Freeze background scroll
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    // Cleanup on unmount
    return () => {
      const y = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(y || '0') * -1) // restore original position
    }
  }, [])
    return (
        <div className="h-[100vh] w-[100vw] bg-white/50 flex justify-center items-center absolute">
            <div className="bg-white h-[50vh] w-[25vw] relative">
                  <button className="absolute right-2" onClick={() =>{
                    setShowModals(false)
                  }}>❌</button>
                <img className="h-[100%] w-[100%]" src={ImgSrc} alt="" />
            </div>
        </div>
    )
}
export default Modal