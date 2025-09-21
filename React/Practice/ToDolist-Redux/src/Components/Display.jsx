import { useDispatch, useSelector } from "react-redux";
import { deleteText } from "../Utills/Slice";

export function Display()
{
    const disdelete = useDispatch()
    const data = useSelector((s) =>{
           return s.todolist
    })
    const people = [
  { name: "Anoop", age: 25 },
  { name: "Rahul", age: 28 },
  { name: "Priya", age: 22 },
  { name: "Suman", age: 30 }
];
    return (
        <div className="h-[100vh] w-[50vw] border-2 flex flex-col justify-center items-center gap-[30px]">
            <h1 className="font-bold text-6xl">Display</h1>
            <div className="h-[80vh] bg-amber-200 w-[35vw]">
              <div className=" flex flex-col gap-[20px] py-[30px] items-center"> {data.map((item) =>{
                return (
                    <div className="flex justify-between p-[20px] bg-amber-50 w-[80%]">
                        <p>{item.text}</p>
                        <p onClick={() =>{
                            disdelete(deleteText(item.id))
                        }} className="cursor-pointer">❌</p>
                    </div>
                )
              })}</div>
            </div>
        </div>
    )
}