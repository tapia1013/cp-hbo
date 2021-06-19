import React, { useContext, useState } from 'react';


export const StateContext = React.createContext();



export function useStateContext() {
  return useContext(StateContext)
}


// create actual provider
export function HBOProvider({ children }) {
  const [user, setUser] = useState('');
  const defaultUserImg = 'https://pbs.twimg.com/profile_images/378800000519722378/c0fd8906bcfeac191dac58c00e6dcda8.jpeg';

  const createUserAction = (e) => {
    setUser(e.target.value)
    console.log(user);
  }

  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);


  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        setAccountModalOpenAction
      }}
    >
      {children}
    </StateContext.Provider>
  )
}






