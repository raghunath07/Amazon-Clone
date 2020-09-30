import React, { createContext,  useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide he data layer
export const StateProvider = ({reducer , initialState, children}) => {
   return  <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

//Pull info from data layer
export const useStateValue = () => useContext(StateContext);