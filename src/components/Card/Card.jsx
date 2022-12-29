import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Card.module.css'

export default function Card({ name }) {


/*     console.log(info) */
    
    return (
        <>
            <div className={styles.cardPokemon}>
                <div className={styles.imagePokemon}>
                    {/* {infoPokemons ==! undefined ? <img src={infoPokemons.sprites.front_default} alt="" /> : <p>Cargando</p>} */}
                </div>
                <div className={styles.nombrePokemon}>
                    {name}
                </div>
                <div className={styles.tipoPokemon}>
                    {/* {url} */}
                </div>
            </div>
        </>
    )
}
