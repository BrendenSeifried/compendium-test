import { fetchByType, fetchPokemon, fetchType } from '../../services/pokemon';
import { usePokeContex } from '../../context/PokeContext';
import Search from '../../components/Search';

import './Main.css';

import React, { useEffect, useState } from 'react';
import PokeList from '../../components/PokeList';

export default function Main() {
  // const { selectedType, pokemon, setPokemon, search, order, setTypes } = usePokeContex();
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('asc');
  const [types, setTypes] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const allPokemon = async () => {
      const everyPokemon = await fetchPokemon();
      setPokemon(everyPokemon);
      const pokeTypes = await fetchType();
      setTypes(['All', ...pokeTypes]);

      setTimeout(() => {
        setLoad(false);
      }, 2000);
    };

    allPokemon();
  }, [setPokemon, setTypes, setLoad]);

  const searchPokemon = async () => {
    const data = await fetchByType(selectedType, search, null);
    setPokemon(data);
  };

  if (load) return <h1 className="loader">Loading</h1>;

  return (
    <>
      <div className="inputs">
        <Search
          search={search}
          setSearch={setSearch}
          callback={searchPokemon}
        />
      </div>
      {pokemon.map((grab) => (
        <PokeList grab={grab} />
      ))}
    </>
  );
}
