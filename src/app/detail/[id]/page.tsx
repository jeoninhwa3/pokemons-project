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
      <p className="text-white">{params.id}</p>
    </>
  );
};

export default DetailPage;
