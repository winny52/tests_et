import React from "react";
import Menu from "./menu";
import Analyse from "./analysisChart";
function Analysis({user}){
    return(
        <div className="h-screen bg-blue-200 flex">
            <Menu/>
            <Analyse user={user}/>
        </div>

    )
}

export default Analysis