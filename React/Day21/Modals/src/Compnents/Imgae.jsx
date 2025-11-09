import { useState } from "react";
import Modal from "./Modals";

const Image = () =>{
     const imageArray = [
  "https://media.istockphoto.com/id/2147667601/photo/a-male-greater-one-horned-rhino-walks-in-an-alert-manner-with-head-raised-in-a-meadow.webp?a=1&b=1&s=612x612&w=0&k=20&c=1FtVCfIxilWfbbYN5Ufbs9BiphhXzEWQHBOTbGE-D0w=",
  "https://media.istockphoto.com/id/472108091/photo/camel-is-waiting-for-tourists-in-nubra-valley-leh.webp?a=1&b=1&s=612x612&w=0&k=20&c=DBbRm7bM-JVaiiYQa6ni6udM960XS5f4v0otUza4gyE=",
  "https://media.istockphoto.com/id/505913924/photo/eating-wild-male-cheetal-deer.webp?a=1&b=1&s=612x612&w=0&k=20&c=ddD9fF03lJT_9INANZxJ3ptKGF_83XnrgJODQiwmBnc=",
  "https://media.istockphoto.com/id/479037543/photo/tiger.jpg?s=612x612&w=0&k=20&c=VXJXu1oRAQb45zmH03u21nJCrFWHRqHPaJo3ZqIP3AQ=",
  "https://media.istockphoto.com/id/1190451660/photo/beautiful-giraffes-in-african-landscape.jpg?s=612x612&w=0&k=20&c=lwSuNE11thGp361fiAI4TCtKeHsgr9L9Y7mQNk-1mXo=",
  "https://media.istockphoto.com/id/1290803978/photo/herd-of-chital-deer-or-spotted-deer-in-bandipur-national-park-karnataka-india.jpg?s=612x612&w=0&k=20&c=DEbMCkvOeZG3wrLMZWD-elLtjTuHoK08iGEfwoun3-g=",
  "https://media.istockphoto.com/id/1364624347/photo/young-woman-snorkelling-beside-a-green-turtle-in-a-clear-blue-water-tropical-vacations.jpg?s=612x612&w=0&k=20&c=h5_k5yBKBG1d5QIacZEhjtadZKqiu9AiTXSNaaKrCs4=",
  "https://media.istockphoto.com/id/964611070/photo/funny-burrowing-owl-athene-cunicularia.jpg?s=612x612&w=0&k=20&c=H1uU0nYj-vUB13lWo19LQeZ7ToMty_fVjR3LD87xqaE=",
];


const [showModals, setShowModals] = useState(false)
const [curr , setCurr] = useState(-1)

  return (
    <div  className="relative">
    {showModals && <Modal setShowModals = {setShowModals} ImgSrc = {imageArray[curr]}/>}
        <div className='grid grid-cols-4'>
          {
            imageArray.map((item, index) =>{
              return (
                <div>
                  <img onClick={() =>{
                    setShowModals(true)
                    setCurr(index)
                  }} className='h-[350px] w-[500px]' src={item} alt="" />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}


export default Image 