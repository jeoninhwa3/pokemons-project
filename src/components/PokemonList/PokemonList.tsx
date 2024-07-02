"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon";
import Image from "next/image";

const PokemonList: React.FC = ({}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const pokemonApi = async () => {
    const response = await axios.get<Pokemon[]>(
      "http://localhost:3000/api/pokemons"
    );
    return response.data;
  };

  const fetchData = async (): Promise<void> => {
    try {
      const data = await pokemonApi();
      setPokemons(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(pokemons);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {pokemons?.map((pokemon: Pokemon) => (
        <li key={pokemon.id}>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            width={100}
            height={100}
          />
          <strong>{pokemon.id}</strong>
          <p>{pokemon.korean_name}</p>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
