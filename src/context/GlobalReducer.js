export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      localStorage.setItem("DISCORD_CLONE-token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case "REGISTER_FAIL":
      localStorage.removeItem("DISCORD_CLONE-token");
      return {
        ...state,
        ...action.payload,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case "RESET_ERROR":
      return { ...state, error: {}, serverError: {} };
    default:
      return state;
  }
};
