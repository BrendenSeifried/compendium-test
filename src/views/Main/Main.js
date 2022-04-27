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

      // setTimeout(() => {
      // setLoad(false);
    };
    allPokemon();
  }, [setPokemon, setTypes, setLoad]);

  // useEffect(() => {
  //   const userType = async () => {
  //     const matchingPokemon = await fetchByType(selectedType, null, order);
  //     setPokemon(matchingPokemon);
  //   };
  //   if (selectedType) {
  //     userType();
  //   }
  // }, [selectedType, order, setPokemon]);

  const searchPokemon = async () => {
    const data = await fetchByType(selectedType, search, null);
    setPokemon(data);
  };

  if (load) return <div className="loader">Loading, please wait.</div>;

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
