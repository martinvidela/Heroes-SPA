import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
