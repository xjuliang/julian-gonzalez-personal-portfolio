import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "EN",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      action.payload == "EN" ? (state.value = "EN") : (state.value = "ES");
    },
  },
});

export const languageActions = languageSlice.actions;
