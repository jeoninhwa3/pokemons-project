"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon";
import Image from "next/image";
import Link from "next/link";

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
    <ul className="flex flex-wrap justify-center gap-5">
      {pokemons?.map((pokemon: Pokemon) => (
        <li
          key={pokemon.id}
          className="rounded p-5 bg-white shadow-card cursor-pointer transition-all text-center hover:scale-110"
        >
          <Link href={`/detail/${pokemon.id}`}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.korean_name}
              width={120}
              height={120}
            />
            <span className="text-sm font-bold">NO. {pokemon.id}</span>
            <p className="text-xl font-bold">{pokemon.korean_name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
