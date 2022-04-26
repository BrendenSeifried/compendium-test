import { createContext, useContext, useState } from 'react';

const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('asc');
  const [types, setTypes] = useState([]);
  const [load, setLoad] = useState(true);

  

  return (
    <PokeContext.Provider value={{ pokemon, setPokemon, selectedType, setSelectedType, search, setSearch, order, setOrder, types, setTypes, load, setLoad }}>{children}</PokeContext.Provider>
  );
    
};

const usePokeContex = () => {
  const data = useContext(PokeContext);
  if (data === undefined) {
    throw new Error('The Pokemon Escaped!');
  }
  return data;
};

export { PokeProvider, usePokeContex };