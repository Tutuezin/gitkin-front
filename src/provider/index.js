import { createContext, useContext, useReducer, useRef } from "react";
import { buildActions } from "./build-actions";
import { reducer } from "./reducer";

const initialState = {
  name: "",
  picture: "",
  occupation: "",
  memberSince: "",
  aboutMe: "",
  location: "",
  work: "",
  github: "",
  linkedin: "",
  twitter: "",
  website: "",
  email: "",
  stringAvatar: "",
  repositories: "",
};

const Context = createContext(null); //TODO Pesquisar como tipar este createContext

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(Context);

  return context;
};
