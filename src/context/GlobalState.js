import { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

const initialState = {
  token: localStorage.getItem("DISCORD_CLONE-token"),
  user: null,
  isAuthenticated: null,
  loading: true,
  error: {},
  serverError: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const BASE_URL = "http://localhost:5000";

  async function registerUser(data) {
    try {
      const rawRes = await fetch(`${BASE_URL}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await rawRes.json();
      if (rawRes.status === 200)
        dispatch({ type: "REGISTER_SUCCESS", payload: res });
      else dispatch({ type: "REGISTER_FAIL", payload: res });
      console.log("rawRES", rawRes);
      console.log("res", res);
    } catch (err) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: { serverError: "Something went wrong" },
      });
      console.error(err);
    }
  }

  function resetError() {
    dispatch({ type: "RESET_ERROR" });
  }

  return (
    <GlobalContext.Provider value={{ ...state, registerUser, resetError }}>
      {children}
    </GlobalContext.Provider>
  );
};
