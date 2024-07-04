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
      <span key={idx}>{type.type.korean_name}</span>
    ));
  };

  const Abilities = () => {
    return pokemon.abilities.map((ability, idx) => (
      <span key={idx}>{ability.ability.korean_name}</span>
    ));
  };

  const Moves = () => {
    return pokemon.moves.map((move, idx) => (
      <span key={idx}>{move.move.korean_name}</span>
    ));
  };

  return (
    <div className="bg-white p-5 text-center">
      <div>
        <strong>{pokemon.korean_name}</strong>
        <span>NO. {pokemon.id}</span>
      </div>
      <ul>
        <li>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            width={100}
            height={100}
          />
        </li>
        <li>
          키 : {pokemon.height * 10} cm 무게 : {pokemon.weight / 10} kg
        </li>
        <li>
          타입 : {Types()} 특성 : {Abilities()}
        </li>
        <li>기술 : {Moves()}</li>
      </ul>
      <button>
        <Link href={"/"}>뒤로 가기</Link>
      </button>
    </div>
  );
};

export default PokemonDetail;
