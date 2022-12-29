import { createSlice } from "@reduxjs/toolkit";

export const infoPokemonsSlice = createSlice({
    name: "infoPokemons",
    initialState: JSON.parse(localStorage.getItem("infoPkm")) ?? [],
    reducers: {
        setPokemons: (state, action) => {
            localStorage.setItem(
                "infoPkm",
                JSON.stringify(...state, action.payload)
            );
        }
    },
});
export const { setPokemons } = infoPokemonsSlice.actions;
export default infoPokemonsSlice.reducer;