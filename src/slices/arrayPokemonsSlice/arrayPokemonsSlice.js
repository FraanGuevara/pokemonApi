import { createSlice } from "@reduxjs/toolkit";

export const arrayPokemonsSlice = createSlice({
  name: "arrayPokemons",
  initialState: JSON.parse(localStorage.getItem("jsonPkm")) ?? [],
  reducers: {
    setData: (state, action) => {
      localStorage.setItem(
        "jsonPkm",
        JSON.stringify(...state, action.payload)
      );
    }
  },
});
export const { setData } = arrayPokemonsSlice.actions;
export default arrayPokemonsSlice.reducer;