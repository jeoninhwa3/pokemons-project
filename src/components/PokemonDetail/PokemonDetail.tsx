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
          타입 : <span>{pokemon.types[0].type.korean_name}</span> 특성 :
          <span>{pokemon.abilities[0].ability.korean_name}</span>
        </li>
        {/* <li>
          기술 : 
        </li> */}
      </ul>
      <button>
        <Link href={"/"}>뒤로 가기</Link>
      </button>
    </div>
  );
};

export default PokemonDetail;
