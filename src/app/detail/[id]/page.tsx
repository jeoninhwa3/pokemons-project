import PokemonDetail from "../../../components/PokemonDetail/PokemonDetail";

const DetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <PokemonDetail />;
};

export default DetailPage;
