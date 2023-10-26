import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./states/language";

export default configureStore({
  reducer: {
    language: languageSlice.reducer,
  },
});
