import React from 'react';
// import { usePokeContex } from '../context/PokeContext';
// import './Component.css';

export default function Search({ callback, search, setSearch}) {
  // const { search, setSearch } = usePokeContex();

  return (
    <div className='searchcss'>
      <input value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={callback}>Search</button>
    </div>
  );
}
