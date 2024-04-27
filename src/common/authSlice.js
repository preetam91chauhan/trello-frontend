import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  tokens: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { updateToken } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
