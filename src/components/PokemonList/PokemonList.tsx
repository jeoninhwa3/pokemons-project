"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../public/images/img_loading.webp";

const PokemonList: React.FC = ({}) => {
  const pokemonApi = async () => {
    const response = await axios.get<Pokemon[]>(
      "http://localhost:3000/api/pokemons"
    );
    return response.data;
  };

  const {
    data: pokemons,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: pokemonApi,
  });

  if (isPending) {
    return (
      <div className="bg-home w-9/12 m-auto p-8 rounded text-center">
        <p className="text-3xl font-bold">로딩중이니 잠깐 기다리라구!</p>
        <Image
          src={Loading}
          width={300}
          height={500}
          alt="로딩중이니 잠깐 기다리라구!"
          className="mt-8 mx-auto"
        />
      </div>
    );
  }

  if (isError) {
    return <div>데이터를 불러오는 도중에 오류가 발생했습니다.</div>;
  }

  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {pokemons.map((pokemon: Pokemon) => (
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
