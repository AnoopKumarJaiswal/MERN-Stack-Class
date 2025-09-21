import { useEffect } from "react";

export function Shimmer()
{
    return (
        <div className="grid grid-cols-4 gap-[20px] p-[50px] ">
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
            <div className="bg-gray-100  border-blue-200 h-[400px] w-[300px] rounded-3xl"></div>
        </div>
    )
}