import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonDataApi } from '../../services/Api';
import { setPokemons } from '../../slices/infoPokemonsSlice/infoPokemonsSlice';
import Card from './Card';

export default function CardContainer() {
  const arrPokemons = useSelector(state => state.arrPokemons);
  const info = useSelector(state => state.infoPokemons);
  const dispatch = useDispatch();

  const fnDataPkm = async () => {
    if (arrPokemons !== [] && info.length === 0) {
      let arrInfo = [];
      await arrPokemons.map(async (pk) => {
        let dataApi = await pokemonDataApi(pk.url);
        dataApi = JSON.parse(dataApi);
        arrInfo = [...arrInfo, dataApi]
        dispatch(setPokemons(arrInfo))
      })
    }
  }

  useEffect(() => {
    if (info !== []) {
      fnDataPkm();
    }
  }, [])

  return (
    <>
      {
        info.length > 1 ?
        info.map((pk, i)=>{
          return(
            <Card
            key={i}
            name = {pk.name}
            />
          )
        })
        :
        <h2>cargando</h2>
      }
    </>
  )
}
