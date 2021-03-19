import { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

const initialState = {
  token: localStorage.getItem("DISCORD_CLONE-token"),
  user: null,
  isAuthenticated: null,
  loading: true,
  registerValidationError: {},
  loginValidationError: {},
  serverError: {},
  authError: {},
  channels: [],
  selectedChannel: {},
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
      else if (rawRes.status === 500) {
        dispatch({
          type: "REGISTER_FAIL",
          payload: { serverError: "Something went wrong" },
        });
      } else dispatch({ type: "REGISTER_FAIL", payload: res });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: { serverError: "Something went wrong" },
      });
    }
  }

  async function loginUser(data) {
    try {
      const rawRes = await fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await rawRes.json();
      if (rawRes.status === 200)
        dispatch({ type: "LOGIN_SUCCESS", payload: res });
      else if (rawRes.status === 500) {
        dispatch({
          type: "LOGIN_FAIL",
          payload: { serverError: "Something went wrong" },
        });
      } else dispatch({ type: "REGISTER_FAIL", payload: res });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: { serverError: "Something went wrong" },
      });
    }
  }

  function resetError() {
    dispatch({ type: "RESET_ERROR" });
  }

  async function loadUser() {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("DISCORD_CLONE-token");
      if (token) headers["auth-token"] = token;
      const rawRes = await fetch(`${BASE_URL}/api/user/`, {
        method: "GET",
        headers,
      });
      const res = await rawRes.json();
      if (rawRes.status === 200) {
        dispatch({ type: "USER_LOAD_SUCCESS", payload: res });
      } else if (rawRes.status === 500) {
        dispatch({
          type: "USER_LOAD_FAIL",
          payload: { serverError: "Something went wrong" },
        });
      } else {
        dispatch({
          type: "USER_LOAD_FAIL",
          payload: res,
        });
      }
    } catch (err) {
      dispatch({
        type: "USER_LOAD_FAIL",
        payload: { serverError: "Something went wrong" },
      });
    }
  }

  function logout() {
    dispatch({ type: "USER_LOGOUT" });
  }

  async function loadChannels() {
    //TODO: not very efficient to load all messages of every channel (it just works but needs to be changed)
    if (state.isAuthenticated) {
      const headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("DISCORD_CLONE-token");
      if (token) headers["auth-token"] = token;
      const rawRes = await fetch(`${BASE_URL}/api/channels/all`, {
        method: "GET",
        headers,
      });
      const res = await rawRes.json();
      if (rawRes.status === 200) {
        dispatch({ type: "CHANNELS_LOAD_SUCCESS", payload: res });
      }
      //TODO: handle loading channels fail
    }
  }

  function changeSelectedChannel(id) {
    const channel = state.channels.filter((ch) => ch._id === id);
    dispatch({ type: "CHANGE_SELECTED_CHANNEL", payload: channel[0] });
  }

  async function sendMessage(channelid, text) {
    const headers = {
      "Content-Type": "application/json",
    };
    const token = localStorage.getItem("DISCORD_CLONE-token");
    if (token) headers["auth-token"] = token;
    const rawRes = await fetch(`${BASE_URL}/api/channels/messages/new`, {
      method: "POST",
      headers,
      body: JSON.stringify({ channelid, text }),
    });
    const res = await rawRes.json();
    console.log(res);
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        registerUser,
        resetError,
        loadUser,
        loginUser,
        logout,
        loadChannels,
        changeSelectedChannel,
        sendMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
