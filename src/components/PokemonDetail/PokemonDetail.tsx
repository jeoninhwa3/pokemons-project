import axios from "axios";
import React, { useState } from "react";
import { Pokemon } from "../../types/pokemon";
import Image from "next/image";
import Link from "next/link";

const detailPokemonApi = async (id: number) => {
  const response = await axios.get<Pokemon>(
    `http://localhost:3000/api/pokemons/${id}`
  );
  return response.data;
};

const PokemonDetail = async ({ id }: { id: number }) => {
  const pokemon = await detailPokemonApi(id);

  const Types = () => {
    return pokemon.types.map((type, idx) => (
      <span key={idx} className="font-normal">
        {type.type.korean_name}
      </span>
    ));
  };

  const Abilities = () => {
    return pokemon.abilities.map((ability, idx) => (
      <span key={idx} className="font-normal">
        {ability.ability.korean_name}
      </span>
    ));
  };

  const Moves = () => {
    return pokemon.moves.map((move, idx) => (
      <span key={idx} className="font-normal mr-1 break-keep whitespace-nowrap">
        {move.move.korean_name}
      </span>
    ));
  };

  return (
    <main className="bg-home w-9/12 m-auto p-8 rounded shadow-main text-center">
      <div>
        <span className="text-sm">NO. {pokemon.id}</span>
        <p className="text-2xl font-bold">{pokemon.korean_name}</p>
      </div>
      <div>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>
      <p className="mb-2 font-bold">
        키 : <span className="font-normal">{pokemon.height * 10} cm</span> 무게
        : <span className="font-normal">{pokemon.weight / 10} kg</span>
      </p>
      <p className="mb-2 font-bold">
        타입 : {Types()} 특성 : {Abilities()}
      </p>
      <p className="mb-2 font-bold">기술 : {Moves()}</p>
      <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded">
        <Link href="/">뒤로 가기</Link>
      </button>
    </main>
  );
};

export default PokemonDetail;
