import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardContainer from '../components/Card/CardContainer'
import { Api } from '../services/Api'
import { setData } from '../slices/arrayPokemonsSlice/arrayPokemonsSlice';


export default function PokemonesHome() {


    const dispatch = useDispatch();

    const onHandleApi = async () => {
        if (!localStorage.getItem('jsonPkm')) {
            console.log('api principal')
            const jsonPokemon = await Api();
            dispatch(setData(JSON.parse(jsonPokemon)));
        }
    }



    useEffect(() => {
        onHandleApi();
    }, [])


    return (
        <>
            <div>
                <CardContainer />
            </div>
            <div>
                <button>PREVIOUS PAGE</button>
                <button>NEXT PAGE</button>
            </div>
        </>
    )
}
