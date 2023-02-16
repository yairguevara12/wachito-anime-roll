import React from "react";
const Context = React.createContext();

function contextProvider(props){
    return(
        <Context.Provider value={"ga"}>
            {props.children}
        </Context.Provider>
    )
}

export {contextProvider , Context} ;