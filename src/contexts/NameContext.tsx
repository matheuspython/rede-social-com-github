import React, { createContext, useState, ReactNode, FC } from "react";

interface PropsOFProvider {
  children: ReactNode
}

type UserType = {
  name: string;
};
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>
}


const DEFAULT_VALUE = {
  state: {
    name: "",
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const ContextUserProvider:React.FC= ({children}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider
     value={{
       state,
       setState
    }}
    >
      { children }
    </UserContext.Provider>
  );
};
export { ContextUserProvider }
export default UserContext