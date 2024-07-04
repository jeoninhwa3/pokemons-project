import PokemonDetail from "../../../components/PokemonDetail/PokemonDetail";

const DetailPage = ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  return (
    <>
      <PokemonDetail id={params.id} />
    </>
  );
};

export default DetailPage;
