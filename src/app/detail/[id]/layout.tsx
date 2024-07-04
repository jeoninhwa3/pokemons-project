import type { Metadata } from "next";

export async function detailMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const id = params.id;

  const pokemon = await fetch(`http://localhost:3000/api/pokemons/${id}`).then(
    (res) => res.json()
  );

  return {
    title: `${pokemon.korean_name}에 대한 상세 정보`,
    description: `${pokemon.korean_name}에 대해 알아보기`,
  };
}

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
