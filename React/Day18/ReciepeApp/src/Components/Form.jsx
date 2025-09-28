import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast"
import { GoogleGenAI } from "@google/genai";
import { addReciepe } from "../Utills/CacheSlice";

const ai = new GoogleGenAI({apiKey : import.meta.env.VITE_API_KEY});

export function Form({ selectItem, setSelectItem ,aires, setAiRes,showBtn , setShowBtn }) {
  const data = useSelector((store) => store.reciepe);
  const data2 = useSelector((store) => store.cache);
  const [temp, setTemp] = useState(-1);
  const [text, setText] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const dispatch = useDispatch()
  


useEffect(() =>{
  let temp = text.trim().toLowerCase()
    if(temp.length == 0)
    {
      setSuggestion([])
      return
    }
   let ans = data2.filter((item) =>{
     return item.query.includes(temp)
   })
   setSuggestion(ans)
  } , [text])
  return (
    <div className=" w-[45vw] p-[20px] flex justify-center min-h-[50vh] ">
      <div className="w-[50vw] bg-white rounded-2xl shadow-2xl p-8 border border-indigo-200">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Add Recipe
        </h1>

        <div className="flex flex-col gap-5">
          {/* Input for new recipe */}
          <input value={text} onChange={(e) =>{
            setText(e.target.value)
          }}
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            type="text"
            placeholder="Enter recipe name"
          />

          {suggestion.length > 0 &&<div className="border border-gray-300">

            {
              suggestion.map((item) =>{
                return <p onClick={() =>{
                  setText(item.query)
                }} className="hover:bg-gray-300 px-[5px]">{item.query}</p>
              })
            }
            {/* <p className="hover:bg-gray-300 px-[5px]">Chai</p>
            <p className="hover:bg-gray-300 px-[5px]">Chole</p>
            <p className="hover:bg-gray-300 px-[5px]">Coffee</p> */}
          </div>}



           {/* OR */}
         <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

          {/* Dropdown */}
          <select
         value={selectItem} 
            onChange={(e) => setTemp(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          >
            <option selected disabled value="">
              Select Recipe
            </option>
            {data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Button */}
          {showBtn && <button
            onClick={() =>{
              setAiRes({})
              setSelectItem("")
              setTemp(-1)
              if(text.length > 0) 
              {
                 async function getDataFromAPI()
                 {
                     setShowBtn(false)
                     const res = await ai.models.generateContent({
                         model : "gemini-2.5-flash",
                         contents : prompt + text
                     })
                     dispatch(addReciepe({query: text , aiResult : JSON.parse(res.text.slice(8,res.text.length-4))}))
                     setShowBtn(true)
                     setAiRes(JSON.parse(res.text.slice(8,res.text.length-4)));  
                     setText("")
                     setSuggestion([])
                 }
                 const foundItem = data2.find((item) =>{
                    return item.query == text
                  })
                  if(!foundItem)
                  {
                   getDataFromAPI()
                   return  
                  }
                  else
                  {
                    setAiRes(foundItem?.aiResult)
                    setText("")
                  }
              }
              else if(temp != -1)
              {
                 setSelectItem(temp)
                 
              }
              else
              {
                    toast.error("Please select Your Reciepe")
              }
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl shadow-md transition"
          >
          ➕ Generate Recipe
          </button>}
        </div>
      </div>
    </div>
  );
}





let prompt = `You are a recipe generator.  
I will provide the name of a dish, and you must return a JSON object with the following structure:  

{
  id: <unique integer>,
  name: "<dish name>",
  ingredients: [<list of ingredients with measurements>],
  process: [<step-by-step cooking instructions as an array of strings with each string being numbered>]
}

Rules:
- Return only JSON. No extra text, no code blocks, no explanations.  
- Ensure the JSON is valid and can be parsed directly with JSON.parse().  


Dish name: `