import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  emerald: "emerald",
  business: "business",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.emerald;
  return document.documentElement.setAttribute("data-theme", theme);
};

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state) => {
      const { business, emerald } = themes;
      state.theme = state.theme === business ? emerald : business;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
