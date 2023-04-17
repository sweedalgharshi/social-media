import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: null,
  user: {
    _id: "6438e5bf353543198b32a713",
    username: "kaz",
    email: "kaz@gmail.com",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    following: [],
    isAdmin: false,
    city: "Sweden",
    desc: "Hey Friends",
    from: "Madrid",
    relationship: 1,
  },
  isFetching: null,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
