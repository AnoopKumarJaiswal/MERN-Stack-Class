import { useSelector } from "react-redux";
import LoadingButton from "./Spinner";

export function Display({ selectItem,  aires, showBtn}) {
  const reciepes = useSelector((store) => store.reciepe);
  const myreciepe = reciepes[selectItem - 1];
 
  
  return (
    (
      <div className="w-[45vw] mt-4 min-h-[50vh] bg-gradient-to-br from-amber-50 to-orange-100 border border-orange-200 rounded-3xl shadow-xl p-10 transition-transform hover:scale-[1.01] ">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 border-b-2 border-orange-300 pb-3">
          📖 Your Recipe
        </h2>


        {myreciepe && (<div>
        <h1  className="text-2xl font-semibold text-orange-700 mb-6 ml-[230px]">
         {myreciepe?.name || "Select a recipe to view"}
        </h1>

        {/* Ingredients Section */}
        <h3 className="text-xl text-green-800 font-bold mb-3">
          🥗 Ingredients
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          {myreciepe?.ingredients.map((item, idx) => (
            <li
              key={idx}
              className="text-gray-700 bg-white/70 px-3 py-1 rounded-lg shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Steps Section */}
        <h3 className="text-xl text-blue-800 font-bold mb-3">👨‍🍳 Steps</h3>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          {myreciepe?.process.map((item, idx) => (
            <p
              key={idx}
              className="text-gray-700 leading-relaxed bg-white/70 px-3 py-2 rounded-lg shadow-sm"
            >
              {item}
            </p>
          ))}
        </ol>
       </div>)}


       {
        aires.id && (<div>
        <h1  className="text-2xl font-semibold text-orange-700 mb-6 ml-[230px]">
         {aires?.name || "Select a recipe to view"}
        </h1>

        {/* Ingredients Section */}
        <h3 className="text-xl text-green-800 font-bold mb-3">
          🥗 Ingredients
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          {aires?.ingredients.map((item, idx) => (
            <li
              key={idx}
              className="text-gray-700 bg-white/70 px-3 py-1 rounded-lg shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Steps Section */}
        <h3 className="text-xl text-blue-800 font-bold mb-3">👨‍🍳 Steps</h3>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          {aires?.process.map((item, idx) => (
            <p
              key={idx}
              className="text-gray-700 leading-relaxed bg-white/70 px-3 py-2 rounded-lg shadow-sm"
            >
              {item}
            </p>
          ))}
        </ol>
       </div>)
       }
       {!showBtn && 
       <div className="h-[100%] w-[100%] flex justify-center items-center">
         <LoadingButton />
       </div>}
      </div>
    )
  );
}
