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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul className="flex flex-wrap gap-5">
      {pokemons?.map((pokemon: Pokemon) => (
        <li
          key={pokemon.id}
          className="border rounded-2xl p-5 cursor-pointer transition-all hover:scale-110"
        >
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            width={120}
            height={120}
          />
          <strong>도감번호 : {pokemon.id}</strong>
          <p>{pokemon.korean_name}</p>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
