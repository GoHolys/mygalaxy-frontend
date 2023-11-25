import { useParams } from "react-router-dom";
import { useAxiosFetch } from "../hooks/useFetch";
import { PersonData, PersonI } from "../interfaces/people";

export default function Person() {
  const { personId } = useParams();

  const [data, error, loading] = useAxiosFetch<PersonData>(
    `http://localhost:8080/people/person/${personId}`
  );

  const {
    person: {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      vehicles,
      starships,
      films,
      created,
      edited,
    } = {} as PersonI,
  } = data || {};

  if (loading) {
    return <h1 className="text-center text-3xl font-bold">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-3xl font-bold">error</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <ul>
          <li>Name: {name}</li>
          <li>Height: {height}</li>
          <li>Mass: {mass}</li>
          <li>Hair color: {hair_color}</li>
          <li>Skin color: {skin_color}</li>
          <li>Eye color: {eye_color}</li>
          <li>Birth year: {birth_year}</li>
          <li>Gender: {gender}</li>
          <li>Homeworld: {homeworld}</li>
          <li>Films:</li>
          <ul>
            {films.map((film) => (
              <li>{film}</li>
            ))}
          </ul>
          <li>
            Vehicles:
            {vehicles.length
              ? vehicles.map((vehicle) => <li>{vehicle}</li>)
              : " none"}
          </li>

          <li>
            Starships:
            {starships.length
              ? starships.map((vehicle) => <li>{vehicle}</li>)
              : " none"}
          </li>
          <ul>
            {starships.map((starship) => (
              <li>{starship}</li>
            ))}
          </ul>
          <li>Created: {created?.toString().slice(0, 10)}</li>
          <li>Edited: {edited?.toString().slice(0, 10)}</li>
        </ul>
      </div>
    </div>
  );
}
