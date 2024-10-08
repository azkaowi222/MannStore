import React, { createContext, useReducer } from "react";

// Buat context
export const GlobalContext = createContext();

// Buat reducer
const initialState = {
  user: null,
  count: 0,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_COUNT":
      return { ...state, count: action.payload };
    case "SET_PRODUCT":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

// Buat provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
