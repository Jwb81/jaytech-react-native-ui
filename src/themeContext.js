import React, { createContext, useReducer } from "react";

const themeModes = {
  LIGHT: "LIGHT",
  DARK: "DARK"
};

let reducer = (state, action) => {
  const { type, ...sanitized } = action;

  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        themeModes:
          state.theme === themeModes.LIGHT ? themeModes.DARK : themeModes.LIGHT
      };

    default:
      return state;
  }
};

const initialState = {
  theme: {},
  themeMode: themeModes.LIGHT
};

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ theme, children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    Object.assign({}, initialState, { theme })
  );

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
