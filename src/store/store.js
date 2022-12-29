import { configureStore } from "@reduxjs/toolkit";
import arrayPokemonsSlice from "../slices/arrayPokemonsSlice/arrayPokemonsSlice";
import infoPokemonsSlice from "../slices/infoPokemonsSlice/infoPokemonsSlice";


const store = configureStore({
  reducer:{
    arrPokemons: arrayPokemonsSlice,
    infoPokemons: infoPokemonsSlice,
  },
});
export default store;