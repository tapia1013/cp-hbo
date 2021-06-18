import React, { useContext, useState } from 'react';


export const StateContext = React.createContext();



export function useStateContext() {
  return useContext(StateContext)
}


// create actual provider
export function HBOProvider({ children }) {
  // return back
  return (
    <StateContext.Provider
      value={{
        test: 'test'
      }}
    >
      {children}
    </StateContext.Provider>
  )
}






