import axios from "axios";
import React, { useState } from "react";
import { Pokemon } from "../../types/pokemon";

const detailPokemonApi = async (id: number) => {
  const response = await axios.get<Pokemon[]>(
    `http://localhost:3000/api/pokemons/${id}`
  );
  return response.data;
};

const PokemonDetail = async ({ id }: { id: number }) => {
  return (
    <div className="bg-white p-5">
      <div>
        <strong></strong>
      </div>
    </div>
  );
};

export default PokemonDetail;
