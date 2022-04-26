import { fetchByType, fetchPokemon, fetchType } from '../../services/pokemon'
import { usePokeContex } from '../../context/PokeContext';
import Search from '../../components/Search';

import './Main.css';


import React, { useEffect } from 'react'

export default function Main() {
    const { selectedType, pokemon, setPokemon, search, order, setTypes, load, setLoad } = usePokeContex();
    

    useEffect(() => {
        const allPokemon = async () => {
          const everyPokemon = await fetchPokemon();
          setPokemon(everyPokemon);
          const pokeTypes = await fetchType();
          setTypes(['All', ...pokeTypes]);
          
    
          setTimeout(() => {
            setLoad(false);
          }, 5000);  
        };
        allPokemon();
      }, [setPokemon, setTypes, setLoad]);
    
      useEffect(() => {
        const userType = async () => { 
          const matchingPokemon = await fetchByType(selectedType, null, order);
          setPokemon(matchingPokemon);
        };
        if (selectedType) {
          userType();
        }
      }, [selectedType, order, setPokemon]);
    
      const searchPokemon = async () => {
        const data = await fetchByType(selectedType, search, null);
        setPokemon(data);
      };

      if (load) return <div className='loader'>Loading, please wait.</div>;

  return (
    <>
    <div className='inputs'>
        <Search callback={searchPokemon}/>
        
      </div>
    <div className='pokecard'>
        {pokemon.map((grab) => (
          <div className='stats' key={grab.id}> 
            <h3>{grab.pokemon}</h3>
            <img alt='Image of a pokemon' src={grab.url_image}></img>
            <p>HP: {grab.hp} Hidden ability: ({grab.ability_hidden}) Speed: ({grab.speed}) Attack: ({grab.attack}) Defense: ({grab.defense})</p>
          </div>
        ))}
      </div> 
    </>
  )
}

