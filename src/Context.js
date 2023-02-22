import React from "react";
const Context = React.createContext();

function ContextProvider(props){
    return(
        <Context.Provider value={"ga"}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider , Context} ;