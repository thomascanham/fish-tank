import { getFishById } from "../lib/data";

export default async function FishPage({ params }) {
  const { id } = await params;
  const data = await getFishById(id);

  console.log(data);

  return (
    <>
      <h1>{data.name}</h1>
    </>
  )
}