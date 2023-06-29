import React from "react";
const Context = React.createContext();

function ContextProvider(props){
    return(
        <Context.Provider value={"test"}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider , Context} ;