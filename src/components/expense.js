import React from "react"

function Expense({expense}){
    const{amount,name,category,date} = expense
    return(
        <div className="flex rounded-md bg-blue-400 m-4 p-2 w-96 justify-between">
            <div className="">
               <div className="flex ">
               <p className="p-1 mr-1 rounded-md bg-blue-200">{date}</p>
                <p className="p-1 ml-1 rounded-md bg-blue-200">{category}</p>
               </div>
               <p>{name}</p>
            </div>
            <div className="mr-2">
                <p className="pb-2">COST</p>
                <p>Ksh.{amount}</p>
            </div>
        </div>
    )


}
export default Expense
