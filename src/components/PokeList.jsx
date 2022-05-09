import React from 'react';
// import { usePokeContex } from '../context/PokeContext';
// import './Component.css';

export default function PokeList({grab}) {
  // const { search, setSearch } = usePokeContex();

  return (
    <article key={grab.id} className='pokecard'>
        <div className='stats' > 
        <h3>{grab.pokemon}</h3>
        <img alt='Image of a pokemon' src={grab.url_image}></img>
        <p>HP: {grab.hp} Hidden ability: ({grab.ability_hidden}) Speed: ({grab.speed}) Attack: ({grab.attack}) Defense: ({grab.defense})</p>
        </div>
    </article>
  );
}